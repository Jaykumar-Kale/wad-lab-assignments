# Assignment 2(c) – Angular Authentication System using MongoDB (MEAN Stack)

---

## 🎯 Aim

To design and implement a Full Stack Authentication System using Angular (Frontend) and Node.js + Express + MongoDB (Backend), implementing secure user registration, login, JWT-based authentication, and protected routes.

---

# 📌 Overview

This project demonstrates a complete authentication workflow using:

- Angular 17+ (Frontend)
- Node.js & Express (Backend)
- MongoDB (Database)
- Mongoose (ODM)
- bcryptjs (Password Hashing)
- JSON Web Token (JWT) for authentication
- CORS for cross-origin communication

The system allows:
- User Registration
- User Login
- Secure Password Storage
- JWT Token Generation
- Protected Profile Access

---

# 🏗️ Project Architecture

Assignment-2/
│
├── angular-auth-app        (Frontend - Angular)
└── angular-auth-backend    (Backend - Node + Express + MongoDB)

Frontend runs on: http://localhost:4200  
Backend runs on: http://localhost:5000  

---

# ⚙️ Technologies Used

## Frontend
- Angular 17+
- TypeScript
- Angular Router
- FormsModule
- HttpClient
- LocalStorage (Token Storage)

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken (JWT)
- cors

---

# 🔐 Authentication Flow (Step-by-Step)

1. User registers with name, email, and password.
2. Backend hashes password using bcrypt.
3. Hashed password stored in MongoDB.
4. User logs in with email and password.
5. Backend verifies password using bcrypt.compare().
6. If valid, backend generates JWT token.
7. Token sent to frontend.
8. Frontend stores token in localStorage.
9. Token sent in Authorization header for protected routes.
10. Backend verifies token using jwt.verify().
11. If valid, protected data (profile) is returned.

---

# 🗄️ Backend Implementation

## 1️⃣ MongoDB Connection

mongoose.connect("mongodb://127.0.0.1:27017/angularAuthDB")

- Creates database: angularAuthDB
- Stores users collection automatically

---

## 2️⃣ User Schema

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

Why unique: true?
- Prevents duplicate registration using the same email.

---

## 3️⃣ Password Hashing

bcrypt.hash(password, 10)

Why hash passwords?
- Prevents storing plain text passwords
- Protects users if database is compromised
- Uses salting (10 rounds)

---

## 4️⃣ Login & JWT Token Generation

const token = jwt.sign(
  { id: user._id },
  "secretKey",
  { expiresIn: "1h" }
);

JWT contains:
- User ID
- Expiry time
- Digital signature

---

## 5️⃣ Protected Route Verification

jwt.verify(token, "secretKey");

If token is valid:
- Access granted

If token is invalid:
- Access denied

---

# 🌐 Frontend Implementation (Angular)

## 1️⃣ Angular Routing

Routes used:
- /register
- /login
- /profile

RouterOutlet dynamically loads components.

---

## 2️⃣ Auth Service (API Communication)

AuthService methods:
- register()
- login()
- getProfile()

Uses HttpClient to communicate with backend APIs.

---

## 3️⃣ Two-Way Data Binding

[(ngModel)] synchronizes:
- Input field
- Component variable

---

## 4️⃣ Storing JWT in Browser

localStorage.setItem('token', res.token);

Token stored securely in browser storage.

---

## 5️⃣ Sending Token in Header

Authorization: token

Backend reads token from header and verifies it.

---

# 🧠 Viva Important Concepts

What is JWT?
JWT (JSON Web Token) is a stateless authentication mechanism used to securely transmit information between client and server.

Why hash passwords?
To prevent exposure of plain text passwords in case the database is hacked.

What is Middleware?
Middleware is a function that executes before the route handler. Used here to verify JWT token.

What is CORS?
CORS allows communication between frontend (port 4200) and backend (port 5000).

What is Mongoose?
Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

---

# 🚀 How to Run the Project

## Backend

cd angular-auth-backend
node server.js

Runs on:
http://localhost:5000

---

## Frontend

cd angular-auth-app
ng serve

Runs on:
http://localhost:4200

---

# 🧪 Testing Procedure

1. Open Angular app
2. Register new user
3. Verify user in MongoDB Compass
4. Login
5. Check token in browser localStorage
6. Access profile page
7. Backend verifies JWT
8. User data displayed

---

# 📂 Folder Structure

angular-auth-app/
│
├── src/app/
│   ├── register/
│   ├── login/
│   ├── profile/
│   ├── services/
│   ├── app.ts
│   ├── app.routes.ts
│   └── app.config.ts

angular-auth-backend/
│
├── models/
├── middleware/
└── server.js

---

# 🔐 Security Improvements (Future Scope)

- Use environment variables for secret key
- Implement Logout functionality
- Add Angular Route Guards
- Add password strength validation
- Implement Refresh Tokens

---

# ✅ Conclusion

This project successfully demonstrates:

✔ Full Stack Development  
✔ REST API Development  
✔ MongoDB Integration  
✔ Secure Authentication using JWT  
✔ Angular Routing  
✔ Service-Based Architecture  
✔ Real-world Login System  

The implementation follows modern industry standards for authentication and secure web application development.

---

# 📌 Git Commands Used

git add .
git commit -m "Completed Assignment 2(c) - Angular JWT Authentication System"
git push

---

# 🎉 Final Output

The application allows secure user registration, login, and protected profile access using JWT authentication with MongoDB integration.