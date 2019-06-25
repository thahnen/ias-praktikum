// REVIEW: mehr oder weniger fertig!

import {hallen_zuordnung} from "./constants.js";


export default class {
    constructor () {
        this.name = "main";
        this.template = "hallen.mitarbeiter.tpl";

        this.x_pos = null;
        this.y_pos = null;
    }

    async render (hallen_id) {
        // Überhaupt nicht schön, aber muss leider so!
        let elemente = Object.assign({}, hallen_zuordnung);
        delete elemente["buchbar"];
        delete elemente["markiert"];
        delete elemente["gebucht"];
        
        let context = [hallen_id];
        context.push(Object.values(elemente));

        // Template laden & ausführen
        let markup = APPUTIL.templateManager.execute(this.template, context);
        let html_element = document.querySelector(this.name);
        if (markup == null || html_element == null) {
            alert("[HallenViewAussteller] Template nicht renderbar!");
            return;
        }
        html_element.innerHTML = markup;

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
                    rect.classList.add("bearbeitbar");
                    continue;
                };

                let type;
                let farbe = hallen_zuordnung["buchbar"];
                if (id > 0) {
                    // Aussteller -> Aussteller-Name suchen anhand der Id!
                    let found = false;
                    for (const aid in aussteller) {
                        if (aussteller.hasOwnProperty(aid) && !found) {
                            const elem = aussteller[aid];
                            if (elem["unique_id"] == id) {
                                type = elem["name"];
                                farbe = hallen_zuordnung["gebucht"]
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
                    type = hallen_zuordnung[id][0];
                    farbe = hallen_zuordnung[id][1];

                    let rect = document.getElementById("r"+i+"c"+j);
                    rect.classList.add("bearbeitbar");
                }

                // Neuen Text setzen
                const NS = "http://www.w3.org/2000/svg"; // gleich wie svg->xmlns!
                let text_element = document.createElementNS(NS, "text");
                text_element.setAttributeNS(null, "x", 20*j+10);
                text_element.setAttributeNS(null, "y", 20*i+10);
                text_element.appendChild(document.createTextNode(type));

                let svg = document.getElementById("svg");
                svg.appendChild(text_element);

                // Element einfärben
                document.getElementById("r"+i+"c"+j).style.fill = farbe;
            }
        }

        // EventHandler für alle bearbeitbaren Flächen hinzufügen
        [...document.getElementsByClassName("bearbeitbar")].forEach((x) => {
            x.addEventListener("click", function() {
                // Position bekommen für die REST-API
                this.x_pos = x.id.split("c")[1];
                this.y_pos = x.id.split("c")[0].split("r")[1];

                alert("Fläche: (" + this.x_pos + "|" + this.y_pos + ") ausgewählt!")

                // TODO: kann man noch machen, dafür muss vorher aber altes (wenn vorhanden) neu eingefärbt werden!
                //document.getElementById("r"+this.y_pos+"c"+this.x_pos).style.fill = hallen_zuordnung["markiert"];
            }.bind(this));
        });

        // EventHandler für den Bearbeiten-Knopf hinzufügen
        document.getElementById("bearbeitenBtn").addEventListener("click", function() {
            if (this.x_pos == null && this.y_pos == null) {
                alert("[HallenViewMitarbeiter] Kein Platz zum bearbeiten ausgewählt!");
                return;
            }

            // Die Id von der gewählten Option bekommen
            let select = document.getElementById("options");
            let value = select.options[select.selectedIndex].value;
            let oid = 0;
            for (const id in hallen_zuordnung) {
                if (hallen_zuordnung.hasOwnProperty(id)) {
                    const element = hallen_zuordnung[id];
                    if (element[0] == value) {
                        oid = id;
                        break;
                    }
                }
            }

            // REST-Aufruf starten
            halle["area"][this.y_pos][this.x_pos] = oid;

            fetch("/hallen/" + hallen_id, {
                method: "PUT",
                body: JSON.stringify(halle),
                headers: {
                    "Content-Type" : "application/json"
                }
            }).then(response => {
                if (response.status == 200) {
                    this.x_pos = null;
                    this.y_pos = null;

                    // Rekursiver Aufruf ich weiss, aber erspart einiges an frickeliger Schreibarbeit!
                    // TODO: ggf alle EventHandler-Deklarationen aus "render" in Konstruktor packen
                    this.render(hallen_id);
                    return;
                }

                alert("[HallenViewAussteller] REST-Put nicht durchführbar: " + response.status);
            });
        }.bind(this));
    }
}