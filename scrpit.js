document.getElementById("changeColorButton").addEventListener("click", function() {
    // Changement vers le mode clair
    document.body.style.backgroundColor = "#D9D9D9";
    document.querySelectorAll(".wrapper div").forEach(function(element) {
        element.style.backgroundColor = "#F7F5F2";
        element.style.color = "#101010";
    });
    // Modifier les chemins des images pour le mode clair
    document.querySelectorAll(".changetheme img").forEach(function(img) {
        img.src = "assets/img/dark/" + img.getAttribute("data-img");
        console.log(img.src)
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
    document.querySelectorAll(".changetheme img").forEach(function(img) {
        img.src = "assets/img/dark/" + img.getAttribute("data-img");
    });
});

