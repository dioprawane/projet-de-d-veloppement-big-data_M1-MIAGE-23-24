
export default class Content{

    content(){
       
        return  ` 

        
    <div class="project">
        <div class="centerBox">
            <img class="image" src="data/campus.png" alt="Photo de la fac" class="img">
        </div>

    
        <h1>Projet de BigData</h1>
        <p>
            Dans le cadre du cours de BigData de notre Master 1 Miage, dispensée par M.SYSKA Michel et M.GALLI Gregory. Nous avons du réaliser un projet de BigData en groupe de 5 personnes. 
        </p>
    
        <h2>Présentation</h2>
        <p>
            Le but de ce projet était de concevoir et développer (partiellement) une application de type Big Data. Plus précisement le but était d'implémenter les opérations CRUD et des recherches multicritères (type agrégation ou équivalent, au moins deux) sur deux moteurs NoSQL : MongoDB et un autre de type différent (autre que orientée Document, dans notre cas Redis) de plus il nous a était demander de faire un benchmarking et une annalyse de ce dernier. 
        </p>
        
    
        <h2>Objectifs</h2>
        <p>
            Les objectifs de ce projet sont les suivants :
            <ul>
                <li>Implémenter les opérations CRUD sur deux moteurs NoSQL : MongoDB et Redis.</li>
                <li>Implémenter des recherches multicritères sur les deux moteurs NoSQL.</li>
                <li>Réaliser un benchmarking des deux moteurs NoSQL.</li>
                <li>Analyser les résultats du benchmarking.</li>
            </ul>
        </p>
    
        <h2>Architecture</h2>
        <p>
            L'architecture de notre projet est la suivante :
            <ul>
                <li>Une base de données MongoDB.</li>
                <li>Une base de données Redis.</li>
                <li>Une application Java Spring.</li>
                <li>Une interface web en HTML, CSS et JavaScript utilisant les WebComponents.</li>
            </ul>
    
        <h2>Fonctionnalités</h2>
        <p>
            Les fonctionnalités de notre application sont les suivantes :
            <ul>
                <li>Opérations CRUD sur MongoDB.</li>
                <li>Opérations CRUD sur Redis.</li>
                <li>Recherches multicritères sur MongoDB.</li>
                <li>Recherches multicritères sur Redis.</li>
                <li>Benchmarking des deux moteurs NoSQL.</li>
                <li>Analyse des résultats du benchmarking.</li>
            </ul>
        
        <h2>Collaborateurs</h2>
        <ul>
            <li>M. MOHDAD Ralph,</li>
            <li>M. VASSEUR Matthéo,</li>
            <li>M. WANOUNOU Ilan,</li>
            <li>M. DIOP Serigne Rawane,</li>
            <li>M. BORREANI Théo</li>
        </ul>
    
        <div class="project-details">
            <div>
                <h3>Date de début</h3>
                <p>10 Avril 2024</p>
            </div>
            <div>
                <h3>Date de fin</h3>
                <p>16 mai 2024</p>
            </div>
            <div>
                <h3>Technologies</h3>
                <p>Redis, MongoDB, Java, Spring, HTML, CSS, JavaScript</p>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    
            `
    }
}

