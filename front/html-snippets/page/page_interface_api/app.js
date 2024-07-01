import Content from  './content.js';
import Style from  './style.js';

class Page extends HTMLElement {

    html;
    style;

    static get observedAttributes() {
        return [];
    }



/*
  boutonLectureRandonnee 
    - champIDLectureRandonnee 
  boutonSupressionRandonnee
    - champIDSupressionRandonnee
  boutonInsertionRandonnee
    - champUIIDInsertionRandonnee
    - champIDInsertionRandonnee
    - champNomInsertionRandonnee
    - champLongitudeInsertionRandonnee
    - champLatitudeInsertionRandonnee
    - champDescriptionInsertionRandonnee
    - champDureeInsertionRandonnee
    - champDifficulteInsertionRandonnee
    - champDeniveleInsertionRandonnee
    - champDistanceInsertionRandonnee
    - champBoucleInsertionRandonnee
    - champPointInteretIDInsertionRandonnee
    - champAvisIDInsertionRandonnee
  boutonModificationRandonnee
    - champUUIDModificationRandonnee
    - champIDModificationRandonnee
    - champNomModificationRandonnee
    - champLongitudeModificationRandonnee
    - champLatitudeModificationRandonnee
    - champDescriptionModificationRandonnee
    - champDureeModificationRandonnee
    - champDifficulteModificationRandonnee
    - champDeniveleModificationRandonnee
    - champDistanceModificationRandonnee
    - champBoucleModificationRandonnee
    - champPointInteretIDModificationRandonnee
    - champAvisIDModificationRandonnee
  boutonRechercheRandonnees
    - champIDRechercheRandonnee
    - champNomRechercheRandonnee
    - champDescriptionRechercheRandonnee
    - champDureeRechercheRandonnee
    - champDifficulteRechercheRandonnee
    - champDeniveleRechercheRandonnee
    - champDistanceRechercheRandonnee
    - champBoucleRechercheRandonnee
    - champPointInteretIDRechercheRandonnee
    - champAvisIDRechercheRandonnee
  boutonLectureAvis
    - champUIIDLectureAvis
  boutonSupressionAvis
    - champUIIDSupressionAvis
  boutonInsertionAvis
    - champUUIDInsertionAvis
    - champIDInsertionAvis
    - champNombreEtoileInsertionAvis
    - champMessageeInsertionAvis
  boutonModificationAvis
    - champRandoIDModificationAvis
    - champIDModificationAvis
    - champNombreEtoileModificationAvis
    - champMessageModificationAvis
  boutonRechercheAvis 
    - champRandoIDRechercheAvis
    - champIDRechercheAvis
    - champNombreEtoileRechercheAvis
    - champMessageRechercheAvis
  boutonLecturePointInteret
    - champUUIDLecturePointInteret
  boutonSupressionPointInteret
    - champUUIDSupressionPointInteret
  boutonInsertionPointInteret
    - champUUIDInsertionPointInteret
    - champIDInsertionPointInteret
    - champLongitudeInsertionPointInteret
    - champLatitudeInsertionPointInteret
    - champDescriptionInsertionPointInteret
    - champLienPhotoInsertionPointInteret
  boutonModificationPointInteret
    - champUUIDModificationPointInteret
    - champIDModificationPointInteret
    - champLongitudeModificationPointInteret
    - champLatitudeModificationPointInteret
    - champDescriptionModificationPointInteret
    - champLienPhotoModificationPointInteret
  boutonRecherchePointInteret
    - champUUIDRecherchePointInteret
    - champIDRecherchePointInteret
    - champDescriptionRecherchePointInteret
    - champLienPhotoRecherchePointInteret
    - champRandoIDRecherchePointInteret
  */

