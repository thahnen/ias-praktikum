// REVIEW: mehr oder weniger fertig!

import {hallen_zuordnung} from "./constants.js";


export default class {
    constructor () {
        this.name = "main";
        this.template = "hallen.mitarbeiter.tpl";

        this.x_pos = null;
        this.y_pos = null;
        this.flaechen_id = null;
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

        // Hallen-Infos laden
        let halle = await fetch("/hallen/" + hallen_id).then(function(response) {
            return response.json();
        });

        // usw.
    }
}