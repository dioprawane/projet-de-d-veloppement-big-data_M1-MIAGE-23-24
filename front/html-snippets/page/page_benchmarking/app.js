import Content from  './content.js';
import Style from  './style.js';

class Page extends HTMLElement {

    html;
    style;

    static get observedAttributes() {
        return [];
    }

    connectedCallback() {
        // -----------------------------------------------------------
        // [Rando]
        // -----------------------------------------------------------
        this.shadow.getElementById("boutonBenchmarkRandonneeUpdate").addEventListener("click", async () => {
            var arg = this.shadow.getElementById("formID1").getValue();
            if(arg==""){arg="10000"};
            console.log(arg);
            var data = "";
            // Résultat sur MongoDB
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/update/${arg}`,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
                }
                data = data + `Mongo : ${await reponse.text()}<br><br>`;
            } catch (e) {
                data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            // Résultat sur Redis
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/update/${arg}`, {method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}<br><br>`);
                }
                data = data + `Redis : ${await reponse.text()}<br><br>`;} 
            catch (e) {
            data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            //
            this.shadow.getElementById("contentPopup").innerHTML =  data;
            this.shadow.getElementById("popupGlobal").style.display = "flex";
        });
        // -----------------------------------------------------------
        // [Rando]
        // -----------------------------------------------------------
        this.shadow.getElementById("boutonBenchmarkRandonneeGet").addEventListener("click", async () => {
            var arg = this.shadow.getElementById("formID2").getValue();

            if(arg==""){arg="10000"};
            console.log(arg);

            var data = "";
            // Résultat sur MongoDB
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/get/${arg}`,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
                }
                data = data + `Mongo : ${await reponse.text()}<br><br>`;
            } catch (e) {
                data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            // Résultat sur Redis
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/get/${arg}`, {method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}<br><br>`);
                }
                data = data + `Redis : ${await reponse.text()}<br><br>`;} 
            catch (e) {
            data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            //
            this.shadow.getElementById("contentPopup").innerHTML =  data;
            this.shadow.getElementById("popupGlobal").style.display = "flex";
        });
        // -----------------------------------------------------------
        // [Rando]
        // -----------------------------------------------------------
        this.shadow.getElementById("boutonBenchmarkRandonneeDelete").addEventListener("click", async () => {
            var arg = this.shadow.getElementById("formID3").getValue();
            console.log("cannard");

            if(arg==""){arg="10000"};
            console.log(arg)
            var data = "";
            // Résultat sur MongoDB
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/delete/${arg}`,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
                }
                data = data + `Mongo : ${await reponse.text()}<br><br>`;
            } catch (e) {
                data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            // Résultat sur Redis
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/delete/${arg}`, {method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}<br><br>`);
                }
                data = data + `Redis : ${await reponse.text()}<br><br>`;} 
            catch (e) {
            data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            //
            this.shadow.getElementById("contentPopup").innerHTML =  data;
            this.shadow.getElementById("popupGlobal").style.display = "flex";
        });
        // -----------------------------------------------------------
        // [Rando]
        // -----------------------------------------------------------
        this.shadow.getElementById("boutonBenchmarkRandonneeCreate").addEventListener("click", async () => {
            var arg = this.shadow.getElementById("formID4").getValue();
            if(arg==""){arg="10000"};
            console.log(arg)
            var data = "";
            // Résultat sur MongoDB
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/create/${arg}`,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
                }
                data = data + `Mongo : ${await reponse.text()}<br><br>`;
            } catch (e) {
                data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            // Résultat sur Redis
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/create/${arg}`, {method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}<br><br>`);
                }
                data = data + `Redis : ${await reponse.text()}<br><br>`;} 
            catch (e) {
            data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            //
            this.shadow.getElementById("contentPopup").innerHTML =  data;
            this.shadow.getElementById("popupGlobal").style.display = "flex";
        });
        
        // -----------------------------------------------------------
        // [info]
        // -----------------------------------------------------------
        this.shadow.getElementById("boutonInfoMongodb").addEventListener("click", async () => {
            var data = "";
            // Résultat MongoDB
            try {
                const reponse = await fetch(` http://localhost:8080/memory/mongodb
                `,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
                }
                data = data + `Mongo : ${await reponse.text()}<br><br>`;
            } catch (e) {
                data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
            }            
            // Résultat Redis
            try {
                const reponse = await fetch(` http://localhost:8080/memory/redis
                `,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
                }
                data = data + `Redis : ${await reponse.text()}<br><br>`;
            } catch (e) {
                data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
            }            
            //
            this.shadow.getElementById("contentPopup").innerHTML =  data;
            this.shadow.getElementById("popupGlobal").style.display = "flex";
        });
        // -----------------------------------------------------------
        // [Jointure]
        // -----------------------------------------------------------
        this.shadow.getElementById("boutonBenchmarkJointure").addEventListener("click", async () => {
            console.log("jointure");
            var data = "";
            // Résultat sur MongoDB
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/join`,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
                }
                data = data + `Mongo : ${await reponse.text()}<br><br>`;
            } catch (e) {
                data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            // Résultat sur Redis
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/redis/benchmark/join`,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}<br><br>`);
                }
                data = data + `Redis : ${await reponse.text()}<br><br>`;} 
            catch (e) {
            data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            //
            this.shadow.getElementById("contentPopup").innerHTML =  data;
            this.shadow.getElementById("popupGlobal").style.display = "flex";
        });
        // -----------------------------------------------------------
        // [Searsh]
        // -----------------------------------------------------------
        this.shadow.getElementById("boutonBenchmarkRandonneeSearch").addEventListener("click", async () => {
            var arg = this.shadow.getElementById("formID5").getValue();
            if(arg==""){arg="10000"};
            console.log (arg);
            var data = "";
            // Résultat sur MongoDB
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/mongo/benchmark/search/${arg}`,{method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}`);
                }
                data = data + `Mongo : ${await reponse.text()}<br><br>`;
            } catch (e) {
                data = data + `Mongo : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            // Résultat sur Redis
            try {
                const reponse = await fetch(`http://localhost:8080/randonne/redis/benchmark/search/${arg}`, {method: "get",});
                if(!reponse.ok){
                    throw new Error(`Erreur lors de la récupération des données : ${reponse.status}<br><br>`);
                }
                data = data + `Redis : ${await reponse.text()}<br><br>`;} 
            catch (e) {
            data = data + `Redis : Erreur lors de la récupération des données: ${e}<br><br>`;
            }
            //
            this.shadow.getElementById("contentPopup").innerHTML =  data;
            this.shadow.getElementById("popupGlobal").style.display = "flex";
        });
        // -----------------------------------------------------------
        // Gestion de la fermeture de la popup
        // -----------------------------------------------------------
        this.shadow.getElementById("popup1").addEventListener("click",() => {
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

customElements.define('page-benchmarking', Page);

