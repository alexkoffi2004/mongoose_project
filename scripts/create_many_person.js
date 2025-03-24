// create a many person
const Person = require("../models/person")
const arrayOfPeople = [
    { nom: "Alex Koffi", âge: 30, favoriteFoods: ["Burger", "Frites"] },
    { nom: "Beni Sylvestre", âge: 28, favoriteFoods: ["Sushi", "Salade"] },
    { nom: "Placide Kouame", âge: 35, favoriteFoods: ["Burritos", "Tacos"] }
];

Person.create(arrayOfPeople)
    .then(data => console.log("Personnes ajoutées :", data))
    .catch(err => console.error("Erreur lors de l'ajout :", err));
