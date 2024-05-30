document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (name && email && message) {
            alert("Thank you for your message. We will try to reach out as soon as possible!");
            contactForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
