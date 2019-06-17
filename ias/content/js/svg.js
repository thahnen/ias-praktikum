// Nur für Testzwecke

class Hall {
  constructor(hallId, containerId) {
    this.hallId = hallId;
    this.containerId = containerId;
  }

  // tut noch nichts
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
            console.log(f);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }
  
  // setzt auf allen Rechtecken im svg mit der id=containerId einen clickListener
  addListener() {
    let svg = document.getElementById(this.containerId);
    let rect = document.getElementsByTagName("rect");
    for(let i = 0; i < rect.length; i++) {
      rect[i].addEventListener("click", e => {
        console.log(e.target.id);
        // publish clickEvent
      }, false);
    }
  }
}


