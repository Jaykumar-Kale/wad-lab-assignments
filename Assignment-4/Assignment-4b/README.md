# 📘 WAD Lab – Assignment 4B  
## Deployment of Web Application on AWS VPC / AWS Elastic Beanstalk  

---

## 📌 Title  
**Work on AWS VPC or AWS Elastic Beanstalk for Deployment**

---

## 🎯 Problem Statement  
Deploy / Host a web application on **AWS VPC** or **AWS Elastic Beanstalk**.

---

## 🎯 Objective  

- Understand the working of **Amazon VPC**
- Understand the working of **AWS Elastic Beanstalk**
- Deploy a web application on AWS Cloud
- Learn cloud networking basics (subnets, routing, gateways)
- Learn managed deployment using Elastic Beanstalk

---

## 🛠 Software / Hardware Requirements  

### Software / Services Used
- Amazon Web Services (AWS)
- AWS VPC
- AWS Elastic Beanstalk
- Amazon EC2
- Amazon S3
- AWS CloudWatch
- AWS CLI (Optional)

### Development Environment
- Ubuntu / Windows
- VS Code
- Node.js / Java / Python / PHP (depending on app)

---

# 📚 Theory

---

# ☁️ What is Amazon VPC?

Amazon VPC (Virtual Private Cloud) allows you to create a **logically isolated virtual network** inside AWS Cloud.

It behaves like a traditional data center network but is fully scalable and managed by AWS.

---

## 🔹 Key Components of VPC

### 1️⃣ VPC (Virtual Private Cloud)
- A private virtual network dedicated to your AWS account.
- You define IP address range (CIDR block).

---

### 2️⃣ Subnets
- A subnet is a subdivision of a VPC.
- Each subnet belongs to one Availability Zone.
- Types:
  - Public Subnet
  - Private Subnet

---

### 3️⃣ Internet Gateway (IGW)
- Connects VPC to the Internet.
- Required for public access.

---

### 4️⃣ Route Table
- Controls network traffic.
- Defines where traffic should go.

---

### 5️⃣ NAT Gateway
- Allows private subnet instances to access internet.
- Prevents internet from directly accessing private instances.

---

### 6️⃣ Security Groups
- Acts as virtual firewall.
- Controls inbound and outbound traffic.

---

### 7️⃣ VPC Flow Logs
- Captures network traffic information.

---

# 🌐 VPC Architecture

```
Internet
   |
Internet Gateway
   |
Public Subnet  →  EC2 (Web Server)
   |
Private Subnet →  Database Server
```

---

# 🚀 What is AWS Elastic Beanstalk?

AWS Elastic Beanstalk is a **Platform as a Service (PaaS)**.

It allows you to deploy applications without managing infrastructure manually.

You upload your application → AWS automatically handles:

- EC2 provisioning
- Load balancing
- Auto scaling
- Health monitoring
- CloudWatch alarms

---

## 🔹 Supported Platforms

- Node.js
- Java
- Python
- PHP
- .NET
- Ruby
- Go
- Docker

---

# ⚙️ Implementation – Deployment Using AWS Elastic Beanstalk

(Recommended for WAD Practical)

---

# 🧩 Step 1: Create AWS Account

1. Go to: https://aws.amazon.com
2. Create account
3. Add payment method
4. Login to AWS Console

---

# 🧩 Step 2: Create Elastic Beanstalk Application

1. Open Elastic Beanstalk Console
2. Click **Create Application**
3. Enter:
   - Application Name
   - Platform (Example: Node.js)
4. Choose:
   - Sample Application (or upload your own code)

---

# 🧩 Step 3: Environment Creation

Elastic Beanstalk automatically creates:

- EC2 instance
- Security group
- S3 bucket
- CloudWatch alarms
- Load balancer (if needed)
- CloudFormation stack
- Domain name

This takes 5–7 minutes.

---

# 🧩 Step 4: Deploy Your Own Application

1. Click **Upload and Deploy**
2. Upload your `.zip` file
3. Click Deploy
4. Wait for environment health = **OK**

---

# 🌍 Access Application

Elastic Beanstalk provides:

```
http://your-app-name.elasticbeanstalk.com
```

Click and verify your deployed web app.

---

# ⚙️ Configure Environment (Optional)

You can configure:

- EC2 instance type
- Auto scaling
- Load balancing
- Environment variables
- Monitoring alarms

From:

Elastic Beanstalk → Configuration Tab

---

# 📊 Monitoring

Use:

- CloudWatch metrics
- Environment Health
- Logs section
- Events tab

---

# 🧹 Clean Up (Very Important)

To avoid AWS charges:

1. Terminate Environment
2. Delete Application Versions
3. Delete Application
4. Delete S3 bucket (if created)

---

# 🏗 Alternative: Deployment Using AWS VPC + EC2

(If you deployed manually)

---

## 🧩 Step 1: Create VPC

1. Open VPC Console
2. Click Create VPC
3. Choose:
   - VPC and More
4. Set:
   - CIDR block (Example: 10.0.0.0/16)
5. Create Public & Private Subnets

---

## 🧩 Step 2: Attach Internet Gateway

1. Create IGW
2. Attach to VPC

---

## 🧩 Step 3: Configure Route Table

Add route:

```
0.0.0.0/0 → Internet Gateway
```

---

## 🧩 Step 4: Launch EC2 Instance

1. Choose AMI (Ubuntu)
2. Choose Instance Type
3. Select VPC and Public Subnet
4. Enable Public IP
5. Configure Security Group:
   - HTTP (80)
   - HTTPS (443)
   - SSH (22)

---

## 🧩 Step 5: Deploy Application

Connect via SSH:

```
ssh -i key.pem ubuntu@public-ip
```

Install:

```
sudo apt update
sudo apt install nodejs
```

Upload and run application:

```
node app.js
```

Access via:

```
http://public-ip
```

---

# 📌 Result

✔ Web application successfully deployed on AWS  
✔ Application accessible through public URL  
✔ Infrastructure provisioned successfully  

---

# 📊 Advantages of Elastic Beanstalk

- No infrastructure management
- Auto scaling
- Load balancing
- Health monitoring
- Fast deployment

---

# 📊 Advantages of VPC Deployment

- Full control over networking
- Custom architecture
- Enterprise-grade security
- Multi-tier architecture support

---

# 🆚 VPC vs Elastic Beanstalk

| Feature | VPC | Elastic Beanstalk |
|----------|------|------------------|
| Level | Infrastructure | Platform |
| Complexity | High | Low |
| Control | Full | Limited |
| Setup Time | More | Less |
| Best For | Custom architecture | Quick deployment |

---

# 📚 References

1. https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html  
2. https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html  
3. https://docs.aws.amazon.com/elastic-beanstalk/index.html  

---

# 🏁 Conclusion

In this assignment, we successfully studied and implemented deployment of a web application using **AWS VPC / AWS Elastic Beanstalk**.

We understood:

- VPC architecture (subnets, routing, gateways)
- Elastic Beanstalk workflow
- AWS resource provisioning
- Application hosting in cloud
- Monitoring and scaling mechanisms

Thus, we learned how cloud-based application deployment works in AWS environment.

---

🔥 If you want, I can now give:

- Viva Questions & Answers (Important)
- Diagram for drawing in journal
- 5-page formatted journal version
- 2-page short practical exam revision

Just tell me.