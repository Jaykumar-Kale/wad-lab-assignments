# Assignment 2(b) – Docker Container Environment

---

## 📌 Problem Statement

Create a Docker Container Environment and demonstrate container creation, execution, and data persistence.

---

## 🎯 Objective

- To understand containerization.
- To install Docker Desktop.
- To create and manage Docker images and containers.
- To demonstrate persistent storage using Docker volumes.

---

# 📚 THEORY

## 1️⃣ What is Docker?

Docker is a containerization platform that packages applications along with dependencies into containers.

It solves the:
"It works on my machine" problem.

---

## 2️⃣ Virtual Machine vs Docker

| Virtual Machine | Docker Container |
|-----------------|------------------|
| Full OS inside | Uses host OS kernel |
| Heavy | Lightweight |
| Slower boot | Fast startup |
| Large size (GBs) | Small size (MBs) |

---

## 3️⃣ Docker Architecture

Docker consists of:

- Docker Client
- Docker Daemon
- Docker Images
- Docker Containers
- Docker Volumes

---

## 4️⃣ Docker Image

A Docker Image is a read-only template used to create containers.

Examples:
- ubuntu
- nginx
- node
- mysql

Image = Blueprint

---

## 5️⃣ Docker Container

A container is a running instance of a Docker image.

Container = Running application

---

## 6️⃣ Docker Volume

A Docker Volume is used for persistent storage.

Even if container is deleted:
- Volume remains
- Data persists

---

# 🔧 IMPLEMENTATION STEPS

## Step 1 – Install WSL2

```bash
wsl --install
```

Enable virtualization in BIOS.

---

## Step 2 – Install Docker Desktop

Download from:
https://www.docker.com/products/docker-desktop/

Verify installation:

```bash
docker --version
```

---

## Step 3 – Run Hello World Container

```bash
docker run hello-world
```

This:
- Pulls image
- Creates container
- Runs container
- Displays success message

---

## Step 4 – Check Images

```bash
docker images
```

---

## Step 5 – Check Containers

```bash
docker ps
docker ps -a
```

---

## Step 6 – Run Ubuntu Container

```bash
docker run -it ubuntu bash
```

Interactive Linux environment inside container.

---

## Step 7 – Create Docker Volume

```bash
docker volume create myvolume
docker volume ls
```

---

## Step 8 – Attach Volume to Container

```bash
docker run -it -v myvolume:/data ubuntu bash
```

Create file inside `/data`.

---

## Step 9 – Remove Container

```bash
docker rm <container-id>
```

---

## Step 10 – Recreate Container

Attach same volume again and verify data persists.

---

# 🧠 Important Commands

| Command | Purpose |
|----------|----------|
| docker images | List images |
| docker ps | Running containers |
| docker ps -a | All containers |
| docker rm | Remove container |
| docker rmi | Remove image |
| docker volume create | Create volume |
| docker volume ls | List volumes |

---

# 📌 Key Learnings

- Containers are lightweight.
- Images are read-only.
- Containers are ephemeral.
- Volumes provide persistent storage.
- Docker uses host OS kernel.
- Container lifecycle: Create → Run → Stop → Remove.

---

# 🏁 Conclusion

Docker was successfully installed and configured. Containers were created and executed. Persistent storage was demonstrated using Docker volumes. Docker enables efficient containerization and environment consistency.