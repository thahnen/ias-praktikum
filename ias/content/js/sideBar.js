// REVIEW: fertig

'use strict';

export default class {
    constructor (template) {
        this.name = "aside";
        this.template = template;
    }

    render (data) {
        // Template laden & ausführen
        let markup = APPUTIL.templateManager.execute(this.template, data);
        let html_element = document.querySelector(this.name);
        if (markup == null || html_element == null) {
            alert("[LoginView] Template nicht renderbar!")
            return;
        }
        html_element.innerHTML = markup;

        // EventHandler für alle Menu-Elemente hinzufügen
        html_element.addEventListener("click", function(event) {
            APPUTIL.eventService.publish("app.cmd", [
                event.target.dataset.action, null
            ]);
        });
    }
}
