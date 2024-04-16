document.getElementById("changeColorButton").addEventListener("click", function() {
    // Changement vers le mode clair
    document.body.style.backgroundColor = "#D9D9D9";
    document.querySelectorAll(".wrapper div").forEach(function(element) {
        element.style.backgroundColor = "#F7F5F2";
        element.style.color = "#101010";
    });
    // Modifier les chemins des images pour le mode clair
    document.querySelectorAll("img").forEach(function(img) {
        var imageName = img.getAttribute("data-img"); // Récupérer le nom de l'image sans l'extension
        img.src = "assets/img/white/" + imageName + ".png"; // Modifier le chemin de l'image
    });
});

document.getElementById("resetColorButton").addEventListener("click", function() {
    // Restaurer la couleur d'origine
    document.body.style.backgroundColor = ""; // Supprimer la couleur de fond pour revenir à celle par défaut
    document.querySelectorAll(".wrapper div").forEach(function(element) {
        element.style.backgroundColor = "";
        element.style.color = "";
    });
    // Réinitialiser les chemins des images aux chemins par défaut
    document.querySelectorAll("img").forEach(function(img) {
        var imageName = img.getAttribute("data-img"); // Récupérer le nom de l'image sans l'extension
        img.src = "assets/img/dark/" + imageName + ".png";
    });
});
