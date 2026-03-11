# Full Stack Practice

This project is a simple **Node.js + Express + MySQL** backend application created for practicing full-stack development concepts.

The application connects an **Express API server** with a **MySQL database** and demonstrates how to build backend services.

---

## 🚀 Features

- Express.js server
- MySQL database connection
- REST API endpoint
- JSON request handling
- Basic backend project structure

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MySQL
- mysql2 package
- GitHub Codespaces / VS Code

---

## 📂 Project Structure

```
full-stack-practice
│
├── app.js
├── package.json
├── database
│   └── database.sql
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/mgurujagannathareddy/full-stack-practice.git
```

Navigate to the project folder

```bash
cd full-stack-practice
```

Install dependencies

```bash
npm install
```

---

## 🗄 Database Setup

Open MySQL and run the following commands:

```sql
CREATE DATABASE IF NOT EXISTS projectdb;

USE projectdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
```

---

## ▶️ Running the Server

Start the server using:

```bash
npm start
```

The server will run on:

```
http://localhost:3000
```

---

## 🔗 API Endpoint

Test the API:

```
GET /
```

Response:

```
API connected to MySql database successfully.
```

---

## 📌 Future Improvements

- Add CRUD APIs (Create, Read, Update, Delete)
- Add frontend using React
- Implement authentication
- Add environment variables

---

## 👨‍💻 Author

**Guru Jagannatha Reddy Mallela**

GitHub:  
https://github.com/mgurujagannathareddy