// Nur für Testzwecke

class Hall {
  constructor(hallId, containerId) {
    this.hallId = hallId;
    this.containerId = containerId;
    this.colorArray = ['#ffffff', '#6d6698', '#0ca7d5', '#33b2c0', '#d36e52',
                        '#4ba1a3', '#ef9006', '#aadcb7', '#a9c62b', '#29a9dc',
                      ];
  }

  /* Holt sich per GET /hallen/this.hallId den Hallenplan.
      Setzt das Klassenattribut von den Feldern,
      die nicht verändert werden dürfen auf 'rect--notSelectable'.
      Alle anderen Felder bekommen eine entsprechende Farbe zugewiesen.
      Zum Schluss wird die addListener Funktion gestartet.
  */
  renderHall() {
    fetch('./hallen/' + this.hallId)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(f => {
            let rect;
            for(let i = 0; i < f.area.length; i++) {
              for(let j = 0; j < f.area[i].length; j++) {
                rect = document.getElementById('r' + i + 'c' + j);
                if(f.area[i][j] === -1) {
                  rect.classList.add('rect--notSelectable');
                }
                else {
                  rect.style.fill = this.colorArray[f.area[i][j]];
                }
              }
            }
            this.addListener();
          });
        }.bind(this)
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }
  
  /* setzt auf allen Rechtecken im svg mit der id=containerId einen clickListener
      Ausgenommen sind die Rechtecke, die nicht angeklickt werden dürfen.
  */
  addListener() {
    let svg = document.getElementById(this.containerId);
    let rect = document.getElementsByTagName("rect");
    for(let i = 0; i < rect.length; i++) {
      if(!rect[i].classList.contains('rect--notSelectable')) {
        rect[i].addEventListener("click", e => {
          console.log(e.target.id);
          // publish clickEvent
          e.stopPropagation();
        }, false);
      }
    }
  }
}
