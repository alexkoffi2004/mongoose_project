const personId = "ID_A_REMPLACER";

Person.findByIdAndRemove(personId)
    .then(deletedPerson => console.log("Personne supprimée :", deletedPerson))
    .catch(err => console.error("Erreur lors de la suppression :", err));
