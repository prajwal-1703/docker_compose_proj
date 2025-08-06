# 🛠️ Contribute Guide

Welcome to the **docker_compose_proj** repository! This project demonstrates the difference between traditional local setup and Docker-based workflows using Docker CLI and Docker Compose. Follow the instructions below to get started with any of the three supported methods.

---

## 🚀 Getting Started

> **Note:** Make sure you have the following prerequisites installed before proceeding:

- **[Docker](https://docs.docker.com/get-docker/)**  
  Verify: `docker --version`
- **[Git](https://git-scm.com/downloads)**  
  Verify: `git --version`
- **Node.js & npm** (for local setup)  
  Verify: `node -v` and `npm -v`

---

## 🧩 Project Setup Methods

### 🔹 1. Local Setup (Without Docker)

```bash
# Step 1: Clone the repository
git clone https://github.com/prajwal-1703/docker_compose_proj.git

# Step 2: Navigate into the project directory
cd docker_compose_proj

# Step 3: Install project dependencies
npm install

# Step 4: Create a custom Docker network
docker network create user_project

# Step 5: Start the PostgreSQL container
docker container run -e POSTGRES_PASSWORD=mysecretpassword --name postgres -p 5432:5432 -d --network user_project postgres

# Step 6: Update your .env file with correct database URL
# Example:
# DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

# Step 7: Apply Prisma migrations
npx prisma migrate dev

# Step 8: Generate Prisma client
npx prisma generate

# Step 9: Build the TypeScript project
npm run build

# Step 10: Run the app
npm run dev:docker
````

---

### 🐳 2. Using Docker Build & Docker Image

```bash
# Step 1: Clone the repository
git clone https://github.com/prajwal-1703/docker_compose_proj.git

# Step 2: Navigate into the project directory
cd docker_compose_proj

# Step 3: Create a custom Docker network
docker network create user_project

# Step 4: Start PostgreSQL container
docker container run -e POSTGRES_PASSWORD=mysecretpassword -d --name postgres --network user_project -p 5432:5432 postgres

# Step 5: Build the Docker image for the app
docker build --network=host -t user_project .

# Step 6: Run the app container
docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres -p 3000:3000 --network user_project user_project
```

---

### ⚙️ 3. Using Docker Compose

```bash
# Step 1: Clone the repository
git clone https://github.com/prajwal-1703/docker_compose_proj.git

# Step 2: Navigate into the project directory
cd docker_compose_proj

# Step 3: Run the app using Docker Compose
docker-compose up
```

---

## 🙌 Contributions

If you'd like to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Added new feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## 💬 Support


