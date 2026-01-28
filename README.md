📝 **Blogify – Full Stack Blog Application**

Blogify is a full-stack blog application built with React (Material UI) on the frontend and Java on the backend.
It includes authentication, client-facing blog features, and an admin panel for managing content.

🚀 **Features**
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
**Frontend Folder Structure**
📁 
src/ <br/>
├── admin/<br/>
│   ├── AdminLayout.jsx<br/>
│   ├── AdminLogin.jsx<br/>
│   ├── Dashboard.jsx<br/>
│   ├── EditUserModal.jsx<br/>
│   ├── InviteUserModal.jsx<br/>
│   ├── PostModal.jsx<br/>
│   ├── Posts.jsx<br/>
│   ├── Settings.jsx<br/>
│   └── Users.jsx<br/>
│
├── components/<br/>
│   ├── Categories.jsx<br/>
│   ├── FeaturedBlogs.jsx<br/>
│   ├── Footer.jsx<br/>
│   ├── Hero.jsx<br/>
│   ├── Navbar.jsx<br/>
│   ├── Newsletter.jsx<br/>
│   ├── StatsSection.jsx<br/>
│   └── Testimonials.jsx<br/>
│
├── pages/<br/>
│   ├── About.jsx<br/>
│   ├── Blog.jsx<br/>
│   ├── BlogDetail.jsx<br/>
│   ├── BlogList.jsx<br/>
│   ├── Contact.jsx<br/>
│   ├── Home.jsx<br/>
│   └── NotFound.jsx<br/>
│
├── assets/<br/>
├── utils/<br/>
├── letter/<br/>
├── env/<br/>
│
├── App.js<br/>
└── index.js<br/>

<br/>
📁 **Backend Folder Structure (Java)**
backend/<br/>
├── controller/<br/>    
├── service/<br/>       
├── repository/<br/>    
├── model/<br/>         
├── config/<br/>        
└── application.properties<br/>

 # REST controllers<br/>
  # Business logic<br/>
   # Database access<br/>
    # Entity classes<br/>
     # Security & app configuration<br/>

    
⚙️ **Environment Variables**

Create a .env file in the frontend root:

REACT_APP_API_BASE_URL=http://localhost:8080/api


▶️ **Run the Remember Project**
Frontend
npm install
npm start


Backend

Open project in IDE (IntelliJ / Eclipse)

Run the main Java application

Backend runs on: http://localhost:8080


🔑 ***Authentication Flow**

Admin registers or logs in

Backend validates credentials

Token/session is generated

Protected routes are accessible based on role


🎨 **UI Design**

Material UI components

Fully responsive layout

Clean and modern admin dashboard

User-friendly blog reading experience

🌐 Project Name

**Blogify – Write. Read. Inspire.**


📌 Future Enhancements

Comment system

Blog categories & tags

Rich text editor

Image upload

SEO optimization

👨‍💻 Author
<br/>
**Md Jawed Hussain**<br/>
Full Stack Web Developer<br/>
MERN & Java Enthusiast<br/>
