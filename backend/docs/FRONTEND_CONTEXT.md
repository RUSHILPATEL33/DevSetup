# Frontend AI Context

You are helping the frontend developer.

Do not modify backend architecture.

---

Frontend Stack

- React
- Vite
- Tailwind CSS
- Axios
- React Router

---

Authentication APIs

POST /api/v1/auth/register

POST /api/v1/auth/login

GET /api/v1/auth/me (Coming Soon)

---

Backend Response Format

Success

{
    "success": true,
    "message": "...",
    "data": {}
}

Error

{
    "success": false,
    "message": "...",
    "errors": null
}

---

Current UI Tasks

- Landing Page
- Login
- Register
- Dashboard
- Sidebar
- Navbar
- User Profile
- Reports Page

---

Rules

- Never change backend endpoints.
- Never hardcode URLs.
- Store API URL in environment variables.
- Use Axios.
- Use Protected Routes.
- Keep components reusable.
- Build responsive UI.
- If APIs are unavailable, use mock data.