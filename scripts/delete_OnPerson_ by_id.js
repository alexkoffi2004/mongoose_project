require("dotenv").config()
const Person = require("../models/person")

const personId = "";

Person.findByIdAndRemove(personId)
    .then(deletedPerson => console.log("Personne supprimée :", deletedPerson))
    .catch(err => console.error("Erreur lors de la suppression :", err));
