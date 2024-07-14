// script.js

document.addEventListener("DOMContentLoaded", function() {
    const sendMessageButton = document.getElementById("send-message-button");
    const contactFormContainer = document.getElementById("contact-form-container");

    sendMessageButton.addEventListener("click", function() {
        contactFormContainer.classList.toggle("hidden"); // Toggle the hidden class
    });
});
