# Assignment 3b – API for CRUD Operations using Node.js, Express and MongoDB

## Title
API for CRUD Operations

## Problem Statement
Create four APIs using Node.js, Express.js and MongoDB for CRUD operations such as Register User, Login User, Show User Data, Update User and Delete User.

---

## Objective
- To understand REST API development.
- To use Express framework for backend routing.
- To use MongoDB for database operations.
- To use Mongoose for schema modeling.
- To implement authentication using JWT.
- To implement password hashing using bcrypt.
- To understand and use proper HTTP status codes.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors

---

## Project Architecture

Client (Postman/Frontend)
        ↓
Express Server
        ↓
Routes
        ↓
Controller Logic
        ↓
Mongoose Model
        ↓
MongoDB Database

---

# CRUD Operations with Status Codes

---

## 1. Register User (CREATE)

Endpoint:
POST /api/register

### Process:
- Check if all fields are provided
- Check if email already exists
- Hash password using bcrypt
- Save user to MongoDB

### Status Codes Used:

- 201 Created  
  → When user is successfully registered.

- 400 Bad Request  
  → When required fields are missing.  
  → When user already exists.

- 500 Internal Server Error  
  → If server/database error occurs.

---

## 2. Login User (READ + AUTH)

Endpoint:
POST /api/login

### Process:
- Check if user exists
- Compare password using bcrypt
- Generate JWT token
- Return token

### Status Codes Used:

- 200 OK  
  → Login successful and token generated.

- 400 Bad Request  
  → Invalid email or password.

- 500 Internal Server Error  
  → If server error occurs.

---

## 3. Get All Users (READ)

Endpoint:
GET /api/users

Protected Route (JWT Required)

### Process:
- Verify JWT token
- Fetch users from database
- Exclude password field

### Status Codes Used:

- 200 OK  
  → Users successfully fetched.

- 401 Unauthorized  
  → No token provided or invalid token.

- 500 Internal Server Error  
  → Server/database error.

---

## 4. Update User (UPDATE)

Endpoint:
PUT /api/users/:id

Protected Route

### Process:
- Verify JWT
- Update name/email
- Return updated user

### Status Codes Used:

- 200 OK  
  → User successfully updated.

- 404 Not Found  
  → User ID does not exist.

- 401 Unauthorized  
  → Invalid or missing token.

- 500 Internal Server Error  
  → Server error.

Important Option:
{ new: true }  
→ Returns updated document instead of old one.

---

## 5. Delete User (DELETE)

Endpoint:
DELETE /api/users/:id

Protected Route

### Process:
- Verify JWT
- Delete user from database

### Status Codes Used:

- 200 OK  
  → User deleted successfully.

- 404 Not Found  
  → User not found.

- 401 Unauthorized  
  → No token or invalid token.

- 500 Internal Server Error  
  → Server error.

---

# Complete List of HTTP Status Codes Used in This Project

| Status Code | Meaning | When Used |
|------------|----------|------------|
| 200 | OK | Successful GET, UPDATE, DELETE |
| 201 | Created | Successful registration |
| 400 | Bad Request | Invalid input or user exists |
| 401 | Unauthorized | Token missing or invalid |
| 404 | Not Found | User not found |
| 500 | Internal Server Error | Unexpected server/database failure |

---

# Why Status Codes Are Important

- Help frontend understand result of API call
- Standardized HTTP communication
- Improve debugging
- Required in real-world REST APIs
- Frequently asked in interviews

Example:

201 → Resource created  
400 → Client error  
401 → Authentication failed  
404 → Resource does not exist  
500 → Server error  

---

# Security Concepts Implemented

1. Password Hashing:
   - bcrypt hashing
   - Salt rounds = 10
   - Prevents storing plain text passwords

2. JWT Authentication:
   - Token-based authentication
   - Token expires in 1 hour
   - Protects routes

3. Environment Variables:
   - MongoDB URI
   - JWT Secret
   - Port number
   - Stored in .env file

---

# REST API Principles Followed

POST   → Create resource  
GET    → Retrieve resource  
PUT    → Update resource  
DELETE → Delete resource  

This follows REST architectural style.

---

# How to Run

1. Install dependencies:
   npm install

2. Create .env file:
   MONGO_URI=mongodb://127.0.0.1:27017/wad_db
   JWT_SECRET=mysecretkey
   PORT=5000

3. Start server:
   node server.js

4. Test using Postman.

---

# Interview-Level Understanding

Q: Why 201 for register?
A: Because a new resource (user) is created in database.

Q: Why 400 for login failure?
A: Because credentials provided by client are invalid.

Q: Why 401 for protected routes?
A: Because authentication failed or token missing.

Q: Why 404 for update/delete?
A: Because requested resource does not exist.

Q: Why 500?
A: Because server failed unexpectedly.

---

# Conclusion

Thus, we successfully developed a RESTful API for user administration using Node.js, Express.js, MongoDB and Mongoose. The system supports complete CRUD operations with secure password hashing, JWT authentication and proper HTTP status codes. This implementation follows REST principles and demonstrates strong backend development fundamentals suitable for real-world applications and interviews.
