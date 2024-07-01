
export default class Content{

  

  content(){

    let lectureRandoMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X GET \\\n\thttp://localhost:8080/randonne/mongo/ca4c2cb3-af62-49d2-97e9-c4abbb8b2974"),
      "language": "language-mongodb"
    });

    let lectureRandoRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X GET \\\n\thttp://localhost:8080/randonne/redis/ca4c2cb3-af62-49d2-97e9-c4abbb8b2974"),
      "language": "language-mongodb"
    });
    //

    let supressionRandoMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X DELETE \\\n\thttp://localhost:8080/randonne/mongo/ca4c2cb3-af62-49d2-97e9-c4abbb8b2974"),
      "language": "language-mongodb"
    });

    let supressionRandoRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X DELETE \\\n\thttp://localhost:8080/randonne/redis/ca4c2cb3-af62-49d2-97e9-c4abbb8b2974"),
      "language": "language-mongodb"
    });

    let insertionRandoMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X POST http://localhost:8080/randonne/mongo/ -H \"Content-Type: application/json\" -d '{\n\t\"uuid\": \"f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e\",\n\t\"ra_id\": 101,\n\t\"ra_label\": \"New Test Randonne\",\n\t\"ra_gpx\": {\n\t\t\"lon\": 40.7128,\n\t\t\"lat\": -74.0060\n},\n\t\"ra_description\": \"Test description\",\n\t\"ra_duree\": 120,\n\t\"ra_difficulte\": \"Easy\",\n\t\"ra_denivele\": 150,\n\t\"ra_distance\": 5.5,\n\t\"ra_boucle\": true,\n\t\"po_id\": 1,\n\"av_id\": 1\n\}'"),
      "language": "language-mongodb"
    });

    let insertionRandoRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X POST http://localhost:8080/randonne/redis/ -H \"Content-Type: application/json\" -d '{\n\t\"uuid\": \"f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e\",\n\t\"ra_id\": 101,\n\t\"ra_label\": \"New Test Randonne\",\n\t\"ra_gpx\": {\n\t\t\"lon\": 40.7128,\n\t\t\"lat\": -74.0060\n},\n\t\"ra_description\": \"Test description\",\n\t\"ra_duree\": 120,\n\t\"ra_difficulte\": \"Easy\",\n\t\"ra_denivele\": 150,\n\t\"ra_distance\": 5.5,\n\t\"ra_boucle\": true,\n\t\"po_id\": 1,\n\"av_id\": 1\n\}'"),
      "language": "language-curl"
    });

    let modificationRandoMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X PUT http://localhost:8080/randonne/mongo/f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e -H \"Content-Type: application/json\" -d '{\n\t\"uuid\": \"f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e\",\n\t\"ra_id\": 101,\n\t\"ra_label\": \"New Test Randonne\",\n\t\"ra_gpx\": {\n\t\t\"lon\": 40.7128,\n\t\t\"lat\": -74.0060\n},\n\t\"ra_description\": \"Test description\",\n\t\"ra_duree\": 120,\n\t\"ra_difficulte\": \"Easy\",\n\t\"ra_denivele\": 150,\n\t\"ra_distance\": 5.5,\n\t\"ra_boucle\": true,\n\t\"po_id\": 1,\n\"av_id\": 1\n\}'"),
      "language": "language-mongodb"
    });

    let modificationRandoRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X PUT http://localhost:8080/randonne/redis/f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e -H \"Content-Type: application/json\" -d '{\n\t\"uuid\": \"f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e\",\n\t\"ra_id\": 101,\n\t\"ra_label\": \"New Test Randonne\",\n\t\"ra_gpx\": {\n\t\t\"lon\": 40.7128,\n\t\t\"lat\": -74.0060\n},\n\t\"ra_description\": \"Test description\",\n\t\"ra_duree\": 120,\n\t\"ra_difficulte\": \"Easy\",\n\t\"ra_denivele\": 150,\n\t\"ra_distance\": 5.5,\n\t\"ra_boucle\": true,\n\t\"po_id\": 1,\n\"av_id\": 1\n\}'"),
      "language": "language-curl"
    });

    let rechercheRandoMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X POST http://localhost:8080/randonne/mongo/search \n\t-H \"Content-Type: application/json\" \\n\t-d '{\n\t\t\"ra_id\": 919,\n\t\t\"ra_label\": \"Randonne 16\",\n\t\t\"ra_description\": \"Description of the Randonne\",\n\t\t\"ra_duree\": 149,\n\t\t\"ra_difficulte\": \"Hard\",\n\t\t\"ra_denivele\": 1721,\n\t\t\"ra_distance\": 48.86,\n\t\t\"ra_boucle\": false,\n\t\t\"po_id\": 336,\n\t\t\"av_id\": 52\n\t}'"),
      "language": "language-mongodb"
    });

    let rechercheRandoRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X POST http://localhost:8080/randonne/redis/search \n\t-H \"Content-Type: application/json\" \\n\t-d '{\n\t\t\"ra_id\": 919,\n\t\t\"ra_label\": \"Randonne 16\",\n\t\t\"ra_description\": \"Description of the Randonne\",\n\t\t\"ra_duree\": 149,\n\t\t\"ra_difficulte\": \"Hard\",\n\t\t\"ra_denivele\": 1721,\n\t\t\"ra_distance\": 48.86,\n\t\t\"ra_boucle\": false,\n\t\t\"po_id\": 336,\n\t\t\"av_id\": 52\n\t}'"),
      "language": "language-mongodb"
    });

    let lectureAvisMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X GET\n\thttp://localhost:8080/avis/mongo/4c972246-d7ad-4140-8935-e22c80e7be"),
      "language": "language-mongodb"
    });

    let lectureAvisRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X GET\n\thttp://localhost:8080/randonne/redis/ca4c2cb3-af62-49d2-97e9-c4abbb8b2974"),
      "language": "language-mongodb"
    });

    let supressionAvisMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X DELETE\n\thttp://localhost:8080/avis/mongo/4c972246-d7ad-4140-8935-e22c80e7be"),
      "language": "language-mongodb"
    });

    let supressionAvisRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X DELETE\n\thttp://localhost:8080/randonne/redis/ca4c2cb3-af62-49d2-97e9-c4abbb8b2974"),
      "language": "language-mongodb"
    });

    let insertionAvisMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X POST http://localhost:8080/avis/mongo/ -H \"Content-Type: application/json\" -d '{\n\t\"uuid\": \"f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e\",\n\t\"av_id\": 101,\n\t\"av_nb_etoile\": 5,\n\t\"av_message\": \"Test avis\",\n\t\"ra_id\": 1\n\}'"),
      "language": "language-mongodb"
    });

    let insertionAvisRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X POST http://localhost:8080/avis/redis/ -H \"Content-Type: application/json\" -d '{\n\t\"uuid\": \"f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e\",\n\t\"av_id\": 101,\n\t\"av_nb_etoile\": 5,\n\t\"av_message\": \"Test avis\",\n\t\"ra_id\": 1\n\}'"),
      "language": "language-curl"
    });

    let modificationAvisMongo = JSON.stringify({
      "code": encodeURIComponent("curl -X GET\n\thttp://localhost:8080/avis/mongo/4c972246-d7ad-4140-8935-e22c80e7be"),
      "language": "language-mongodb"
    });

    let modificationAvisRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X GET\n\thttp://localhost:8080/avis/mongo/4c972246-d7ad-4140-8935-e22c80e7be"),
      "language": "language-mongodb"
    });



