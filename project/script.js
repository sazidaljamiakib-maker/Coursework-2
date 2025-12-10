// Save last visit using LocalStorage
document.addEventListener("DOMContentLoaded", () => {
    let lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        console.log("Last visit:", lastVisit);
    }

    localStorage.setItem("lastVisit", new Date().toLocaleString());
});


// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let errors = [];

    if (name.length < 3) {
        errors.push("Name must be at least 3 characters.");
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (message.length < 10) {
        errors.push("Message must be at least 10 characters.");
    }

    if (errors.length > 0) {
        statusMsg.style.color = "red";
        statusMsg.textContent = errors.join(" ");
        return;
    }

    statusMsg.style.color = "green";
    statusMsg.textContent = "Message sent successfully!";

    // POPUP MESSAGE
    alert("Thank you! Your order is confirmed.");

    form.reset();
});
