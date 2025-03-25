// search person by favorite aliment
require("dotenv").config()
const Person = require("../models/person")

Person.findOne({ favoriteFoods: "Sushi" })
    .then(data => console.log("Personne trouvée :", data))
    .catch(err => console.error("Erreur lors de la recherche :", err));
