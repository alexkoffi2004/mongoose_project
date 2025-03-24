Person.find({ nom: "Alex Koffi" })
    .then(data => console.log("Personnes trouvées :", data))
    .catch(err => console.error("Erreur lors de la recherche :", err));
