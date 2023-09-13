# Rick and Morty : Côté serveur

## Félicitation ! 🎉 Te voilà dans la seconde partie du défi Rick and Morty Fullstack !
## Cette partie se concentrera sur l'élaboration de la partie backend. En effet, jusqu'à présent, tes données proviennent d'une API, depuis laquelle tu extraits un objet contenant tout ce dont tu as besoin. 
## Il s'agira désormais de créer ton serveur et ta base de données relationnelle pour ne plus dépendre de l'API ! Le dossier backend est quasiment vide, et ce sera à toi de composer toute l'architecture (rien de mieux pour apprendre 😄). Voici donc un récapitulatif des étapes:


## ```Partie 1: Mise en place des fondamentaux```

#### Résumé des étapes 🖥️ :

### 1. Initialisation d'un serveur express;
    - Création d'un fichier index.js à la racine du dossier backend.
        - Installation et important de la dépendance express;
        - Création d'une instance d'express (Ca ne fait pas sens pour toi ? 🧐 Regardes-donc sur internet comment créer un serveur avec Express.js);
        - Création de notre première route;
            `app.get("/", (req, res) => { console.log("Coucou !") })`
    - Vérification du caractère fonctionnel de notre serveur (simplement pour vérifier que le serveur fonctionne. Tu peux utiliser Postman pour toutes les vérifications que tu auras besoin de faire !);
    - Installation de la dépendance nodemon (tu te souviens à quoi ça sert ?);

### 2. Création de notre base de donnée :
    - Elaboration de notre script database au format sql (à la racine du dossier backend);
        - Création de la base de donnée rick_and_morty_db;
        - Création de la table rick_character;
        - Insertion des premières données (un jeu de donnée avec quatre personnages sera suffisant, mais tu peux en mettre autant que tu veux);

### 3. Connexion entre le serveur et la base de donnée :
    - Installation des dépendances dotenv et mysql2;
        - Rédaction de nos variables d'environnements;
            - Tu peux t'inspirer du fichier .env.sample, qui contient les données attendues dans le fichier .env que tu auras à créer.;

    - Création d'un fichier migration.js (à la racine du dossier backend):
        - Etablir la connexion avec la base de donnée;
        - Exécuter le script;
        - Vérifier que les données sont bien enregistrées;

## ```Partie 2: Requêtes et réponses```

### 4. Mise en place d'une architecture saine
    - Créer les dossiers nécessaires:
        - Création du dossier src/, à l'intérieur duquel se tiendront:
            - Le fichier datasource.js;
            - Le dossier routes;
            - Le dossier controllers;
            - Le dossier models;

    - Le fichier datasource.js doit contenir le code nécessaire pour se connecter à la base de donnée. Tu peux copier la première partie de ton fichier migration.js 😉

### 5. Création du Create - Read - Update - Delete pour la table rick_character
    - Elaboration du CRUD pour le gestionnaire des personnages:
        - Création d'un fichier rickAndMortyCharacter.controller.js;
            - Création d'une fonction "getAllCharacters",
            - Création d'une fonction "getCharacterById",
            - Création d'une fonction "updateCharacter",
            - Création d'une fonction "deleteCharacter",
            - Création d'une fonction "createCharacter";
    
    - Elaboration des routes liées à ce gestionnaire précis:
        - Cinq fonctions = cinq routes;

### 6. Correction des bugs et phase de test

    - Tester les routes et vérifier leur bon fonctionnement 🔥
