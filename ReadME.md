## ```Partie 3: Implémenter l'ajout de fichier```

### 0. Piqûre de rappel

    - A ce stade, n'importe quel utilisateur peut:
        - Créer un personnage depuis un formulaire, et avoir une réponse en retour suffisamment précise pour savoir s'il a réussi. Cette fonctionnalité a été réalisée dans la vidéo suivante: 

🔽🔽🔽      [Lien vers la vidéo YouTube](https://www.youtube.com/watch?v=AR2-vcDQ8_E)

        - Bien entendu, il manque encore quelques fonctionnalités, telles que: 
            - Sécurisation côté front (avec une indication claire si un input a été mal renseigné)
            - Sécurisation côté back (pour se protéger des injections SQL notamment)
        - L'heure n'étant pas au déploiement, je t'invite à poursuivre le challenge en mettant cela entre parenthèses 🙂

### 9. Préparation de la partie backend

    - A la racine du backend, il nous faut créer le dossier public:
        - A l'intérieur duquel nous créérons:
            - un dossier uploads;
            - un dossier tmp;

### 10. Installation et utilisation de la dépendance multer

    - Installation la dépendance multer dans la partie backend, puis:
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

    - Je développe certaines stratégies dans ma vidéo sur la création de personnage (cf. partie 2, 8ème étape), tu peux aller y jeter un oeil pour t'en inspirer 😉

    Bonne chance 🚀
