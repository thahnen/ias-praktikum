export default class {
    constructor() {
        this.name = "main";
        this.template = "home.mitarbeiter.tpl";
        this.halle;
    }

    async render () {

        // Hallen-Infos laden
        this.halle = await fetch("/hallen").then(function(response) {
            return response.json();
        });
        
        // Alle Buchungen in allen Hallen suchen
        let buchungen = {};
        for (const id in this.halle) {
            if (this.halle.hasOwnProperty(id)) {
                const element = this.halle[id];
                let hallen_id = element["unique_id"];
                buchungen[hallen_id] = {};
                for (let i = 0; i < element["area"].length; i++) {
                    for (let j = 0; j < element["area"][i].length; j++) {
                        let id = element["area"][i][j];
                        if (id > 0) {
                            if (buchungen[hallen_id][id] == undefined) {
                                buchungen[hallen_id][id] = {};
                                buchungen[hallen_id][id]["area"] = [];
                            }
                            buchungen[hallen_id][id]["area"].push([i, j]);
                        }
                    }
                }
            }
        }
        
        // Aussteller-Infos laden
        let aussteller = await fetch("/aussteller").then(function(response) {
            return response.json();
        });
        
        // Aussteller -> Aussteller-Name suchen anhand der Id!
        for (const halle in buchungen) {
            for (const id in buchungen[halle]) {
                if (aussteller[id] != undefined)
                    buchungen[halle][id]["name"] = aussteller[id]["name"];
                else
                    buchungen[halle][id]["name"] = "NF";
            }
        }
        
        // Template laden & ausführen
        let markup = APPUTIL.templateManager.execute(this.template, buchungen);
        let html_element = document.querySelector(this.name);
        if (markup == null || html_element == null) {
            alert("[homeAussteller] Template nicht renderbar!");
            return;
        }
        html_element.innerHTML = markup;

        this.addListener();
    }
    
    addListener() {
        // Eventlistener auf Tabellenzeilen. Regelt das markieren von Zeilen
        let zeile = document.getElementsByTagName("tr");
        for(let i = 0; i < zeile.length; i++) {
            zeile[i].addEventListener("click", e => {
                console.log(e.target.parentElement.id);
                let select = document.querySelector(".selectedRow");
                if (select != null) {
                    select.classList.remove("selectedRow");
                }
                e.target.parentElement.classList.add("selectedRow");
                e.stopPropagation();
            }, false);
        }
        
        // Eventlistener auf den Stornieren Button.
        let button = document.getElementById("btnStornieren");
        button.addEventListener("click", async e => {
            let select = document.querySelector(".selectedRow");
            let id_data = select.id.split(/t|r|c/);
            let hallen_id = id_data[1];
            let zeile = id_data[2];
            let spalte = id_data[3];
            
            this.halle[hallen_id]["area"][zeile][spalte] = 0;
            await fetch("/hallen/" + hallen_id, {
                method: 'PUT',
                body: JSON.stringify(this.halle[hallen_id]),
                headers:{
                  'Content-Type': 'application/json'
                }
            }).then(response => console.log('Success'))
            .catch(error => console.error('Error:', error));
            
            this.render();
            e.stopPropagation();
        }, false);
    }  
}