  connectedCallback() {
    // -----------------------------------------------------------
    // Bouton Lecture Randonnée
    // -----------------------------------------------------------
    this.shadow.getElementById("boutonLectureRandonnee").addEventListener("click", async () => {
      const id = this.shadow.getElementById("champIDLectureRandonnee").getValue();
      var data = "";
      // Résultat sur MongoDB
      try {
        console.log(`http://localhost:8080/randonne/mongo/${id}`);
        const reponse = await fetch(`http://localhost:8080/randonne/mongo/${id}`,{
          method: "get",
        });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
        }
        data = data + `Mongo : ${await reponse.text()}<br><br>`;
      } catch (e) {
        data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
      }
      // Résultat sur Redis
      try {
        const reponse = await fetch(`http://localhost:8080/randonne/redis/${id}`, {
          method: "get",
        });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}<br><br>`);
        }
        data = data + `Redis : ${await reponse.text()}<br>`;} 
      catch (e) {
        data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
      }
      //
      this.shadow.getElementById("contentPopup").innerHTML = data;
      this.shadow.getElementById("popupGlobal").style.display = "flex";
    });
    // -----------------------------------------------------------
    // Bouton Supression Randonnée
    // -----------------------------------------------------------
    this.shadow.getElementById("boutonSupressionRandonnee").addEventListener("click", async () => {
      var id = this.shadow.getElementById("champIDSupressionRandonnee").getValue();
      var data = "";
      // Résultat sur MongoDB
      try {
        console.log(id);
        const reponse = await fetch(`http://localhost:8080/randonne/mongo/${id}`,{
          method: "delete",
        });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
        }
        data = data + `Mongo : ${await reponse.text()}<br><br>`;
      } catch (e) {
        data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
      }
      // Résultat sur Redis
      try {
        const reponse = await fetch(`http://localhost:8080/randonne/redis/${id}`, {
          method: "delete",
        });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}<br><br>`);
        }
        data = data + `Redis : ${await reponse.text()}<br>`;} 
      catch (e) {
        data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
      }
      //
      this.shadow.getElementById("contentPopup").innerHTML = data;
      this.shadow.getElementById("popupGlobal").style.display = "flex";
    });
    // -----------------------------------------------------------
    // Bouton Insertion Randonnée
    // -----------------------------------------------------------
    this.shadow.getElementById("boutonInsertionRandonnee").addEventListener("click", async () => {
      var data = "";
      // Résultat sur MongoDB
      try {
        const reponse = await fetch('http://localhost:8080/randonne/mongo/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "uuid": this.shadow.getElementById("champUIIDInsertionRandonnee").getValue(),
            "ra_id": parseInt(this.shadow.getElementById("champIDInsertionRandonnee").getValue()),
            "ra_label": this.shadow.getElementById("champNomInsertionRandonnee").getValue(),
            "ra_gpx": {
              "lon": parseFloat(this.shadow.getElementById("champLongitudeInsertionRandonnee").getValue()),
              "lat": parseFloat(this.shadow.getElementById("champLatitudeInsertionRandonnee").getValue()),
            },
            "ra_description": this.shadow.getElementById("champDescriptionInsertionRandonnee").getValue(),
            "ra_duree": parseInt(this.shadow.getElementById("champDureeInsertionRandonnee").getValue()),
            "ra_difficulte": this.shadow.getElementById("champDifficulteInsertionRandonnee").getValue(),
            "ra_denivele": parseInt(this.shadow.getElementById("champDeniveleInsertionRandonnee").getValue()),
            "ra_distance": parseFloat(this.shadow.getElementById("champDistanceInsertionRandonnee").getValue()),
            "ra_boucle": this.shadow.getElementById("champBoucleInsertionRandonnee").getValue(),
            "po_id": parseInt(this.shadow.getElementById("champPointInteretIDInsertionRandonnee").getValue()),
            "av_id": parseInt(this.shadow.getElementById("champAvisIDInsertionRandonnee").getValue()),
        })
      });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
        }
        data = data + `Mongo : ${await reponse.text()}<br>`;
      } catch (e) {
        data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br>`;
      }
      // Résultat sur Redis
      try {
        const reponse = await fetch('http://localhost:8080/randonne/redis/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "uuid": this.shadow.getElementById("champUIIDInsertionRandonnee").getValue(),
            "ra_id": parseInt(this.shadow.getElementById("champIDInsertionRandonnee").getValue()),
            "ra_label": this.shadow.getElementById("champNomInsertionRandonnee").getValue(),
            "ra_gpx": {
              "lon": parseFloat(this.shadow.getElementById("champLongitudeInsertionRandonnee").getValue()),
              "lat": parseFloat(this.shadow.getElementById("champLatitudeInsertionRandonnee").getValue()),
            },
            "ra_description": this.shadow.getElementById("champDescriptionInsertionRandonnee").getValue(),
            "ra_duree": parseInt(this.shadow.getElementById("champDureeInsertionRandonnee").getValue()),
            "ra_difficulte": this.shadow.getElementById("champDifficulteInsertionRandonnee").getValue(),
            "ra_denivele": parseInt(this.shadow.getElementById("champDeniveleInsertionRandonnee").getValue()),
            "ra_distance": parseFloat(this.shadow.getElementById("champDistanceInsertionRandonnee").getValue()),
            "ra_boucle": this.shadow.getElementById("champBoucleInsertionRandonnee").getValue(),
            "po_id": parseInt(this.shadow.getElementById("champPointInteretIDInsertionRandonnee").getValue()),
            "av_id": parseInt(this.shadow.getElementById("champAvisIDInsertionRandonnee").getValue()),
        })
    });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
        }
        data = data + `Redis : ${await reponse.text()}<br>`;} 
      catch (e) {
        data = data + `Redis : Erreur lors de la récupération des données: ${e}<br>`;
      }
      //
      this.shadow.getElementById("contentPopup").innerHTML = data;
      this.shadow.getElementById("popupGlobal").style.display = "flex";
    });
    // -----------------------------------------------------------
    // Bouton Modification Randonnée
    // -----------------------------------------------------------
    this.shadow.getElementById("boutonModificationRandonnee").addEventListener("click", async () => {

      var data = "";
      const id = this.shadow.getElementById("champUUIDModificationRandonnee").getValue();

      // Résultat sur MongoDB
      try {
        const reponse = await fetch(`http://localhost:8080/randonne/mongo/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "uuid": this.shadow.getElementById("champUUIDModificationRandonnee").getValue(),
            "ra_id": parseInt(this.shadow.getElementById("champIDModificationRandonnee").getValue()),
            "ra_label": this.shadow.getElementById("champNomModificationRandonnee").getValue(),
            "ra_gpx": {
              "lon": parseFloat(this.shadow.getElementById("champLongitudeModificationRandonnee").getValue()),
              "lat": parseFloat(this.shadow.getElementById("champLatitudeModificationRandonnee").getValue()),
            },
            "ra_description": this.shadow.getElementById("champDescriptionModificationRandonnee").getValue(),
            "ra_duree": parseInt(this.shadow.getElementById("champDureeModificationRandonnee").getValue()),
            "ra_difficulte": this.shadow.getElementById("champDifficulteModificationRandonnee").getValue(),
            "ra_denivele": parseInt(this.shadow.getElementById("champDeniveleModificationRandonnee").getValue()),
            "ra_distance": parseFloat(this.shadow.getElementById("champDistanceModificationRandonnee").getValue()),
            "ra_boucle": this.shadow.getElementById("champBoucleModificationRandonnee").getValue(),
            "po_id": parseInt(this.shadow.getElementById("champPointInteretIDModificationRandonnee").getValue()),
            "av_id": parseInt(this.shadow.getElementById("champAvisIDModificationRandonnee").getValue()),
        })
      });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
        }
        data = data + `Mongo : ${await reponse.text()}<br>`;
      } catch (e) {
        data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br>`;
      }
      // Résultat sur Redis
      try {
        const reponse = await fetch(`http://localhost:8080/randonne/mongo/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "uuid": this.shadow.getElementById("champUUIDModificationRandonnee").getValue(),
            "ra_id": parseInt(this.shadow.getElementById("champIDModificationRandonnee").getValue()),
            "ra_label": this.shadow.getElementById("champNomModificationRandonnee").getValue(),
            "ra_gpx": {
              "lon": parseFloat(this.shadow.getElementById("champLongitudeModificationRandonnee").getValue()),
              "lat": parseFloat(this.shadow.getElementById("champLatitudeModificationRandonnee").getValue()),
            },
            "ra_description": this.shadow.getElementById("champDescriptionModificationRandonnee").getValue(),
            "ra_duree": parseInt(this.shadow.getElementById("champDureeModificationRandonnee").getValue()),
            "ra_difficulte": this.shadow.getElementById("champDifficulteModificationRandonnee").getValue(),
            "ra_denivele": parseInt(this.shadow.getElementById("champDeniveleModificationRandonnee").getValue()),
            "ra_distance": parseFloat(this.shadow.getElementById("champDistanceModificationRandonnee").getValue()),
            "ra_boucle": this.shadow.getElementById("champBoucleModificationRandonnee").getValue(),
            "po_id": parseInt(this.shadow.getElementById("champPointInteretIDModificationRandonnee").getValue()),
            "av_id": parseInt(this.shadow.getElementById("champAvisIDModificationRandonnee").getValue()),
        })
    });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
        }
        data = data + `Redis : ${await reponse.text()}<br>`;} 
      catch (e) {
        data = data + `Redis : Erreur lors de la récupération des données: ${e}<br>`;
      }
      //
      this.shadow.getElementById("contentPopup").innerHTML = data;
      this.shadow.getElementById("popupGlobal").style.display = "flex";
    });
    // -----------------------------------------------------------
    // Bouton Recherche Randonnée
    // -----------------------------------------------------------
    this.shadow.getElementById("boutonRechercheRandonnees").addEventListener("click", async () => {
      var data = "";
      // Résultat sur MongoDB
      try {
        const reponse = await fetch('http://localhost:8080/randonne/mongo/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "ra_id": parseInt(this.shadow.getElementById("champIDRechercheRandonnee").getValue()),
            "ra_label": this.shadow.getElementById("champNomRechercheRandonnee").getValue(),
            "ra_description": this.shadow.getElementById("champDescriptionRechercheRandonnee").getValue(),
            "ra_duree": parseInt(this.shadow.getElementById("champDureeRechercheRandonnee").getValue()),
            "ra_difficulte": this.shadow.getElementById("champDifficulteRechercheRandonnee").getValue(),
            "ra_denivele": parseInt(this.shadow.getElementById("champDeniveleRechercheRandonnee").getValue()),
            "ra_distance": parseFloat(this.shadow.getElementById("champDistanceRechercheRandonnee").getValue()),
            "ra_boucle": this.shadow.getElementById("champBoucleRechercheRandonnee").getValue(),
            "po_id": parseInt(this.shadow.getElementById("champPointInteretIDRechercheRandonnee").getValue()),
            "av_id": parseInt(this.shadow.getElementById("champAvisIDRechercheRandonnee").getValue()),
        })
      });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
        }
        data = data + `Mongo : ${await reponse.text()}<br><br>`;
      } catch (e) {
        data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br>`;
      }
      // Résultat sur Redis
      try {
        const reponse = await fetch('http://localhost:8080/randonne/redis/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "ra_id": parseInt(this.shadow.getElementById("champIDRechercheRandonnee").getValue()),
            "ra_label": this.shadow.getElementById("champNomRechercheRandonnee").getValue(),
            "ra_description": this.shadow.getElementById("champDescriptionRechercheRandonnee").getValue(),
            "ra_duree": parseInt(this.shadow.getElementById("champDureeRechercheRandonnee").getValue()),
            "ra_difficulte": this.shadow.getElementById("champDifficulteRechercheRandonnee").getValue(),
            "ra_denivele": parseInt(this.shadow.getElementById("champDeniveleRechercheRandonnee").getValue()),
            "ra_distance": parseFloat(this.shadow.getElementById("champDistanceRechercheRandonnee").getValue()),
            "ra_boucle": this.shadow.getElementById("champBoucleRechercheRandonnee").getValue(),
            "po_id": parseInt(this.shadow.getElementById("champPointInteretIDRechercheRandonnee").getValue()),
            "av_id": parseInt(this.shadow.getElementById("champAvisIDRechercheRandonnee").getValue()),
        })
    });
        if(!reponse.ok){
          throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
        }
        data = data + `Redis : ${JSON.stringify(data)}<br>`;} 
      catch (e) {
        data = data + `Redis : Erreur lors de la récupération des données: ${e}<br>`;
      }
      //
      this.shadow.getElementById("contentPopup").innerHTML = data;
      this.shadow.getElementById("popupGlobal").style.display = "flex";
    });
    // -----------------------------------------------------------
    // Gestion de la fermeture de la popup
    // -----------------------------------------------------------
    this.shadow.getElementById("popup1").addEventListener("click",
      () => {
        this.shadow.getElementById("popupGlobal").style.display = "none";
      });
  }
    
    constructor(){
        super();
        this.html = new Content();
        this.style = new Style();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.innerHTML = this.style.content() + " " + this.html.content();
    }
}

customElements.define('page-interface-api', Page);

