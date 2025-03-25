document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const successMessage = document.getElementById("success-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Show success message
        successMessage.classList.remove("hidden");

        // Optional: Reset the form fields
        loginForm.reset();

        // Optional: Redirect after a delay (e.g., 2 seconds)
        setTimeout(() => {
            window.location.href = "loging.page.html"; // Change to your dashboard page
        }, 2000);
    });
});
