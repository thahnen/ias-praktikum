// REVIEW: mehr oder weniger fertig!

'use strict';

export default class {
    constructor () {
        this.name = "main";
        this.template = "search.tpl";
    }

    async render () {
        // Template laden & ausführen
        let markup = APPUTIL.templateManager.execute(this.template, null);
        let html_element = document.querySelector(this.name);
        if (markup == null || html_element == null) {
            alert("[SearchView] Template nicht renderbar!");
            return;
        }
        html_element.innerHTML = markup;

        // HTML-Elemente auf Verfügbarkeit prüfen
        let searchBtn = document.getElementById("searchBtn");
        let searchTxt = document.getElementById("searchTxt");
        if (searchBtn == null || searchTxt == null) {
            alert("[SearchView] HTML-Element nicht gefunden!");
            return;
        }

        // EventHandler für den Suchen-Knopf hinzufügen
        searchBtn.addEventListener("click", async function() {
            let name = searchTxt.value;

            // 1) Aussteller laden, darin nach dem Aussteller suchen
            let aussteller = await fetch("/aussteller").then(function(response) {
                return response.json();
            });

            let found = false;
            let uid;
            for (const aid in aussteller) {
                const elem = aussteller[aid];
                if (elem["name"] == name) {
                    uid = elem["unique_id"];
                    found = true;
                    break;
                }
            }

            if (!found) {
                alert("[SearchView] Eigene Aussteller-Id nicht gefunden!");
                return;
            }
            
            // 2) Hallen laden, für jeden Platz die ID mit der des Ausstellers überprüfen
            let hallen = await fetch("/hallen").then(function(response) {
                return response.json();
            });

            let staende = [];
            for (const hid in hallen) {
                const elem = hallen[hid];
                for (let i = 0; i < elem["area"].length; i++) {
                    for (let j = 0; j < elem["area"][i].length; j++) {
                        const platz = elem["area"][i][j];
                        if (platz == uid) {
                            staende.push([elem["unique_id"], "("+i+"|"+j+")"]);
                        }
                    }
                }
            }

            // 3) Überschrift setzen
            let header = document.getElementById("header");
            header.innerText = "Stände: " + name;

            // 4) in Liste eintragen
            let tbody = document.getElementById("liste").firstElementChild;

            for (let i = 0; i < staende.length; i++) {
                let tr = document.createElement("tr");

                const elem = staende[i];
                let hallen_nr = document.createElement("td");
                hallen_nr.appendChild(document.createTextNode(elem[0]));
                tr.appendChild(hallen_nr);

                let pos = document.createElement("td");
                pos.appendChild(document.createTextNode(elem[1]));
                tr.appendChild(pos);

                tbody.appendChild(tr);
            }
        });
    }
}
