
# 🐳 Docker Setup Comparison Project

This project demonstrates **three different ways** to set up and run a Node.js (TypeScript + Prisma) application:

1. ✅ The **primitive/manual setup** (installing everything on the host machine).
2. 📦 Using a **Dockerfile** to build and run the app inside a container.
3. ⚙️ Using **Docker Compose** to orchestrate services with a single command.

> All setup instructions and usage steps are documented in [`CONTRIBUTE.md`](./CONTRIBUTE.md)

---

## 📁 Project Structure

```

prajwal-1703-docker\_compose\_proj/
├── CONTRIBUTE.MD             # Setup instructions for all 3 methods
├── docker-compose.yml        # Compose file for container orchestration
├── dockerfile                # Dockerfile for building single container image
├── package.json              # Node.js project config (scripts, deps)
├── tsconfig.json             # TypeScript configuration
├── tsconfig.tsbuildinfo      # TypeScript incremental build cache
├── prisma/
│   ├── schema.prisma         # Prisma schema (ORM for DB)
│   └── migrations/
│       ├── migration\_lock.toml
│       └── 20250805183852\_init/
│           └── migration.sql
└── src/
└── index.ts              # Main entry point

````

---

## 📘 Concepts Covered

### 1. **Primitive/Manual Setup**
This involves:
- Installing Node.js, dependencies, and Prisma manually.
- Setting up environment variables and running the app via terminal.
- Running PostgreSQL (or other DBs) directly on your system.

> ✅ Good for beginners  
> ⚠️ Not scalable or portable

---

### 2. **Dockerfile**
A `Dockerfile` is a script that contains **instructions to build a Docker image**.

It defines:
- Base image (`node:alpine`, etc.)
- Commands to install dependencies
- Copying source code into the image
- Setting up the working directory
- Running build/start commands

```dockerfile
FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
````

> 📦 Builds an image that can run anywhere with Docker installed.

---

### 3. **Docker Image**

A Docker image is a **lightweight, standalone, and executable package** of your application with everything it needs to run:

* Code
* Runtime
* Libraries
* Dependencies

You build an image using:

```bash
docker build -t your-image-name .
```

Then run it with:

```bash
docker run -p 3000:3000 your-image-name
```

> 📦 Portable, isolated, and reproducible.

---

### 4. **Docker Compose**

`docker-compose.yml` allows you to **define and run multi-container Docker applications**.

For example:

* One container for your Node.js app
* One for PostgreSQL database
* Both connected via an internal Docker network

Sample Compose snippet:

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```

Run everything with:

```bash
docker compose up --build
```

> ⚙️ Simplifies orchestration and environment setup.

---

### 5. **Prisma**

Prisma is a **modern ORM (Object Relational Mapper)** for Node.js and TypeScript.

* It helps interact with the database in a type-safe manner.
* Uses `schema.prisma` to define models.
* Migration files generate SQL for DB schema updates.

---

### 6. **TypeScript**

TypeScript is a superset of JavaScript that adds:

* Static typing
* Modern ES features
* Better developer tooling

> Used in this project for better maintainability and safety.

---

## 🎯 Purpose of the Project

This project **visually and practically demonstrates** the differences between:

* Local/manual project setup
* Docker containerized workflow
* Docker Compose orchestration

It's especially useful for:

* Beginners learning DevOps/Docker
* Comparing portability and scalability
* Understanding CI/CD pipeline basics

---

## 🔗 Contribution Steps

Setup, build, and run steps for all three approaches are documented in [`CONTRIBUTE.md`](./CONTRIBUTE.md).

---

## 📌 Prerequisites

Before trying the Docker-based methods, ensure you have:

* Docker Desktop or Docker CLI installed
* (Optional) Docker Compose v2+ installed
* Basic familiarity with terminal and Node.js

---

## 📞 Contact

If you're exploring **DevOps** or **Docker** and have suggestions, questions, or want to connect — feel free to reach out:

- 🔗 [Twitter / X](https://x.com/deva_1703)
- 🔗 [LinkedIn](https://www.linkedin.com/in/prajwal-athare-a4074628a/)

---


