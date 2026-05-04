// Get users from storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// REGISTER (CREATE)
function registerUser(e) {
  e.preventDefault();

  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    dob: document.getElementById("dob").value,
    city: document.getElementById("city").value,
    address: document.getElementById("address").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  // Validation example
  if (user.mobile.length !== 10) {
    alert("Invalid mobile number");
    return;
  }

  // AJAX simulation (POST)
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "", true);

  xhr.onload = function () {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered Successfully");
    window.location = "login.html";
  };

  xhr.send();
}

// LOGIN
function loginUser(e) {
  e.preventDefault();

  let u = document.getElementById("loginUser").value;
  let p = document.getElementById("loginPass").value;

  let found = users.find((user) => user.username === u && user.password === p);

  if (found) {
    alert("Login Success");
    window.location = "list.html";
  } else {
    alert("Invalid Credentials");
  }
}

// DISPLAY USERS
if (document.getElementById("userList")) {
  let list = document.getElementById("userList");

  users.forEach((u) => {
    let li = document.createElement("li");
    li.innerHTML = `${u.name} - ${u.email} - ${u.mobile}`;
    list.appendChild(li);
  });
}
