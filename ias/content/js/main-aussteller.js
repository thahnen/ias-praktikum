'use strict'

/*
    ANGEPASSTE VERSION FUER DIE AUSSTELLER!
    TODO: weitere Views anpassen + hinzufügen
*/

import SideBarView from "./sideBar.js";
// import {ErrorQSMView, ErrorErkanntView, ErrorBehobenView, ErrorAddView} from "./errorView.js";
// import {ProjectQSMView} from "./projectView.js";
// import {ComponentQSMView, ComponentProjectView} from "./componentView.js";
// import {QSMView} from "./workerView.js";
// import {KatFehlerView, KatFehlerEditView, KatFehlerAddView} from "./categoryView.js";
// import ErrorsByProjectView from "./errorsByProject.js";
// import ErrorsByCategoryView from "./errorsByCategory.js"


class Application {
    constructor () {
        // Registrieren zum Empfang von Nachrichten
        APPUTIL.eventService.subscribe(this, "templates.loaded");
        APPUTIL.eventService.subscribe(this, "templates.failed");
        APPUTIL.eventService.subscribe(this, "app.cmd");
        this.sideBarView = new SideBarView("aside", "sidebar.tpl");

        // this.errorQSMView = new ErrorQSMView();
        // this.errorErkanntView = new ErrorErkanntView();
        // this.errorBehobenView = new ErrorBehobenView();
        // this.errorAddView = new ErrorAddView();

        // this.projectQSMView = new ProjectQSMView();

        // this.componentQSMView = new ComponentQSMView();
        // this.componentProjectView = new ComponentProjectView();

        // this.qsmView = new QSMView();

        // this.katFehlerView = new KatFehlerView();
        // this.katFehlerEditView = new KatFehlerEditView();
        // this.katFehlerAddView = new KatFehlerAddView();

        // this.errorsByProjectView = new ErrorsByProjectView();
        // this.errorsByCategoryView = new ErrorsByCategoryView();
    }

    notify (self, message, data) {
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
                // ["halle1", "Halle 1"] ...
            ];

            self.sideBarView.render(navigation);
            markup = APPUTIL.templateManager.execute("home-aussteller.tpl", null);
            html_element = document.querySelector("main");

            if (html_element != null) html_element.innerHTML = markup;
            break;
        case "app.cmd":
            switch (data[0]) {
            case "home":
                let markup = APPUTIL.templateManager.execute("home-aussteller.tpl", null);
                let html_element = document.querySelector("main");

                if (html_element != null) html_element.innerHTML = markup;
                break;

            // Alle vorhandenen Hallen!
            // case "halle1":
            //     this.hallenView.render("halle1")
            //     break;
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
