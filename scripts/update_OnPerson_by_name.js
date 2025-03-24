const personName = "Alex Koffi";

Person.findOneAndUpdate(
    { nom: personName },
    { âge: 20 }, 
    { new: true } // Retourne la version mise à jour
)
.then(updatedPerson => console.log("Personne mise à jour :", updatedPerson))
.catch(err => console.error("Erreur lors de la mise à jour :", err));
