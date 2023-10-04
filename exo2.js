document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (nom.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Veuillez remplir tous les champs.");
            event.preventDefault(); // Empêche l'envoi du formulaire
        }
    });
});
