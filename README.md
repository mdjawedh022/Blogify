📝 Blogify – Full Stack Blog Application

Blogify is a full-stack blog application built with React (Material UI) on the frontend and Java on the backend.
It includes authentication, client-facing blog features, and an admin panel for managing content.

🚀 Features
👤 Client (User)

User authentication (Login / Register)

View blog posts

Read full blog content

Responsive UI using Material UI

🛠 Admin

Admin authentication

Create, edit, delete blog posts

Manage blog content

Separate admin UI

🔐 Authentication

Secure login & signup

Role-based access (Client / Admin)

🧱 Tech Stack
Frontend

React.js

Material UI (MUI)

React Router

Axios

Environment variables (.env)

Backend

Java

REST APIs

Authentication & Authorization

Database (SQL)

📁 Frontend Folder Structure

src/
│
├── pages/          # All pages (Home, Login, Blog, Admin pages)
├── components/     # Reusable UI components
├── admin/          # Admin-specific pages & components
├── assets/         # Images, icons, static files
├── utils/          # Helper functions, API handlers
├── letter/         # Constants / static text (if used)
├── env/            # Environment config
│
├── App.js
└── index.js




📁 Backend Folder Structure (Java)
backend/
│
├── controller/     # REST controllers
├── service/        # Business logic
├── repository/     # Database access
├── model/          # Entity classes
├── config/         # Security & app configuration
└── application.properties


⚙️ Environment Variables

Create a .env file in the frontend root:

REACT_APP_API_BASE_URL=http://localhost:8080/api


▶️ Run the Remember Project
Frontend
npm install
npm start


Backend

Open project in IDE (IntelliJ / Eclipse)

Run the main Java application

Backend runs on: http://localhost:8080


🔑 Authentication Flow

Admin registers or logs in

Backend validates credentials

Token/session is generated

Protected routes are accessible based on role


🎨 UI Design

Material UI components

Fully responsive layout

Clean and modern admin dashboard

User-friendly blog reading experience

🌐 Project Name

Blogify – Write. Read. Inspire.

📌 Future Enhancements

Comment system

Blog categories & tags

Rich text editor

Image upload

SEO optimization

👨‍💻 Author

Md Jawed Hussain
Full Stack Web Developer
MERN & Java Enthusiast
