const personId = "ID_A_REMPLACER"; // Remplacez par un ID réel

Person.findById(personId)
    .then(data => console.log("Personne trouvée par ID :", data))
    .catch(err => console.error("Erreur lors de la recherche :", err));
