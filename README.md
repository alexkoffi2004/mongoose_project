# 📁 Projet : Manipulation de données avec Mongoose

Bienvenue dans ce petit projet d'apprentissage autour de **Mongoose**, une bibliothèque puissante qui facilite les interactions entre une application Node.js et une base de données MongoDB.

Ce projet est destiné à tous ceux qui veulent comprendre les bases de la manipulation de données (CRUD) avec **Mongoose**. Pas besoin d’être expert, tout est expliqué pas à pas !

---

## 🧠 Objectif du projet

- Se connecter à une base de données MongoDB avec Mongoose
- Créer un modèle de données (ici : `Person`)
- Ajouter une ou plusieurs personnes dans la base
- Lire, modifier et supprimer des données

---

## 🛠️ Technologies utilisées

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) pour gérer les variables d’environnement

---

## 📦 Installation du projet

> Ces étapes supposent que Node.js est déjà installé sur ta machine. Si ce n’est pas le cas, télécharge-le [ici](https://nodejs.org/).

### 1. Cloner le projet

git clone <lien-du-projet>
cd checkpoint-mongoose

### 2. Installer les dépendances

npm install nodejs mongoose dotenv

## 3. Configurer la base de données

Crée un fichier .env à la racine du projet et ajoute-y :

MONGO_URI=your_mongodb_connection_string_here
PORT= 
MOT_DE_PASS= your_password_here
Remplace "your_mongodb_connection_string_here" par ton lien MongoDB Atlas.

## 🔗 Links
Si tu ne sais pas comment l’obtenir, regarde ce guide rapide ici :
[![portfolio]( https://www.mongodb.com/docs/atlas/getting-started/)]


# 📁 Structure du projet

.
├── models/
│   └── Person.js           --> Le modèle Mongoose de la personne
├── createManyPeople.js     --> Script pour insérer plusieurs personnes
├── server.js               --> Point d'entrée de l'application
├── .env                    --> (à créer) contient ta clé MongoDB
├── package.json
└── README.md

# ✨ Fonctionnalités incluses
## ✅ Connexion à MongoDB
Le fichier server.js utilise dotenv pour lire les infos de connexion à la base de données, puis se connecte à MongoDB.

## ✅ Création d’un modèle Person

Dans models/Person.js, on crée un schéma Mongoose avec les champs suivants :

- name (String, requis)
- age (Number)
- favoriteFoods (Array of Strings)

## ✅ Insertion de plusieurs personnes

 Le fichier createManyPeople.js contient une fonction qui ajoute plusieurs personnes à la base.

- Exécution automatique une fois la connexion réussie.

# 🚀 Lancer le projet

node server.js

### Tu devrais voir :

✅ Connexion à MongoDB réussie !
✅ Données ajoutées avec succès : [...]

# ✉️ Contact

## Si tu veux en discuter, échanger ou améliorer le projet, n’hésite pas à me contacter.

- [@ALex Koffi](https://github.com/alexkoffi2004)
