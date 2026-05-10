document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // This is just a simulation. Real apps use a secure back-end!
    if (user === "admin" && pass === "1234") {
        alert("Login Successful! Welcome, " + user);
    } else {
        alert("Invalid credentials. Try: admin / 1234");
    }
});
