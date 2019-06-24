// REVIEW: mehr oder weniger fertig!

import {hallen_zuordnung} from "./constants.js";


export default class {
    constructor () {
        this.name = "main";
        this.template = "hallen.aussteller.tpl";

        this.x_pos = null;
        this.y_pos = null;
        this.uid = null;
        this.type = null;
    }

    async render (hallen_id) {
        // Template laden & ausführen
        let markup = APPUTIL.templateManager.execute(this.template, hallen_id);
        let html_element = document.querySelector(this.name);
        if (markup == null || html_element == null) {
            alert("[HallenViewAussteller] Template nicht renderbar!");
            return;
        }
        html_element.innerHTML = markup;

        // Username erhalten (zur weiteren Verarbeitung)
        let username = document.cookie.split("username")[1].split("=")[1];

        // Hallen-Infos laden
        let halle = await fetch("/hallen/" + hallen_id).then(function(response) {
            return response.json();
        });

        // Aussteller-Infos laden
        let aussteller = await fetch("/aussteller").then(function(response) {
            return response.json();
        });

        // Infos in SVG eintragen!
        for (let i = 0; i < halle["area"].length; i++) {
            for (let j = 0; j < halle["area"][i].length; j++) {
                let id = halle["area"][i][j];
                if (id == 0) {
                    let rect = document.getElementById("r"+i+"c"+j);
                    rect.classList.add("buchbar");
                    continue;
                };

                let type;
                if (id > 0) {
                    // Aussteller -> Aussteller-Name suchen anhand der Id!
                    let found = false;
                    for (const aid in aussteller) {
                        if (aussteller.hasOwnProperty(aid) && !found) {
                            const elem = aussteller[aid];
                            if (elem["unique_id"] == id) {
                                type = elem["name"];
                                this.type = elem["name"];
                                found = true;
                            }
                        }
                    }
                    if (!found) {
                        // Aussteller nicht in der Liste!
                        type = "NF!";
                    }
                } else if (id < 0) {
                    // Irgendein Objekt -> Tabelle was, was ist!
                    type = hallen_zuordnung[id];
                }

                const NS = "http://www.w3.org/2000/svg"; // gleich wie svg->xmlns!
                let text_element = document.createElementNS(NS, "text");
                text_element.setAttributeNS(null, "x", 20*j+10);
                text_element.setAttributeNS(null, "y", 20*i+10);
                text_element.appendChild(document.createTextNode(type));

                let svg = document.getElementById("svg");
                svg.appendChild(text_element);
            }
        }

        // EventHandler für alle buchbaren Flächen hinzufügen
        [...document.getElementsByClassName("buchbar")].forEach((x) => {
            x.addEventListener("click", function() {
                // Position bekommen für die REST-API
                this.x_pos = x.id.split("c")[1];
                this.y_pos = x.id.split("c")[0].split("r")[1];

                // Aussteller Uid bekommen
                let found = false;
                for (const aid in aussteller) {
                    if (aussteller.hasOwnProperty(aid) && !found) {
                        const elem = aussteller[aid];
                        if (elem["username"] == username) {
                            this.uid = elem["unique_id"];
                            found = true;
                        }
                    }
                }

                if (!found) {
                    alert("[HallenViewAussteller] Unique-Id nicht gefunden!");
                    this.x_pos = null;
                    this.y_pos = null;
                    return;
                }
            }.bind(this));
        });

        // EventHandler für den Buchen-Knopf hinzufügen
        document.getElementById("buchenBtn").addEventListener("click", function() {
            if (this.uid == null && this.x_pos == null && this.y_pos == null) {
                alert("[HallenViewAussteller] Kein Platz zum buchen ausgewählt!");
                return;
            }

            // REST-Aufruf starten
            halle["area"][this.y_pos][this.x_pos] = this.uid;

            fetch("/hallen/" + hallen_id, {
                method: "PUT",
                body: JSON.stringify(halle),
                headers: {
                    "Content-Type" : "application/json"
                }
            }).then(response => {
                if (response.status == 200) {
                    // Wenn erfolgreich, neuen Text setzen
                    const NS = "http://www.w3.org/2000/svg"; // gleich wie svg->xmlns!
                    let text_element = document.createElementNS(NS, "text");
                    text_element.setAttributeNS(null, "x", this.x_pos*20+10);
                    text_element.setAttributeNS(null, "y", this.y_pos*20+10);
                    text_element.appendChild(document.createTextNode(this.type));

                    let svg = document.getElementById("svg");
                    svg.appendChild(text_element);

                    // HTML-Klasse entfernen
                    let rect = document.getElementById("r"+this.y_pos+"c"+this.x_pos);
                    rect.classList.remove("buchbar");

                    this.x_pos = null;
                    this.y_pos = null;
                    this.uid = null;
                    return;
                }

                alert("[HallenViewAussteller] REST-Put nicht durchführbar: " + response.status);
            });
        }.bind(this));
    }
}
