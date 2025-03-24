const personId = "ID_A_REMPLACER";

Person.findById(personId)
    .then(person => {
        if (!person) return console.log("Personne non trouvée");
        
        person.favoriteFoods.push("Hamburger");
        return person.save();
    })
    .then(updatedPerson => console.log("Personne mise à jour :", updatedPerson))
    .catch(err => console.error("Erreur lors de la mise à jour :", err));