//db.randonnees.findOne({_id: ObjectId("ID_de_la_randonnée")})

        return  ` 

        <div class="div3">
        <h2>Interface Api</h2>
          <p>
              Cette onglet à pour objectif de tester différentes requêtes sur les deux bases de données en même temps.
          </p>
      <div class="div4">
        <div class="div5"></div>
      <div class="div2">
      
        <!-- Randonnée -->

        <div class="div1">
          <h2>Lecture d'une randonnée</h2>
          <div class="page_box">
            <p class="paragraphe2">MongoDb</p>
            <bt-code-presentation jsonObjectString=${lectureRandoMongo}></bt-code-presentation>
            <p class="paragraphe2">Redis</p>
            <bt-code-presentation jsonObjectString=${lectureRandoRedis}></bt-code-presentation>
          </div>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>ID de la randonnée</p></div>
          <bt-input id="champIDLectureRandonnee" jsonObjectString='{"label":"ID de la randonnée"}'></bt-input>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id="boutonLectureRandonnee" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

        <div class="div1">
          <h2>Supression d'une randonnée</h2>
          <div class="page_box">
            <p class="paragraphe2">MongoDb</p>
            <bt-code-presentation jsonObjectString=${supressionRandoMongo}></bt-code-presentation>
            <p class="paragraphe2">Redis</p>
            <bt-code-presentation jsonObjectString=${supressionRandoRedis}></bt-code-presentation>
          </div>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>ID de la randonnée</p></div>
          <bt-input id="champIDSupressionRandonnee" jsonObjectString='{"label":"ID de la randonnée"}'></bt-input>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id="boutonSupressionRandonnee" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

        <div class="div1">
          <h2>Insertion d'une Randonnée</h2>
          <div class="page_box">
            <p class="paragraphe2">MongoDb</p>
            <bt-code-presentation jsonObjectString=${insertionRandoMongo}></bt-code-presentation>
            <p class="paragraphe2">Redis</p>
            <bt-code-presentation jsonObjectString=${insertionRandoRedis}></bt-code-presentation>
          </div>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>uuid</p></div>
          <bt-input id="champUIIDInsertionRandonnee" jsonObjectString='{"label":"uuid"}'></bt-input>
          <div class="paragraphe"><p>id</p></div>
          <bt-input id="champIDInsertionRandonnee" jsonObjectString='{"label":"id"}'></bt-input>
          <div class="paragraphe"><p>Nom de la randonnée</p></div>
          <bt-input id="champNomInsertionRandonnee" jsonObjectString='{"label":"Nom de la randonnée"}'></bt-input>
          <div class="paragraphe"><p>Longitude</p></div>
          <bt-input id="champLongitudeInsertionRandonnee" jsonObjectString='{"label":"Longitude"}'></bt-input>
          <div class="paragraphe"><p>Latitude</p></div>
          <bt-input id="champLatitudeInsertionRandonnee" jsonObjectString='{"label":"Latitude"}'></bt-input>
          <div class="paragraphe"><p>Description</p></div>
          <bt-input id="champDescriptionInsertionRandonnee" jsonObjectString='{"label":"Description"}'></bt-input>
          <div class="paragraphe"><p>Durée</p></div>
          <bt-input id="champDureeInsertionRandonnee" jsonObjectString='{"label":"Durée"}'></bt-input>
          <div class="paragraphe"><p>Difficulté</p></div>
          <bt-input id="champDifficulteInsertionRandonnee" jsonObjectString='{"label":"Difficulté"}'></bt-input>
          <div class="paragraphe"><p>Dénivelé</p></div>
          <bt-input id="champDeniveleInsertionRandonnee" jsonObjectString='{"label":"Dénivelé"}'></bt-input>
          <div class="paragraphe"><p>Distance</p></div>
          <bt-input id="champDistanceInsertionRandonnee" jsonObjectString='{"label":"Distance"}'></bt-input>
          <div class="paragraphe"><p>Boucle</p></div>
          <bt-input id="champBoucleInsertionRandonnee" jsonObjectString='{"label":"Boucle"}'></bt-input>
          <div class="paragraphe"><p>Points d'interêts ID</p></div>
          <bt-input id="champPointInteretIDInsertionRandonnee" jsonObjectString='{"label":"Point d interêt ID"}'></bt-input>
          <div class="paragraphe"><p>Avis ID</p></div>
          <bt-input id="champAvisIDInsertionRandonnee" jsonObjectString='{"label":"Avis ID"}'></bt-input>
          <div class="div6"><bt-button id="boutonInsertionRandonnee" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>
      
        <div class="div1">
            <h2>Modification d'une randonnée</h2>
            <div class="page_box">
            <p class="paragraphe2">MongoDb</p>
            <bt-code-presentation jsonObjectString=${modificationRandoMongo}></bt-code-presentation>
            <p class="paragraphe2">Redis</p>
            <bt-code-presentation jsonObjectString=${modificationRandoRedis}></bt-code-presentation>
          </div>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>uuid</p></div>
          <bt-input id='champUUIDModificationRandonnee' jsonObjectString='{"label":"uuid"}'></bt-input>
          <div class="paragraphe"><p>id</p></div>
          <bt-input id='champIDModificationRandonnee' jsonObjectString='{"label":"id"}'></bt-input>
          <div class="paragraphe"><p>Nom de la randonnée</p></div>
          <bt-input id='champNomModificationRandonnee' jsonObjectString='{"label":"Nom de la randonnée"}'></bt-input>
          <div class="paragraphe"><p>Longitude</p></div>
          <bt-input id="champLongitudeModificationRandonnee" jsonObjectString='{"label":"Longitude"}'></bt-input>
          <div class="paragraphe"><p>Latitude</p></div>
          <bt-input id="champLatitudeModificationRandonnee" jsonObjectString='{"label":"Latitude"}'></bt-input>
          <div class="paragraphe"><p>Description</p></div>
          <bt-input id="champDescriptionModificationRandonnee" jsonObjectString='{"label":"Description"}'></bt-input>
          <div class="paragraphe"><p>Durée</p></div>
          <bt-input id="champDureeModificationRandonnee" jsonObjectString='{"label":"Durée"}'></bt-input>
          <div class="paragraphe"><p>Difficulté</p></div>
          <bt-input id="champDifficulteModificationRandonnee" jsonObjectString='{"label":"Difficulté"}'></bt-input>
          <div class="paragraphe"><p>Dénivelé</p></div>
          <bt-input id="champDeniveleModificationRandonnee" jsonObjectString='{"label":"Dénivelé"}'></bt-input>
          <div class="paragraphe"><p>Distance</p></div>
          <bt-input id="champDistanceModificationRandonnee" jsonObjectString='{"label":"Distance"}'></bt-input>
          <div class="paragraphe"><p>Boucle</p></div>
          <bt-input id="champBoucleModificationRandonnee" jsonObjectString='{"label":"Boucle"}'></bt-input>
          <div class="paragraphe"><p>Points d'interêts ID</p></div>
          <bt-input id="champPointInteretIDModificationRandonnee" jsonObjectString='{"label":"Point d interêt ID"}'></bt-input>
          <div class="paragraphe"><p>Avis ID</p></div>
          <bt-input id="champAvisIDModificationRandonnee" jsonObjectString='{"label":"Avis ID"}'></bt-input>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id='boutonModificationRandonnee' jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>
        
        <div class="div1">
            <h2>Recherche de randonnées</h2>
            <div class="page_box">
            <p class="paragraphe2">MongoDb</p>
            <bt-code-presentation jsonObjectString=${rechercheRandoMongo}></bt-code-presentation>
            <p class="paragraphe2">Redis</p>
            <bt-code-presentation jsonObjectString=${rechercheRandoRedis}></bt-code-presentation>
          </div>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>id</p></div>
          <bt-input id='champIDRechercheRandonnee' jsonObjectString='{"label":"id"}'></bt-input>
          <div class="paragraphe"><p>Nom de la randonnée</p></div>
          <bt-input id='champNomRechercheRandonnee' jsonObjectString='{"label":"Nom de la randonnée"}'></bt-input>
          <div class="paragraphe"><p>Description</p></div>
          <bt-input id="champDescriptionRechercheRandonnee" jsonObjectString='{"label":"Description"}'></bt-input>
          <div class="paragraphe"><p>Durée</p></div>
          <bt-input id="champDureeRechercheRandonnee" jsonObjectString='{"label":"Durée"}'></bt-input>
          <div class="paragraphe"><p>Difficulté</p></div>
          <bt-input id="champDifficulteRechercheRandonnee" jsonObjectString='{"label":"Difficulté"}'></bt-input>
          <div class="paragraphe"><p>Dénivelé</p></div>
          <bt-input id="champDeniveleRechercheRandonnee" jsonObjectString='{"label":"Dénivelé"}'></bt-input>
          <div class="paragraphe"><p>Distance</p></div>
          <bt-input id="champDistanceRechercheRandonnee" jsonObjectString='{"label":"Distance"}'></bt-input>
          <div class="paragraphe"><p>Boucle</p></div>
          <bt-input id="champBoucleRechercheRandonnee" jsonObjectString='{"label":"Boucle"}'></bt-input>
          <div class="paragraphe"><p>Points d'interêts ID</p></div>
          <bt-input id="champPointInteretIDRechercheRandonnee" jsonObjectString='{"label":"Point d interêt ID"}'></bt-input>
          <div class="paragraphe"><p>Avis ID</p></div>
          <bt-input id="champAvisIDRechercheRandonnee" jsonObjectString='{"label":"Avis ID"}'></bt-input>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id='boutonRechercheRandonnees' jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

     
      </div>
      </div>

      <!-- Popup -->
      <div id="popupGlobal"><div id="popup">
        <bt-icon id=popup1 jsonObjectString = '{"link":"https://upload.wikimedia.org/wikipedia/commons/1/18/Left_arrow.svg"}'></bt-icon>
        <div id="contentPopup"></div>
      </div></div>
            `
    }
}

