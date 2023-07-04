# Rick and Morty : Côté serveur
## ```Partie 1: Mise en place des fondamentaux```

#### Résumé des étapes 🖥️ :
### 1. Sub-division des dossiers de travail :

    - Un dossier frontend 
    - Un dossier backend 

### 2. Initialisation d'un serveur express;

    - Installation de la dépendance express;
    - Instanciation d'express;
    - Création de notre première route;
    - Vérification du caractère fonctionnel de notre serveur;
    - Création du gitignore;
    - Installation de nodemon;

### 3. Création de notre base de donnée :
    - Elaboration de notre script au format sql;
        - Création de la base de donnée rick_and_morty_db
        - Création de la table character;
        - Insertion des premières données;

    - Installation de l'extension VS Code MySQL de Weijan Chen
        - Connexion via l'extension à notre base de donnée;
        - Vérification de la bonne insertion des données;

### 4. Connexion entre le serveur et la base de donnée :

    - Installation des dépendances dotenv et mysql2;
        - Rédaction de nos variables d'environnements;
        - Création d'une copie des variables attendues (.env.sample);

    - Création d'un fichier migration.js:
        - Etablir la connexion avec la base de donnée;
        - Exécuter le script;
        - Vérifier que les données sont bien enregistrées;

## ```Partie 2: Requêtes et réponses```

### 5. Mise en place d'une architecture saine

    - Créer les dossiers nécessaires:
        - Création du dossier src:, à l'intérieur duquel se tiendront:
            - Création du fichier datasource.js;
            - Le dossier routes;
            - Le dossier controllers;

### 6. Création du Create - Read - Update - Delete pour la table rick_character

    - Elaboration du CRUD pour le gestionnaire des personnages:
        - Création d'un fichier rickAndMortyCharacter.controller.js;
            - Création d'une fonction "getAllCharacters",
            - Création d'une fonction "getCharacterById",
            - Création d'une fonction "createCharacter";
            - Création d'une fonction "updateCharacter",
            - Création d'une fonction "deleteCharacter",
    
    - Elaboration des routes liées à ce gestionnaire précis:
        - Cinq fonctions = cinq routes;

### 7. Correction des bugs et phase de test

    - Tester les routes et vérifier leur bon fonctionnement 🔥

### 8. Créer un "panel admin" côté frontend

    - A ce stade, nous vous simplement que notre utilisateur puisse:
        - Créer un personnage depuis un formulaire, et avoir une réponse en retour suffisamment précise pour savoir s'il a réussi. Cette fonctionnalité a été réalisée dans la vidéo suivante: 

🔽🔽🔽      [Lien vers la vidéo YouTube](https://www.youtube.com/watch?v=AR2-vcDQ8_E)

        - Mettre à jour un personnage de son choix,
        - Supprimer n'importe quel personnage, avec une pop-up de confirmation;

## ```Partie 3: Implémenter l'ajout de fichier```

### 9. Préparation de la partie backend

    - A la racine du backend, il nous faut créer le dossier public:
        - A l'intérieur duquel nous créérons:
            - un dossier uploads;
            - un dossier tmp;

### 10. Installation et utilisation de la dépendance multer

    - Installation la dépendance ```multer``` dans la partie backend, puis:
        - Créer un fichier uploadRouter.route.js, dans lequel il faudra écrire les lignes de code nécessaires pour obtenir une route permettant le téléchargement d'une image.
        - Puis, il nous faut créer une fonction / middleware `uploadController` (le fichier peut être stocké dans le dossier controller). Elle te servira notamment à gérer le renommage du fichier provenant de la requête.

        🤨 Un doute sur la manière de faire ? Regarde la quête sur l'upload de fichier avec multer !

    - Enfin, tu peux tester dans Postman si ton téléchargement est fonctionnel, en veillant à sélectionner le format form-data, et appliquer le bon nommage pour la key 🔥

### 11. Permettre à l'utilisateur de télécharger une image depuis la page Admin Panel

    - La suite de ce challenge concernera la partie frontend. Ne la sous-estime pas, il y sera question d'affichages conditionnels, de feuilles de style, de variables d'états utilisées à bon escient... Bref, un super terrain d'entraînement avec React !

    - Je te propose de créer un pattern permettant une expérience utilisateur agréable (perfectible, certes, mais agréable 😀). Voici le lien figma qui t'aidera à te le représenter:

🔽🔽🔽      [Lien vers le figma](https://www.figma.com/file/LmZN4c2DVjuBvDgk2KfCT0/Rick-%26-Morty-Fullstack-Challenge?type=design&mode=design&t=WMhBFYfrwKhDo6AW-1) 

    - Tu vas devoir transformer l'actuel composant CreationCharacterForm pour qu'il affiche un input de type checkbox à la place de l'input de type "text" (celui dédié aux images);
    
        - En d'autres termes, l'utilisateur doit voir sur son navigateur la proposition suivante:
            `Voulez-vous télécharger une image ? 🔘 Yes  🔘 No`
            - S'il clique sur oui, un input de type "file" doit apparaître. 
            - S'il clique sur non, le même input de type "text" qu'auparavant doit apparaître.

### 12. A partir de là...

    - Je te laisse explorer, méditer et définir ta manière de faire. A noter qu'il n'y en a pas qu'une seule. Seulement, il y en aura des plus optimisées que d'autres.
    - Je développe certaines stratégies dans ma vidéo sur la création de personnage, tu peux aller y jeter un oeil pour t'en inspirer 😉

    Bonne chance 🚀
