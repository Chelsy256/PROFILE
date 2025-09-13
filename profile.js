// --- Logo Click ---
const logo = document.getElementById("logo");
if (logo) {
    logo.addEventListener("click", function (e) {
        e.preventDefault(); // stop image from opening
        alert("Welcome to Smart Nutrition UG!");
        console.log("Logo clicked: Welcome alert shown");
    });
}

// --- WhatsApp Button ---
document.addEventListener("DOMContentLoaded", function () {
    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/256757384119?text=Hello%20SmartNutritionUG!";
    whatsappLink.target = "_blank";
    whatsappLink.innerText = "Chat with us on WhatsApp";

    const footer = document.querySelector(".footerabout");
    if (footer) {
        footer.appendChild(whatsappLink);
        console.log("WhatsApp link added inside footer.");
    } else {
        document.body.appendChild(whatsappLink);
        console.log("WhatsApp link added to body (fallback).");
    }
});

// --- Contact Form ---
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // stop refresh

            // Get values
            const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            // Show alert
            alert(
                "Thank you, " + fullName + "!\n\n" +
                "We have received your message:\n" + message + "\n\n" +
                "We will contact you at " + email + " or " + phone + "."
            );

            // Log values in console
            console.log("Form Submitted:");
            console.log("Full Name:", fullName);
            console.log("Email:", email);
            console.log("Phone:", phone);
            console.log("Message:", message);

            // Optional: reset form
            form.reset();
        });
    } else {
        console.log("Contact form not found on this page.");
    }
});
