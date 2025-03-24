const Person = require('./models/person');

// Création d'une instance et sauvegarde
const newPerson = new Person({
    nom: "Alex Koffi",
    âge: 25,
    favoriteFoods: ["Pizza", "Pâtes"]
});

newPerson.save()
    .then(data => console.log("Personne sauvegardée :", data))
    .catch(err => console.error("Erreur lors de la sauvegarde :", err));
