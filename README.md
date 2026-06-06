# TaskManagement

A full-stack MERN-style Task Management application with React, Vite, Node.js, Express, MongoDB, and JWT authentication.

## Features

- User authentication with JWT
- Create, read, update, delete tasks
- Toggle task status between pending and completed
- Frontend form editing and task actions
- Docker-ready backend and frontend services
- MongoDB database support

## Project Structure

```
TaskManagament/
├── Backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   ├── .env
│   ├── src/
│   │   ├── config/db.js
│   │   ├── middleware/authMiddleware.js
   │   │   └── index.js
│   │   ├── models/Task.js
│   │   ├── models/user.js
│   │   └── routes/taskRoute.js
│   │   └── routes/auth.js
│   └── .gitignore
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── pages/Dashboard.jsx
│   │   ├── pages/Login.jsx
│   │   ├── pages/Register.jsx
│   │   ├── services/taskService.js
│   │   └── utils/api.js
│   └── .gitignore
├── docker-compose.yml
└── README.md
```

## Environment Variables

### Backend
Create `Backend/.env` with:

```env
PORT=5000
MONGO_URI=mongodb://admin:admin123@mongodb:27017/taskdb?authSource=admin
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
```

### Frontend
Create `frontend/.env` with:

```env
VITE_API_URL=http://localhost:5001
```

> If you run with Docker Compose, the backend is exposed on host port `5001`.

## Local Development

### Backend

```bash
cd TaskManagament/Backend
npm install
npm run dev
```

### Frontend

```bash
cd TaskManagament/frontend
npm install
npm run dev
```

### Open the app

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5001`

## Docker Setup

### Build and run with Docker Compose

```bash
cd TaskManagament
docker compose up -d --build
```

### Stop services

```bash
docker compose down
```

### Access services

- Frontend: `http://localhost`
- Backend: `http://localhost:5001`
- MongoDB: `mongodb://localhost:27017`

## Notes

- The backend uses `authMiddleware` to validate JWT tokens on protected routes.
- Task routes are scoped to the authenticated user.
- The frontend `TaskForm` supports both create and edit modes.
- The project ships with Dockerfiles for both frontend and backend.

## Helpful Commands

```bash
# Build backend only
docker build -f Backend/Dockerfile -t taskmanagement-backend ./Backend

# Build frontend only
docker build -f frontend/Dockerfile -t taskmanagement-frontend ./frontend

# Run the full stack
docker compose up -d --build
```

## Git Ignore

Sensitive files such as `.env` are excluded via `.gitignore` in the project root, backend, and frontend directories.

## License

This project is provided as-is for demonstration and development use.
