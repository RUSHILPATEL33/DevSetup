# 🛠️ DevSetup 

> **Diagnose. Explain. Fix.**

DevSetup is a developer productivity platform that helps backend developers diagnose, understand, and resolve common application issues. It analyzes backend configurations, validates environments, checks application health, and provides actionable solutions to reduce debugging time.

The project is being built using a modern **MERN** stack with a production-inspired backend architecture focused on scalability, maintainability, and clean code practices.

---

# 📖 Overview

Debugging backend applications can be frustrating and time-consuming. A single misconfigured environment variable, incorrect database connection, or port conflict can take hours to identify.

**DevSetup Doctor** simplifies this process by analyzing backend configurations, identifying common issues, and providing human-readable explanations with recommended fixes.

Instead of spending hours searching through Stack Overflow and documentation, developers receive clear diagnostics and actionable solutions.

---

# ✨ Features

## ✅ Implemented

### 🔐 Authentication

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Token Generation
- Request Validation
- Duplicate Email Prevention
- Repository Pattern
- Custom Error Handling

### ⚙️ Backend Infrastructure

- Express.js REST API
- MongoDB Integration
- Mongoose ODM
- Modular Folder Structure
- Environment Configuration
- Winston Logger
- Health Check API

---

## 🚧 In Progress

### 🔒 Authentication

- JWT Authentication Middleware
- Protected Routes
- Current User API (`/me`)
- Role-Based Authorization

### 🔍 Diagnosis Engine

- Configuration Analysis
- Environment Variable Validation
- Database Connectivity Check
- Server Health Check
- Port Availability Check
- Error Knowledge Base

---

## 🚀 Future Enhancements

- AI-powered Diagnosis
- Security Scanner
- Project ZIP Upload & Analysis
- Dependency Analysis
- Multi-framework Support
- PDF Report Generation
- Docker Integration
- CI/CD Pipeline
- Email Notifications

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- express-validator
- Winston

---

## DevOps

- Git
- GitHub
- Docker *(Planned)*
- GitHub Actions *(Planned)*

---

# 🏗️ Backend Architecture

```text
                Client
                   │
                   ▼
               API Routes
                   │
                   ▼
            Request Validation
                   │
                   ▼
              Controllers
                   │
                   ▼
               Services
                   │
                   ▼
             Repositories
                   │
                   ▼
               MongoDB
```

---

# 📁 Project Structure

```text
devsetup-doctor/
│
├── frontend/
│
├── backend/
│   └── src/
│       ├── config/
│       ├── database/
│       ├── errors/
│       ├── logger/
│       ├── middlewares/
│       ├── modules/
│       │   ├── auth/
│       │   └── health/
│       ├── routes/
│       ├── utils/
│       ├── app.js
│       └── server.js
│
├── docs/
├── infrastructure/
└── README.md
```

---

# 📡 Current API Endpoints

| Method | Endpoint | Description | Status |
|---------|----------|-------------|--------|
| GET | `/api/v1/health` | Health Check | ✅ |
| POST | `/api/v1/auth/register` | Register User | ✅ |
| POST | `/api/v1/auth/login` | Login User | ✅ |
| GET | `/api/v1/auth/me` | Current User | 🚧 |

---

# 🎯 Current Status

## 🚀 Active Development

### Completed

- ✅ Sprint 0 – Planning & Architecture
- ✅ Sprint 1 – Project Setup
- ✅ Sprint 2 – Authentication

### Current Focus

Building the **Diagnosis Engine**, which will analyze backend configurations and provide automated troubleshooting recommendations.

---

# 🗺️ Roadmap

| Sprint | Status |
|---------|--------|
| ✅ Sprint 0 – Planning & Architecture | Completed |
| ✅ Sprint 1 – Project Setup | Completed |
| ✅ Sprint 2 – Authentication | Completed |
| ⏳ Sprint 3 – Diagnosis Engine | In Progress |
| ⏳ Sprint 4 – Dashboard | Pending |
| ⏳ Sprint 5 – Reports & History | Pending |
| ⏳ Sprint 6 – Deployment & Production Readiness | Pending |

---

# 📈 Project Progress

```text
Planning & Architecture          ██████████ 100%
Project Setup                    ██████████ 100%
Authentication                   ██████████ 100%
Diagnosis Engine                 ███░░░░░░░  30%
Dashboard                        ░░░░░░░░░░   0%
Reports & History                ░░░░░░░░░░   0%
Deployment                       ░░░░░░░░░░   0%
```

Overall Progress

**≈ 35% Complete**

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/your-username/devsetup-doctor.git
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file.

```env
PORT=5000

NODE_ENV=development

MONGO_URI=mongodb://127.0.0.1:27017/devsetupdoctor

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d
```

Run the backend server.

```bash
npm run dev
```

---

# 🤝 Contributing

We follow a Git workflow based on feature branches and Pull Requests.

```text
feature/*
      │
      ▼
develop
      │
      ▼
main
```

Every new feature is developed in a dedicated branch, reviewed, and merged into `develop` before being promoted to `main`.

---

# 👨‍💻 Team

- **RP** – Backend Development
- **YSK** – DevOps & Infrastructure
- **RJ** – Frontend Development

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps support the project and motivates future development.
