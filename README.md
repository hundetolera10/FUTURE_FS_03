# 🏋️ Bright Gym – Full Stack Fitness Website

A modern full-stack gym website built with **React.js**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MySQL**.

Bright Gym is designed as a professional fitness business website where users can:

* View gym services
* Browse membership plans
* Contact the gym
* Join membership plans online
* Store user submissions in MySQL database

---

# 🚀 Live Features

## 🌐 Frontend

✅ Modern responsive UI
✅ Premium landing page design
✅ Animated navigation
✅ Services section
✅ Membership plans page
✅ Weekly schedule
✅ Contact page
✅ Join membership form
✅ Footer with quick links
✅ Mobile responsive layout

---

## ⚙️ Backend

✅ REST API using Express.js
✅ MySQL database connection
✅ Save contact messages
✅ Save join membership requests
✅ JSON API support
✅ CORS enabled

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Framer Motion
* React Icons

## Backend

* Node.js
* Express.js
* MySQL
* dotenv
* nodemon

---

# 📁 Project Structure

```bash
bright-gym/
│── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
│── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# ⚡ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/bright-gym.git
cd bright-gym
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on:

```bash
http://localhost:3000
```

---

## 3️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Runs on:

```bash
http://localhost:5000
```

---

# 🔐 Environment Variables

Create `backend/.env`

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=brightgym
PORT=5000
```

---

# 🗄️ Database Tables

## Members Table

```sql
CREATE TABLE members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  phone VARCHAR(30),
  plan VARCHAR(100)
);
```

## Messages Table

```sql
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(30),
  message TEXT
);
```
---

# 🎯 Future Improvements

* Admin dashboard
* Online payment integration
* Email notifications
* Authentication system
* Analytics dashboard

---

# 👨‍💻 Author

**Hunde Tolera**

Built with passion for learning full-stack web development.

---

# ⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork it
📩 Connect with me

---


