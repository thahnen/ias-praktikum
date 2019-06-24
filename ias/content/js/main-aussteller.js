'use strict'

/*
    ANGEPASSTE VERSION FUER DIE AUSSTELLER!
    TODO: weitere Views anpassen + hinzufügen
*/

import SideBarView from "./sideBar.js";
import HomeView from "./homeViewAussteller.js";
import HallenView from "./hallenViewAussteller.js";


class Application {
    constructor () {
        // Registrieren zum Empfang von Nachrichten
        APPUTIL.eventService.subscribe(this, "templates.loaded");
        APPUTIL.eventService.subscribe(this, "templates.failed");
        APPUTIL.eventService.subscribe(this, "app.cmd");

        this.sideBarView = new SideBarView("sidebar.tpl");
        this.homeView = new HomeView();
        this.hallenView = new HallenView();
    }

    async notify (self, message, data) {
        switch (message) {
        case "templates.failed":
            alert("Vorlagen konnten nicht geladen werden.");
            break;
        case "templates.loaded":
            /*  Templates konnten geladen werden:
                1) Header laden mit Inhalt des Cookies
                2) Navigationsleiste laden mit vorgegebenen Seiten
                3) Startseite laden (sollte alle gebuchten Flächen anzeigen) */
            // Cookie-Aufbau: "password=<...>; type=<...>; username=<...>"
            let cookie_data = [...document.cookie.split("; ")];
            cookie_data.shift();
            cookie_data = cookie_data.map(x => x.split("=")[1]);
            console.log(cookie_data);

            let markup = APPUTIL.templateManager.execute("header.tpl", cookie_data);
            let html_element = document.querySelector("header");
            html_element.innerHTML = markup;

            // Hier dann noch die einzelnen "Kommandos zu verfassen"
            // TODO: Hallen dynamisch laden und alle Kommandos verfassen!
            let navigation = [
                ["home", "Übersicht"]
            ];
            
            console.log("Bevor fetch");
            let json = await fetch("/hallen").then(function(response) {
                return response.json();
            });
            console.log("Nach fetch")

            for (const id in json) {
                if (json.hasOwnProperty(id)) {
                    const element = json[id];
                    navigation.push(["halle_" + element["unique_id"], "Buchen: Halle " + element["unique_id"]]);
                }
            }

            self.sideBarView.render(navigation);
            
            this.homeView.render();
            
            break;
        case "app.cmd":
            switch (data[0]) {
            case "home":
            
                this.homeView.render();
                
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
