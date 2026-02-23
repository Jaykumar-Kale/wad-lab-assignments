# Assignment 1b – JavaScript AJAX Implementation

---

## 📌 Problem Statement

Write a JavaScript program to get user registration data and push it to array/local storage using AJAX POST method and display the data on a new page.

---

## 🎯 Objective

- To understand the working of JavaScript.
- To understand AJAX (Asynchronous JavaScript and XML).
- To implement client-side data storage using localStorage.
- To dynamically display stored data without refreshing the page.
- To simulate server-side POST behavior using JavaScript.

---

## 🛠 Technologies Used

- HTML5
- CSS (Bootstrap 5)
- JavaScript (ES6)
- AJAX Concepts
- localStorage
- JSON

---

# 📚 THEORY

---

## 1️⃣ HTML Form

An HTML form is used to collect user input.

In this assignment, the form contains:

- Textbox → Full Name
- Email field → Email
- Textbox → Username
- Password field → Password
- Submit button → Register

Example:

```html
<input type="text" id="fullName">
<input type="email" id="email">
<input type="text" id="username">
<input type="password" id="password">
```

The form data is accessed using JavaScript DOM methods.

---

## 2️⃣ JavaScript

JavaScript is a client-side scripting language used to make web pages interactive.

In this assignment, JavaScript is used to:

- Capture form values
- Validate input
- Create user object
- Store data in localStorage
- Redirect to another page
- Dynamically generate table rows

---

## 3️⃣ AJAX (Asynchronous JavaScript and XML)

AJAX stands for:

> Asynchronous JavaScript and XML

AJAX allows data to be sent and received **without refreshing the page**.

### 🔹 Traditional Method:
- User submits form
- Page reloads
- Data sent to server

### 🔹 AJAX Method:
- JavaScript handles submission
- No page reload
- Data processed in background

AJAX improves:
- Performance
- User experience
- Speed

---

## 4️⃣ XMLHttpRequest (Core AJAX Object)

AJAX works using XMLHttpRequest object.

Basic structure:

```javascript
let xhr = new XMLHttpRequest();
xhr.open("POST", "server.php", true);
xhr.send(data);
```

In this assignment, since we don’t have backend,
we simulate server behavior using JavaScript + localStorage.

---

## 5️⃣ localStorage

localStorage is a Web Storage API that stores data in the browser.

### Features:
- Stores data as key-value pairs
- Data persists even after browser is closed
- Stores data as strings only

Example:

```javascript
localStorage.setItem("users", JSON.stringify(users));
```

Retrieve data:

```javascript
let users = JSON.parse(localStorage.getItem("users"));
```

---

## 6️⃣ Why JSON.stringify() and JSON.parse()?

localStorage stores only strings.

So:

### JSON.stringify()
Converts JavaScript object → String

### JSON.parse()
Converts String → JavaScript object

Example:

```javascript
let user = {name: "Jay", email: "jay@gmail.com"};

localStorage.setItem("user", JSON.stringify(user));

let data = JSON.parse(localStorage.getItem("user"));
```

---

# 🔄 DATA FLOW IN THIS PROJECT

1. User enters data in registration form.
2. JavaScript captures values using DOM.
3. A user object is created.
4. Existing users are retrieved from localStorage.
5. New user is added to array.
6. Updated array is stored back in localStorage.
7. Page redirects to display page.
8. display.html reads localStorage.
9. Table rows are dynamically generated.

---

# 🧩 IMPLEMENTATION EXPLANATION

---

## 1️⃣ Capturing Form Data

```javascript
let name = document.getElementById("fullName").value;
```

This accesses input value using DOM.

---

## 2️⃣ Creating User Object

```javascript
let user = {
    name: name,
    email: email,
    username: username
};
```

Object structure is used for better data organization.

---

## 3️⃣ Storing Data in localStorage

```javascript
let users = JSON.parse(localStorage.getItem("users")) || [];
users.push(user);
localStorage.setItem("users", JSON.stringify(users));
```

Explanation:

- Retrieve existing users
- If none exist, initialize empty array
- Add new user
- Store updated array

---

## 4️⃣ Redirecting to Display Page

```javascript
window.location.href = "display.html";
```

Redirects user to display stored data.

---

## 5️⃣ Dynamically Generating Table Rows

```javascript
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
```

This dynamically inserts rows into table body.

---

# 📊 Difference Between localStorage and sessionStorage

| Feature | localStorage | sessionStorage |
|----------|--------------|---------------|
| Persistence | Permanent | Until browser closed |
| Scope | Same origin | Same origin |
| Capacity | ~5MB | ~5MB |

---

# ⚡ Advantages of AJAX

- No page reload
- Faster response
- Better user experience
- Reduced server load
- Asynchronous processing

---

# 🧠 Important Viva Questions & Answers

---

### Q1: What is AJAX?

AJAX is a technique that allows asynchronous communication between client and server without refreshing the webpage.

---

### Q2: Why use JSON.stringify?

Because localStorage stores data in string format, so objects must be converted to string.

---

### Q3: What happens if localStorage is empty?

We use:

```javascript
JSON.parse(localStorage.getItem("users")) || [];
```

So if null, it initializes empty array.

---

### Q4: What makes AJAX asynchronous?

It sends requests in background and does not block execution.

---

### Q5: Can localStorage store objects directly?

No. It only stores strings.

---

# 🏗 Folder Structure

```
Assignment-1b/
│
├── index.html
├── display.html
├── script.js
└── README.md
```

---

# ✅ Features Implemented

- User registration form
- Input validation
- Data storage in localStorage
- Dynamic data display
- Table generation using JavaScript
- Simulated AJAX behavior
- Page redirection

---

# 🏁 Conclusion

Thus, we successfully implemented a user registration system using JavaScript and AJAX concepts. The user data is stored using localStorage and dynamically displayed on a separate page without refreshing the browser. This assignment demonstrates understanding of AJAX, DOM manipulation, JSON handling, and client-side storage.
