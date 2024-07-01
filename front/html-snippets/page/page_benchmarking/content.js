
export default class Content{

  content(){
    
    var benchmarkRandoMongoUpdate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/mongo/benchmark/update"),
      "language": "language-mongodb"
    });

    var benchmarkRandoRedisUpdate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/redis/benchmark/update"),
      "language": "language-mongodb"
    });

    var benchmarkRandoMongoGet = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/mongo/benchmark/get"),
      "language": "language-mongodb"
    });

    var benchmarkRandoRedisGet = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/redis/benchmark/get"),
      "language": "language-mongodb"
    });
     

    var benchmarkRandoMongoDelete = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/mongo/benchmark/delete"),
      "language": "language-mongodb"
    });

    var benchmarkRandoRedisDelete = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/redis/benchmark/delete"),
      "language": "language-mongodb"
    });

    var benchmarkRandoMongoCreate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/mongo/benchmark/create"),
      "language": "language-mongodb"
    });

    var benchmarkRandoRedisCreate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/redis/benchmark/create"),
      "language": "language-mongodb"
    });

    // ----------------------------------------------


    var benchmarkAvisMongoUpdate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/mongo/benchmark/update"),
      "language": "language-mongodb"
    });

    var benchmarkAvisRedisUpdate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/redis/benchmark/update"),
      "language": "language-mongodb"
    });

    var benchmarkAvisMongoGet = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/mongo/benchmark/get"),
      "language": "language-mongodb"
    });

    var benchmarkAvisRedisGet = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/redis/benchmark/get"),
      "language": "language-mongodb"
    });
     

    var benchmarkAvisMongoDelete = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/mongo/benchmark/delete"),
      "language": "language-mongodb"
    });

    var benchmarkAvisRedisDelete = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/redis/benchmark/delete"),
      "language": "language-mongodb"
    });

    var benchmarkAvisMongoCreate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/mongo/benchmark/create"),
      "language": "language-mongodb"
    });

    var benchmarkAvisRedisCreate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/redis/benchmark/create"),
      "language": "language-mongodb"
    });

     // ----------------------------------------------


     var benchmarkPointInteretMongoUpdate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/pointInteret/mongo/benchmark/update"),
      "language": "language-mongodb"
    });

    var benchmarkPointInteretRedisUpdate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/pointInteret/redis/benchmark/update"),
      "language": "language-mongodb"
    });

    var benchmarkPointInteretMongoGet = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/pointInteret/mongo/benchmark/get"),
      "language": "language-mongodb"
    });

    var benchmarkPointInteretRedisGet = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/pointInteret/redis/benchmark/get"),
      "language": "language-mongodb"
    });
     

    var benchmarkPointInteretMongoDelete = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/pointInteret/mongo/benchmark/delete"),
      "language": "language-mongodb"
    });

    var benchmarkPointInteretRedisDelete = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/redis/benchmark/delete"),
      "language": "language-mongodb"
    });

    var benchmarkPointInteretMongoCreate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/mongo/benchmark/create"),
      "language": "language-mongodb"
    });

    var benchmarkPointInteretRedisCreate = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/avis/redis/benchmark/create"),
      "language": "language-mongodb"
    });

    // ----------------------------------------------

    var infoMongodb = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/memory/mongodb"),
      "language": "language-mongodb"
    });

    var infoRedis = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/memory/redis"),
      "language": "language-mongodb"
    });

    //  ----------------------------------------------

    var benchmarkJointure = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/mongo/benchmark/join"),
      "language": "language-mongodb"
    });

    var benchmarkRandoMongoSearch = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/mongo/benchmark/search"),
      "language": "language-mongodb"
    });

    var benchmarkRandoRedisSearch = JSON.stringify({
      "code": encodeURIComponent("curl -X GET http://localhost:8080/randonne/redis/benchmark/search"),
      "language": "language-mongodb"
    });


    
    
    return  ` 

        <div class="div3">
        <h2>Interface Api</h2>
          <p>
              Cette onglet à pour objectif de permettre aux utilisateurs de tester et comparer les performances des deux Bases de données a travers des tests type benchmark.
          </p>
      <div class="div4">
        <div class="div5"></div>
      <div class="div2">
      
        <!-- ----------------------------------- -->

        <div class="div1">
          <h2>Benchmark sur lecture des randonnées - Update</h2>
          <p class="paragraphe2">MongoDb</p>
          <bt-code-presentation jsonObjectString=${benchmarkRandoMongoUpdate}></bt-code-presentation>
          <p class="paragraphe2">Redis</p>
          <bt-code-presentation jsonObjectString=${benchmarkRandoRedisUpdate}></bt-code-presentation>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>Nombre d'itéraions</p></div>
          <bt-input id="formID1" jsonObjectString='{"label":"Par défaut 10 000 itérations"}'></bt-input>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id="boutonBenchmarkRandonneeUpdate" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

        <div class="div1">
          <h2>Benchmark sur lecture des randonnées - Get</h2>
          <p class="paragraphe2">MongoDb</p>
          <bt-code-presentation jsonObjectString=${benchmarkRandoMongoGet}></bt-code-presentation>
          <p class="paragraphe2">Redis</p>
          <bt-code-presentation jsonObjectString=${benchmarkRandoRedisGet}></bt-code-presentation>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>Nombre d'itéraions</p></div>
          <bt-input id="formID2" jsonObjectString='{"label":"Par défaut 10 000 itérations"}'></bt-input>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id="boutonBenchmarkRandonneeGet" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

        <div class="div1">
          <h2>Benchmark sur lecture des randonnées - Delete</h2>
          <p class="paragraphe2">MongoDb</p>
          <bt-code-presentation jsonObjectString=${benchmarkRandoMongoDelete}></bt-code-presentation>
          <p class="paragraphe2">Redis</p>
          <bt-code-presentation jsonObjectString=${benchmarkRandoRedisDelete}></bt-code-presentation>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>Nombre d'itéraions</p></div>
          <bt-input id="formID3" jsonObjectString='{"label":"Par défaut 10 000 itérations"}'></bt-input>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id="boutonBenchmarkRandonneeDelete" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

        <div class="div1">
          <h2>Benchmark sur lecture des randonnées - Create</h2>
          <p class="paragraphe2">MongoDb</p>
          <bt-code-presentation jsonObjectString=${benchmarkRandoMongoCreate}></bt-code-presentation>
          <p class="paragraphe2">Redis</p>
          <bt-code-presentation jsonObjectString=${benchmarkRandoRedisCreate}></bt-code-presentation>
          <bt-container class="space"></bt-container>
          <div class="paragraphe"><p>Nombre d'itéraions</p></div>
          <bt-input id="formID4" jsonObjectString='{"label":"Par défaut 10 000 itérations"}'></bt-input>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id="boutonBenchmarkRandonneeCreate" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

        <div class="div1">
        <h2>Benchmark sur recherche des randonnées</h2>
        <p class="paragraphe2">MongoDb</p>
        <bt-code-presentation jsonObjectString=${benchmarkRandoMongoSearch}></bt-code-presentation>
        <p class="paragraphe2">Redis</p>
        <bt-code-presentation jsonObjectString=${benchmarkRandoRedisSearch}></bt-code-presentation>
        <bt-container class="space"></bt-container>
        <div class="paragraphe"><p>Nombre d'itéraions</p></div>
        <bt-input id="formID5" jsonObjectString='{"label":"Par défaut 10 000 itérations"}'></bt-input>
        <bt-container class="space"></bt-container>
        <div class="div6"><bt-button id="boutonBenchmarkRandonneeSearch" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
      </div>

        <div class="div1">
          <h2>Benchmark de jointure (5 entrées)</h2>
          <bt-code-presentation jsonObjectString=${benchmarkJointure}></bt-code-presentation>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id="boutonBenchmarkJointure" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

  

        <!-- --------------------------------------------------------------------------------------------- -->

        <div class="div1">
          <h2>Informations sur les bases de données MONGO DB et REDIS</h2>
          <bt-code-presentation jsonObjectString=${infoMongodb}></bt-code-presentation>
          <bt-container class="space"></bt-container>
          <div class="div6"><bt-button id="boutonInfoMongodb" jsonObjectString='{"label":"Lancer"}'></bt-button></div>
        </div>

        <!-- --------------------------------------------------------------------------------------------- -->

        




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

