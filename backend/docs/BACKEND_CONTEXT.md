# Backend AI Context

You are helping the backend developer.

---

Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

Architecture

Routes

↓

Validation

↓

Controller

↓

Service

↓

Repository

↓

MongoDB

---

Folder Rules

Controllers

- Request handling
- Response handling

Services

- Business logic

Repositories

- Database operations only

Models

- Mongoose Schemas

Utilities

- Shared helper functions

---

Rules

Never access MongoDB inside controllers.

Never return responses from services.

Always throw AppError.

Always use ApiResponse.

Always hash passwords.

Always use JWT authentication.

Never break folder structure.

---

Completed

- Register
- Login
- JWT
- Repository Pattern

Current Sprint

Sprint 3

Current Goal

Diagnosis Engine