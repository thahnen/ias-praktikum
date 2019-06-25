'use strict'

/*
    ANGEPASSTE VERSION FUER DIE Besucher!
    REVIEW: mehr oder weniger fertig!
*/

import SideBarView from "./sideBar.js";
import HallenView from "./hallenView.js";
import SearchView from "./searchView.js";
import LoginView from "./loginView.js";


class Application {
    constructor () {
        // Registrieren zum Empfang von Nachrichten
        APPUTIL.eventService.subscribe(this, "templates.loaded");
        APPUTIL.eventService.subscribe(this, "templates.failed");
        APPUTIL.eventService.subscribe(this, "app.cmd");

        this.sideBarView = new SideBarView("sidebar.besucher.tpl");
        this.hallenView = new HallenView();
        this.searchView = new SearchView();
        this.loginView = new LoginView();
    }

    async notify (self, message, data) {
        switch (message) {
        case "templates.failed":
            alert("Vorlagen konnten nicht geladen werden.");
            break;
        case "templates.loaded":
            // Templates konnten geladen werden:
            let markup = APPUTIL.templateManager.execute("header.besucher.tpl", null);
            let html_element = document.querySelector("header");
            html_element.innerHTML = markup;

            // Hier dann noch die einzelnen "Kommandos zu verfassen"
            let navigation = [
                ["search", "Suchen"],
                ["login", "Login"]
            ];

            let json = await fetch("/hallen").then(function(response) {
                return response.json();
            });

            for (const id in json) {
                if (json.hasOwnProperty(id)) {
                    navigation.push(["halle_" + json[id]["unique_id"], "Halle " + json[id]["unique_id"]]);
                }
            }

            self.sideBarView.render(navigation);
            this.hallenView.render(1);
            break;
        case "app.cmd":
            // Kann irgendwie auftreten, aber warum weiss ich selbst nicht!
            if (data == null) return;
            
            switch (data[0]) {
            case "search":
                this.searchView.render();
                break;
            case "login":
                this.loginView.render();
                break;
            default:
                // Einfach die Hallen laden zum anzeigen!
                let hallen_nr = parseInt(data[0].split("_")[1]);
                this.hallenView.render(hallen_nr)
                break;
            }
        }
    }
}

window.onload = function () {
    APPUTIL.eventService = new APPUTIL.EventService();
    APPUTIL.templateManager = new APPUTIL.TemplateManager();
    APPUTIL.templateManager.init();
    var application = new Application();
}
