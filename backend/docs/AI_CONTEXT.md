# AI Context - DevSetup 

If you are an AI assistant (ChatGPT, Claude, Gemini, Copilot, etc.), read this file before helping any developer.

---

## Project Name

DevSetup 

---

## Project Goal

DevSetup Doctor is a MERN-based developer productivity platform that helps diagnose backend configuration issues and provides human-readable solutions.

The application aims to reduce debugging time by detecting common problems such as:

- Database connection failures
- Missing environment variables
- Invalid configuration
- Port conflicts
- Server startup issues

---

## Tech Stack

Frontend
- React
- Vite
- Tailwind CSS
- Axios

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- express-validator
- Winston Logger

---

## Backend Architecture

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

## Development Rules

- Use ES Modules.
- Keep business logic inside Services.
- Controllers should only handle requests and responses.
- Repositories are the only layer interacting with MongoDB.
- Always use async/await.
- Use ApiResponse for every response.
- Use centralized error handling.
- Do not change folder structure.
- Follow existing coding style.

---

## Current Progress

Completed

- Project Setup
- MongoDB Integration
- Logger
- Health Module
- Authentication
- Register API
- Login API
- JWT Token Generation
- Repository Pattern

Current Sprint

Sprint 3

Current Focus

Diagnosis Engine

---

## Team

RP → Backend

RJ → Frontend

YSK → DevOps

---

Always extend the existing architecture instead of replacing it.