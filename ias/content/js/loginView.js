// REVIEW: fertig

'use strict';

export default class {
    constructor () {
        this.name = "main";
        this.template = "login.tpl";
    }

    render () {
        let markup = APPUTIL.templateManager.execute(this.template, null);
        let html_element = document.querySelector(this.name);
        if (markup == null) {
            alert("[LoginView] Template nicht renderbar!")
            return;
        }

        html_element.innerHTML = markup;
    }
}
