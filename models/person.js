const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    nom: { type: String, required: true },  // Nom obligatoire
    âge: { type: Number },
    favoriteFoods: { type: [String] } // Tableau de chaînes de caractères
});

// Création du modèle basé sur le schéma
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
