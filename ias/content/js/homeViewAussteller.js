export default class {
    constructor() {
        this.name = "main";
        this.template = "home.aussteller.tpl";
        this.halle;
    }

    async render () {
        // username aus den cookies suchen       
        let cookie_data = [...document.cookie.split("; ")];
        cookie_data.shift();
        cookie_data = cookie_data.map(x => x.split("=")[1]);
        let username = cookie_data[1];
        let aussteller_id;
        let buchungen = {};
        
        // Aussteller-Infos laden
        let aussteller = await fetch("/aussteller").then(function(response) {
            return response.json();
        });
        
        // Aussteller-ID anhand des username suchen
        for (const id in aussteller) {
            if (aussteller.hasOwnProperty(id)) {
                const element = aussteller[id];
                if (element["username"] == username) {
                    aussteller_id = element["unique_id"];
                    break;
                }
            }
        }
        
        // Hallen-Infos laden
        this.halle = await fetch("/hallen").then(function(response) {
            return response.json();
        });
        
        // Alle Buchungen vom angemeldeten Aussteller in allen Hallen suchen
        for (const id in this.halle) {
            if (this.halle.hasOwnProperty(id)) {
                const element = this.halle[id];
                let hallen_id = element["unique_id"];
                buchungen[hallen_id] = [];
                for (let i = 0; i < element["area"].length; i++) {
                    for (let j = 0; j < element["area"][i].length; j++) {
                        let id = element["area"][i][j];
                        if (id == aussteller_id) {
                            buchungen[hallen_id].push([i, j]);
                        }
                    }
                }
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
