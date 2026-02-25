# 📘 Web Development Application (WAD) Laboratory Practice – II  
## Third Year – Information Technology (SPPU 2019 Pattern)  
### Pune Institute of Computer Technology (PICT)

---

# 📌 Repository Overview  

This repository contains all the assignments completed as part of **Laboratory Practice – II (Web Development Application)**.  

The objective of this lab is to develop full-stack web applications and deploy them using modern web technologies and cloud platforms.

This README serves as a **Global Documentation File** covering:

- Aim of each assignment  
- Problem Statement  
- Theory  
- Implementation Steps  
- Tools & Technologies  
- Expected Output  
- Conclusion  

---

# 🛠 Technologies Used Throughout the Lab

- HTML5  
- CSS3  
- JavaScript  
- Node.js  
- Express.js  
- MongoDB  
- REST API  
- AWS VPC  
- AWS Elastic Beanstalk  
- Git & GitHub  
- VS Code  
- Ubuntu / Windows  

---

# 📂 Assignment Index

1. Assignment 1 – Basic Web Application  
2. Assignment 2 – Client-Side Validation & Dynamic Web Page  
3. Assignment 3 – Server-Side Development using Node.js & Express  
4. Assignment 4A – REST API with CRUD Operations  
5. Assignment 4B – Deployment on AWS VPC / Elastic Beanstalk  

---

---

# ✅ Assignment 1  
## Basic Web Application Development  

---

## 🎯 Aim  

To design and develop a simple static web application using HTML and CSS.

---

## 📌 Problem Statement  

Create a responsive website that includes structured layout and proper styling.

---

## 📚 Theory  

### HTML (HyperText Markup Language)  
- Used to structure web content.
- Defines headings, paragraphs, links, images, forms, tables, etc.

### CSS (Cascading Style Sheets)  
- Used to style web pages.
- Controls colors, layout, fonts, responsiveness.

---

## ⚙ Implementation Steps  

1. Create `index.html`
2. Define webpage structure:
   - Header
   - Navigation
   - Content section
   - Footer
3. Create `style.css`
4. Apply:
   - Background styling
   - Font styles
   - Responsive layout

---

## 📊 Output  

✔ Structured webpage  
✔ Styled UI  
✔ Responsive layout  

---

## 🏁 Conclusion  

Learned the basics of front-end development using HTML and CSS.

---

---

# ✅ Assignment 2  
## Client-Side Validation & Dynamic Web Page  

---

## 🎯 Aim  

To implement client-side validation using JavaScript.

---

## 📌 Problem Statement  

Create a web form and validate user inputs using JavaScript.

---

## 📚 Theory  

### JavaScript  
- Client-side scripting language
- Used for dynamic web page behavior

### Client-Side Validation  
- Prevents incorrect data submission
- Improves user experience

---

## ⚙ Implementation Steps  

1. Create HTML Form:
   - Name
   - Email
   - Password
2. Add JavaScript validation:
   - Empty field check
   - Email format validation
   - Password strength validation
3. Display error messages dynamically

---

## 📊 Output  

✔ Form validation before submission  
✔ Proper error handling  

---

## 🏁 Conclusion  

Understood JavaScript DOM manipulation and client-side validation.

---

---

# ✅ Assignment 3  
## Server-Side Application using Node.js & Express  

---

## 🎯 Aim  

To develop server-side web application using Node.js and Express.

---

## 📌 Problem Statement  

Create a backend server that handles HTTP requests and serves web content.

---

## 📚 Theory  

### Node.js  
- JavaScript runtime environment  
- Handles asynchronous operations  

### Express.js  
- Lightweight web framework  
- Simplifies routing and middleware handling  

---

## ⚙ Implementation Steps  

1. Initialize Node Project  
```
npm init
```

2. Install Express  
```
npm install express
```

3. Create `server.js`

4. Define routes:
   - GET
   - POST

