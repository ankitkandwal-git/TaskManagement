# Task Management Application

A professional MERN stack Task Management Application featuring secure user authentication, protected routes, and a responsive dashboard built with React, Tailwind CSS, and MongoDB Atlas.

## 🌐 Live Demo

- Vercel: https://task-management-ecru-seven-51.vercel.app/

## 🔥 Project Description

This application allows users to register and log in, then create, view, update, and delete personal tasks. Task status can be toggled between **Completed** and **Pending**, and the UI is optimized for desktop and mobile devices.

## ⭐ Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create Task
- View Tasks
- Update Task
- Delete Task
- Mark Task as Completed / Pending
- Responsive Dashboard UI

## 🧰 Tech Stack

- React.js (Vite)
- Node.js
- Express.js
- MongoDB Atlas
- JSON Web Tokens (JWT)
- Tailwind CSS

## 📁 Folder Structure

```text
TaskManagament/
├── backend/              # Express backend service
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   ├── .env              # environment variables (not committed)
│   ├── src/
│   │   ├── config/       # database connection
│   │   ├── controllers/  # request handlers
│   │   ├── middleware/   # auth middleware
│   │   ├── models/       # Mongoose schemas
│   │   └── routes/       # API routes
│   └── .gitignore
├── frontend/             # Vite + React frontend app
│   ├── Dockerfile
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── .gitignore
├── docker-compose.yml
└── README.md
```

## ⚙️ Installation Guide

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd FullStack/TaskManagament
```

### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

## 🔐 Environment Variables

### Backend

Create a `.env` file inside `backend/` with the following values:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

### MongoDB Atlas setup instructions

1. Log in to MongoDB Atlas and create a new cluster.
2. Create a database user with read/write access.
3. Add your IP address to the Network Access whitelist.
4. Click **Connect**, choose **Connect your application**, and copy the connection string.
5. Replace `<password>` with your database user password and set the database name.

Example:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskmanagement?retryWrites=true&w=majority
```

### JWT setup instructions

1. Generate a random secret string for JWT signing.
2. Store that value in `backend/.env`.
3. Keep this secret private and do not commit it to Git.

Example generation command:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Frontend

Create a `.env` file inside `frontend/` with:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## ▶️ Running the Application

### Running Backend

```bash
cd backend
npm run dev
```

The backend server should be available at `http://localhost:5000`.

### Running Frontend

```bash
cd frontend
npm run dev
```

The frontend application should be available at `http://localhost:5173`.

## 🧪 API Endpoints

### Authentication Endpoints

| Method | Endpoint           | Description                        | Auth Required |
| ------ | ------------------ | ---------------------------------- | ------------- |
| POST   | `/api/auth/register` | Register a new user               | No            |
| POST   | `/api/auth/login`    | Authenticate user and return JWT  | No            |
| GET    | `/api/auth/me`       | Get current authenticated user    | Yes           |

### Task Endpoints

| Method | Endpoint             | Description                            | Auth Required |
| ------ | -------------------- | -------------------------------------- | ------------- |
| GET    | `/api/tasks`          | Get all tasks for the logged-in user   | Yes           |
| POST   | `/api/tasks`          | Create a new task                      | Yes           |
| PUT    | `/api/tasks/:id`      | Update a task                          | Yes           |
| DELETE | `/api/tasks/:id`      | Delete a task                          | Yes           |

> Protected endpoints require the request header: `Authorization: Bearer <token>`.

## 📸 Screenshots

> Add screenshots of the app here once available.

- **Login / Register**: Clean authentication screens.
- **Dashboard**: Task list with create, edit, delete, and status toggle.
- **Responsive View**: Mobile-ready task dashboard.

## 🚀 Future Improvements

- Add user profile and settings
- Add task categories and priorities
- Implement due dates and reminders
- Add search and filtering for tasks
- Enable dark mode
- Add email password reset support

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://www.linkedin.com/in/yourprofile)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

## 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project under the MIT terms.
