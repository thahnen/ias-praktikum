// REVIEW: mehr oder weniger fertig!

import {hallen_zuordnung} from "./constants.js";


export default class {
    constructor () {
        this.name = "main";
        this.template = "hallen.besucher.tpl";
    }

    async render (hallen_id) {
        // Template laden & ausführen
        let markup = APPUTIL.templateManager.execute(this.template, hallen_id);
        let html_element = document.querySelector(this.name);
        if (markup == null || html_element == null) {
            alert("[HallenView] Template nicht renderbar!");
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
                if (id == 0) continue;

                let type;
                if (id > 0) {
                    // Aussteller -> Aussteller-Name suchen anhand der Id!
                    let found = false;
                    for (const aid in aussteller) {
                        if (aussteller.hasOwnProperty(aid) && !found) {
                            const elem = aussteller[aid];
                            if (elem["unique_id"] == id) {
                                type = elem["name"];
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
    }
}