5. Run server  
```
node server.js
```

---

## 📊 Output  

✔ Server running on localhost  
✔ API routes responding  

---

## 🏁 Conclusion  

Learned server-side programming using Node.js and Express.

---

---

# ✅ Assignment 4A  
## REST API with CRUD Operations  

---

## 🎯 Aim  

To create REST APIs using Node.js, Express, and MongoDB to perform CRUD operations.

---

## 📌 Problem Statement  

Develop RESTful web services for user administration system.

---

## 📚 Theory  

### REST Architecture  
- Representational State Transfer  
- Uses HTTP methods  

| Operation | Method |
|-----------|--------|
| Create | POST |
| Read | GET |
| Update | PUT |
| Delete | DELETE |

---

### MongoDB  
- NoSQL database  
- Stores data in JSON format  

### Mongoose  
- ODM for MongoDB  

---

## ⚙ Implementation Steps  

1. Install dependencies  
```
npm install express mongoose body-parser
```

2. Create:
   - Model
   - Controller
   - Routes

3. Implement CRUD:
   - POST /users
   - GET /users
   - PUT /users/:id
   - DELETE /users/:id

4. Test using Postman

---

## 📊 Output  

✔ Data stored in MongoDB  
✔ Full CRUD operations working  

---

## 🏁 Conclusion  

Understood REST API development and database integration.

---

---

# ✅ Assignment 4B  
## Deployment on AWS VPC / AWS Elastic Beanstalk  

---

## 🎯 Aim  

To deploy and host web application on AWS Cloud.

---

## 📌 Problem Statement  

Deploy/Host web application using AWS VPC or AWS Elastic Beanstalk.

---

# 📚 Theory  

---

## ☁️ Amazon VPC  

Virtual network inside AWS cloud.  

### Components:
- VPC
- Subnets
- Route Tables
- Internet Gateway
- NAT Gateway
- Security Groups
- VPC Flow Logs

---

## 🌐 AWS Elastic Beanstalk  

Platform as a Service (PaaS) for deploying applications without managing infrastructure.

Automatically provisions:
- EC2
- Load Balancer
- Auto Scaling
- CloudWatch
- S3

---

# ⚙ Deployment Steps (Elastic Beanstalk)

1. Create AWS account
2. Open Elastic Beanstalk Console
3. Create Application
4. Choose Platform (Node.js)
5. Upload application ZIP
6. Deploy
7. Access generated URL

---

# ⚙ Deployment Steps (VPC + EC2)

1. Create VPC
2. Create Subnets
3. Attach Internet Gateway
4. Configure Route Table
5. Launch EC2
6. Deploy application manually
7. Access via Public IP

---

## 📊 Output  

✔ Application hosted on AWS  
✔ Publicly accessible URL  
✔ Infrastructure provisioned  

---

## 🏁 Conclusion  

Successfully understood:

- Cloud networking basics  
- Application deployment process  
- AWS infrastructure services  
- Managed vs manual deployment  

---

# 🔥 Overall Learning Outcomes  

- Full-stack web development  
- Frontend + Backend integration  
- Database connectivity  
- REST API design  
- Cloud deployment  
- DevOps basics  

---

# 📚 References  

1. AWS VPC Documentation  
2. AWS Elastic Beanstalk Documentation  
3. Node.js Official Docs  
4. Express.js Documentation  
5. MongoDB Documentation  

---

# 👨‍💻 Author  

**Jaykumar Kale**  
Third Year – Information Technology  
Pune Institute of Computer Technology  

---

# 📌 Final Conclusion  

This repository demonstrates end-to-end understanding of:

✔ Web Application Development  
✔ Backend API Development  
✔ Database Integration  
✔ Cloud Deployment on AWS  

The lab provided practical exposure to modern web development and cloud technologies.

---

⭐ This project reflects structured implementation of Web Development Application Lab as per SPPU 2019 Pattern curriculum.