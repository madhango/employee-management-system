# Employee Management System

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows administrators to manage employees efficiently.
This system supports authentication, employee creation, and employee management through a simple dashboard.

---

## Features

* Admin Login Authentication (JWT)
* Add New Employees
* View Employee List
* Secure Backend API
* MongoDB Database Integration
* Full Stack MERN Architecture

---

## Tech Stack

### Frontend

* React (Vite)
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* JWT Authentication
* bcryptjs

---

## Project Structure

```
## Project Structure

employee-management-system
│
├── employee-management-backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── package.json
│
├── employee-management-frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── package.json
│
├── screenshots
│   ├── Screenshot 2026-03-05 092829.png
│   ├── Screenshot 2026-03-05 092930.png
│   ├── Screenshot 2026-03-05 093516.png
│
├── .gitignore
└── README.md
```

---

## Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/madhango/employee-management-system
```

---

### 2️⃣ Setup Backend

```
cd employee-management-backend
npm install
```

Create `.env` file inside backend:

```
PORT=5000
MONGO_URI=mongodb+srv://madhangowda302_db_user:gJ869tMWmGE5CVzV@cluster1.hjzkmk8.mongodb.net/?appName=Cluster1
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```
cd employee-management-frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

### Authentication

POST `/api/auth/login`

### Employees

GET `/api/employees`

POST `/api/employees`

---

## Screenshots


### Login Page
![Login](screenshots/Screenshot 2026-03-05 092829.png)

### Dashboard
![Dashboard](screenshots/Screenshot 2026-03-05 092830.png)

### Add Employee List
![Employees](screenshots/Screenshot 2026-03-05 093516.png)


---

## Future Improvements

* Employee Update Feature
* Employee Delete Feature
* Search Employees
* Pagination
* Role-based Authentication

---

## Author

**Madhan Gowda M B**
Computer Science and Engineering Student

---

## License

This project is for educational purposes.
