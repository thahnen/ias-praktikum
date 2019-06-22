// REVIEW: nicht fertig!

'use strict';

export default class {
    constructor () {
        this.name = "main";
        this.template = "search.tpl";
    }

    render () {
        let markup = APPUTIL.templateManager.execute(this.template, null);
        let html_element = document.querySelector(this.name);
        if (markup == null) {
            alert("[SearchView] Template nicht renderbar!");
            return;
        }

        html_element.innerHTML = markup;

        // Event-Handler für den "Suchen"-Knopf
        let searchBtn = document.getElementById("searchBtn");
        let searchTxt = document.getElementById("searchTxt");
        if (searchBtn == null || searchTxt == null) {
            alert("[SearchView] HTML-Element nicht gefunden!");
            return;
        }

        searchBtn.addEventListener("click", function() {
            let aussteller = searchTxt.value;

            // 1) alle Aussteller laden, darin nach dem Aussteller suchen
            
            // 2) alle Hallen laden, für jeden Platz die ID mit der des Ausstellers überprüfen

            // 3) in Liste eintragen
        });
    }
}
