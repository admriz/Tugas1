document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple login validation (you can change it to your own logic)
    if (username === "admin" && password === "12345") {
        alert("Login successful!");
        // You can redirect the user or show a new page here
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password!";
    }
});