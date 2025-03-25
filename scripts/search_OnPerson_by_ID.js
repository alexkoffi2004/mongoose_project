require("dotenv").config()
const Person = require("../models/person")

const personId = ""; // Remplacez par un ID réel

Person.findById(personId)
    .then(data => console.log("Personne trouvée par ID :", data))
    .catch(err => console.error("Erreur lors de la recherche :", err));
