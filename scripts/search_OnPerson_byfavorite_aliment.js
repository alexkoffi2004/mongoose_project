// search person by favorite aliment
Person.findOne({ favoriteFoods: "Sushi" })
    .then(data => console.log("Personne trouvée :", data))
    .catch(err => console.error("Erreur lors de la recherche :", err));
