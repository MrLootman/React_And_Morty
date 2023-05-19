# Rick and Morty : Côté serveur
```Partie 1: Mise en place des fondamentaux```

#### Résumé des étapes :
### 1. Sub-division des dossiers de travail :
    - Un dossier frontend;
    - Un dossier backend;

### 2. Initialisation d'un serveur express;
    - Installation de la dépendance express;
    - Instanciation d'express;
    - Création de notre première route;
    - Vérification du caractère fonctionnel de notre serveur;
    - Création du gitignore;

### 3. Création de notre base de donnée :
    - Elaboration de notre script au format sql;
        - Création de la base de donnée rick_and_morty_db
        - Création de la table character;
        - Insertion des premières données;

### 4. Connexion entre le serveur et la base de donnée :
    - Installation des dépendances dotenv et mysql;
        - Rédaction de nos variables d'environnements;
        - Création d'une copie des variables attendues (.env.sample);

    - Création d'un fichier migration.js:
        - Etablir la connexion avec la base de donnée;
        - Exécuter le script;
        - Vérifier que les données sont bien enregistrées;

```Partie 2: Le MVC```

### 5. Mise en place d'une architecture logicielle Model-View-Controller

    - Créer les dossiers nécessaires:
        - Création du dossier source:
            - Création du fichier datasource.js;
            - Le dossier `models`;
            - Le dossier `controllers`;
            - Le dossier routes;