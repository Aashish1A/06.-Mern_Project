# 🛒 MERN Stack Product Management App

A full-featured MERN stack project that allows users to **add**, **edit**, and **delete** products using a clean UI and RESTful APIs. Built from scratch and fully deployed.

---

## 🚀 Features

- 🔄 **Add / Edit / Delete** products
- 🌗 **Dark & Light mode** toggle
- 🔧 **Global state management** using Zustand
- 💬 Toast notifications with **React Toastify**
- 🎨 Clean, responsive UI with **Tailwind CSS**
- 🔗 Unified backend & frontend on a single port (`5000`)

---

## 🛠️ Tech Stack

### Frontend:
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Icons](https://react-icons.github.io/react-icons/)

### Backend:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

## 📂 Folder Structure
project-folder/ │ ├── Backend/ │ ├── config/ │ │ └── db.js # MongoDB connection setup │ ├── controllers/ │ │ └── <entity>.controller.js 
# Logic for routes │ ├── models/ │ │ └── <entity>.model.js # Mongoose schema │ ├── routes/ │ │ └── <entity>.route.js # API routes │ ├── server.js # Main server file │ └── .env 
# Environment variables │ ├── Frontend/ │ ├── public/ │ │ └── index.html 
# HTML entry point │ ├── src/ │ │ ├── components/ 
# React components │ │ ├── App.jsx # Main React component │ │ └── main.jsx 
# React entry point │ └── vite.config.js # Vite configuration │ ├── package.json 
# Project dependencies and scripts ├── .gitignore # Files to ignore in Git └── README.md

