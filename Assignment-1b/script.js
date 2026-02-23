// Function to handle form submission
function submitForm() {

    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // Create user object
    let user = {
        name: name,
        email: email,
        username: username
    };

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    // Store back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "display.html";
}


// Function to load users in display page
function loadUsers() {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let table = document.getElementById("userTable");

    users.forEach(function(user) {
        let row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}