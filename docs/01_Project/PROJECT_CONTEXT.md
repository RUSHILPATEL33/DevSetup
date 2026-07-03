# PROJECT_CONTEXT.md

> Master reference document for DevSetup Doctor.

---

## Document Information

| Field | Value |
|--------|-------|
| Project Name | DevSetup Doctor |
| Tagline | Diagnose. Explain. Fix. |
| Version | 1.0.0 |
| Status | Draft |
| Created By | RP, RJ, YSK |
| Maintained By | Development Team |
| Repository | DevSetup Doctor |
| Last Updated | 03 July 2026 |
| Current Sprint | Sprint 0.2 |

## Project Overview

DevSetup Doctor is a developer productivity platform built to help MERN developers diagnose, understand, and resolve backend issues more efficiently.

Instead of manually searching through logs, configuration files, and documentation, developers can use DevSetup Doctor to identify common backend problems, understand why they occur, and receive actionable recommendations to resolve them.

The platform focuses on improving the debugging experience by combining automated diagnostics, human-readable explanations, and a clean, modern web interface.

Version 1 is focused exclusively on MERN applications to ensure a high-quality, well-tested foundation. Support for additional backend frameworks may be introduced in future releases.

---

# 4. Problem Statement

Modern backend applications depend on multiple services, configurations, and environments. A small mistake in configuration can prevent an entire application from running.

Developers frequently encounter problems such as:

- Database connection failures
- Missing or incorrect environment variables
- Port conflicts
- Invalid configuration files
- Server startup failures
- Authentication and authorization issues
- Dependency mismatches
- Docker configuration problems

Finding the root cause often requires searching through logs, documentation, forums, or community discussions. This process is repetitive, time-consuming, and frustrating, especially for students and junior developers.

DevSetup Doctor addresses these challenges by automatically diagnosing common backend problems and presenting developers with understandable explanations and recommended solutions.

---

# 5. Project Goals

## Primary Goals

- Build a reliable backend diagnostic platform for MERN applications.
- Detect common configuration and startup issues.
- Present human-readable error explanations.
- Suggest practical solutions for identified problems.
- Reduce debugging time for developers.
- Provide a clean and intuitive user interface.

## Secondary Goals

- Learn professional software engineering practices.
- Practice collaborative team development.
- Follow production-level Git workflows.
- Implement CI/CD and containerization.
- Maintain high-quality project documentation.
- Build a portfolio-worthy software product.

## Success Criteria

The project will be considered successful if it:

- Diagnoses common backend configuration issues accurately.
- Provides actionable recommendations.
- Maintains a clean and scalable architecture.
- Can be deployed using Docker.
- Demonstrates production-ready development practices.

---

# Project Motto

> Diagnose. Explain. Fix.

Every feature developed in DevSetup Doctor should follow this philosophy:

1. Diagnose the problem.
2. Explain the root cause in simple language.
3. Suggest practical steps to resolve it.

If a feature does not contribute to this workflow, it should be reconsidered.

---

## 6. Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### DevOps & Infrastructure

- Docker
- Docker Compose
- GitHub Actions
- Nginx (Production)
- Render / Railway (Initial Deployment)
- AWS (Future)

### Development Tools

- Git
- GitHub
- VS Code
- Postman
- MongoDB Compass

### Documentation

- Markdown
- GitHub Wiki (Future)
- Draw.io / Excalidraw (Architecture Diagrams)

---

## 7. Team Structure

The project is being developed by a team of three members.

### RP — Backend Lead & Project Lead

Responsibilities:

- Backend Development
- API Design
- Database Design
- System Architecture
- Code Review
- Project Management
- Integration

---

### RJ — Frontend Lead

Responsibilities:

- React Development
- UI/UX Implementation
- API Integration
- Responsive Design
- Component Development

---

### YSK — DevOps Lead

Responsibilities:

- Docker
- CI/CD
- Deployment
- Environment Configuration
- GitHub Actions
- Production Infrastructure

---

### Decision Making

Major technical decisions will be discussed by the entire team.

The objective is to build a maintainable, scalable and production-ready software product.

---

## 8. Development Workflow

