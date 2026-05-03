# Assignment 2(a) – Version Control using Git and GitHub

---

## 📌 Problem Statement

Create a version control account on GitHub and push the code of previous assignments to the repository using Git commands.

---

## 🎯 Objective

- To understand Version Control System (VCS).
- To learn Git commands.
- To create and manage repositories on GitHub.
- To push local code to remote repository.
- To track changes efficiently.

---

# 📚 THEORY

## 1️⃣ What is Version Control?

Version Control is a system that records changes made to files over time so that specific versions can be recalled later.

It helps in:
- Tracking modifications
- Team collaboration
- Restoring previous versions
- Maintaining project history

---

## 2️⃣ What is Git?

Git is a Distributed Version Control System (DVCS).

Features:
- Works locally
- Fast and lightweight
- Tracks file changes
- Maintains commit history
- Supports branching

---

## 3️⃣ What is GitHub?

GitHub is a cloud-based hosting platform for Git repositories.

Difference between Git and GitHub:

| Git | GitHub |
|------|--------|
| Version control tool | Hosting platform |
| Works locally | Works remotely |
| Tracks code changes | Stores repositories online |

---

# 🔧 IMPLEMENTATION STEPS

## Step 1 – Install Git

Download from:
https://git-scm.com/

Verify installation:

```bash
git --version
```

---

## Step 2 – Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## Step 3 – Initialize Repository

```bash
git init
```

Creates a local repository.

---

## Step 4 – Add Files to Staging Area

```bash
git add .
```

---

## Step 5 – Commit Changes

```bash
git commit -m "Added Assignments"
```

Commit creates a snapshot of project.

---

## Step 6 – Create GitHub Repository

- Login to GitHub
- Click "New Repository"
- Enter repository name
- Do NOT initialize with README

---

## Step 7 – Connect Local Repo to Remote

```bash
git remote add origin https://github.com/username/repository-name.git
git branch -M main
git push -u origin main
```

---

# 🧠 Important Git Commands

| Command | Purpose |
|----------|----------|
| git status | Shows file status |
| git diff | Shows code differences |
| git log | Shows commit history |
| git branch | Lists branches |
| git pull | Fetch & merge changes |
| git push | Push changes to remote |

---

# 📌 Key Concepts

- Repository → Folder tracked by Git
- Commit → Snapshot of changes
- Branch → Parallel version of code
- Remote → Online repository
- Clone → Copy remote repository locally

---

# 📈 Advantages of Git

- Efficient tracking
- Easy collaboration
- Lightweight
- Supports branching & merging
- Maintains complete history

---

# 🏁 Conclusion

Thus, Git and GitHub were successfully used to create and manage a version-controlled repository. Code was committed and pushed to a remote repository, demonstrating understanding of distributed version control systems.