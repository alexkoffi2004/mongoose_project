require("dotenv").config()
const Person = require("../models/person")

Person.deleteMany({ nom: "Placide" })
    .then(result => console.log("Personnes supprimées :", result))
    .catch(err => console.error("Erreur lors de la suppression :", err));