The project follows an iterative sprint-based development process.

Each sprint consists of the following stages:

1. Planning
2. Documentation
3. Architecture Review
4. Development
5. Testing
6. Code Review
7. Deployment
8. Retrospective

---

### Branch Strategy

main

- Production Ready Code

develop

- Integration Branch

feature/<feature-name>

- Individual Feature Development

bugfix/<issue-name>

- Bug Fixes

hotfix/<issue-name>

- Emergency Production Fixes

---

### Pull Request Workflow

Every feature should follow this workflow:

Feature Branch

↓

Development

↓

Pull Request

↓

Code Review

↓

Testing

↓

Merge into develop

↓

Release to main

Direct commits to the **main** branch are not allowed.

---

### Commit Message Convention

Examples:

```
feat: add health check endpoint

fix: resolve mongodb connection issue

docs: update project context

refactor: improve diagnosis service

test: add authentication tests
```

Following consistent commit messages makes project history easier to understand.

---

## 8. Development Workflow

The project follows an iterative sprint-based development process.

Each sprint consists of the following stages:

1. Planning
2. Documentation
3. Architecture Review
4. Development
5. Testing
6. Code Review
7. Deployment
8. Retrospective

---

### Branch Strategy

main

- Production Ready Code

develop

- Integration Branch

feature/<feature-name>

- Individual Feature Development

bugfix/<issue-name>

- Bug Fixes

hotfix/<issue-name>

- Emergency Production Fixes

---

### Pull Request Workflow

Every feature should follow this workflow:

Feature Branch

↓

Development

↓

Pull Request

↓

Code Review

↓

Testing

↓

Merge into develop

↓

Release to main

Direct commits to the **main** branch are not allowed.

---

### Commit Message Convention

Examples:

```
feat: add health check endpoint

fix: resolve mongodb connection issue

docs: update project context

refactor: improve diagnosis service

test: add authentication tests
```

Following consistent commit messages makes project history easier to understand.

---

## 10. Current Sprint

Current Sprint: Sprint 0.2

### Objective

Establish the project's technical foundation before writing production code.

### Deliverables

- PROJECT_CONTEXT.md
- Architecture.md
- Database.md
- API.md
- FolderStructure.md

### Sprint Success Criteria

- Documentation completed
- Architecture approved
- Team alignment achieved
- Development roadmap finalized

---

## 11. Project Roadmap

### Phase 1 — Planning

- Documentation
- Architecture
- Database Design
- API Design

---

### Phase 2 — Foundation

- Backend Setup
- Frontend Setup
- Authentication
- Docker Environment

---

### Phase 3 — Core Features

- Health Monitoring
- Configuration Scanner
- Error Diagnosis Engine
- Knowledge Base

---

### Phase 4 — Advanced Features

- AI Recommendations
- Scan History
- Dashboard Analytics
- Notifications

---

### Phase 5 — Production

- CI/CD
- Cloud Deployment
- Monitoring
- Security Improvements

---

### Phase 6 — Future Enhancements

- Spring Boot Support
- Django Support
- FastAPI Support
- VS Code Extension
- CLI Tool
- Team Workspace

---

## 12. Success Metrics

The project will be considered successful if it achieves the following goals:

### Technical Success

- Scalable architecture
- Clean and maintainable code
- Production-ready deployment
- Comprehensive documentation

### Team Success

- Effective collaboration
- Consistent Git workflow
- High-quality code reviews
- Knowledge sharing

### Product Success

- Accurately diagnose common backend issues
- Provide meaningful fix suggestions
- Deliver an intuitive user experience
- Reduce debugging time for developers

---

## 13. Glossary

| Term | Meaning |
|------|---------|
| MERN | MongoDB, Express.js, React.js, Node.js |
| API | Application Programming Interface |
| CI/CD | Continuous Integration / Continuous Deployment |
| JWT | JSON Web Token |
| MVP | Minimum Viable Product |
| PR | Pull Request |
| Sprint | Fixed development iteration |
| Docker | Containerization platform |
| Diagnosis Engine | Core module responsible for detecting backend issues |
| Knowledge Base | Collection of known errors and recommended solutions |