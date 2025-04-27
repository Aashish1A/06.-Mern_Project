# MERN Project

This is a full-stack MERN (MongoDB, Express, React, Node.js) project. The project is structured to include a `Frontend` for the client-side application and a `Backend` for the server-side API.

---

## Project Structure

project-folder/ │ ├── Backend/ │ ├── config/ │ │ └── db.js # MongoDB connection setup │ ├── controllers/ │ │ └── <entity>.controller.js # Logic for routes │ ├── models/ │ │ └── <entity>.model.js # Mongoose schema │ ├── routes/ │ │ └── <entity>.route.js # API routes │ ├── server.js # Main server file │ └── .env # Environment variables │ ├── Frontend/ │ ├── public/ │ │ └── index.html # HTML entry point │ ├── src/ │ │ ├── components/ # React components │ │ ├── App.jsx # Main React component │ │ └── main.jsx # React entry point │ └── vite.config.js # Vite configuration │ ├── package.json # Project dependencies and scripts ├── .gitignore # Files to ignore in Git └── README.md

---

## Backend Setup

1. **Initialize the Project**
   ```bash
   npm init -y
   npm install express mongoose dotenv
   ```

2. Set Up MongoDB

Go to MongoDB Atlas.
Create a project and a cluster.
Copy the connection string and update the .env file

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
PORT=5000

3. Create Backend Files

config/db.js: MongoDB connection logic.
models/<entity>.model.js: Define Mongoose schema.
controllers/<entity>.controller.js: Add route logic.
routes/<entity>.route.js: Define API routes.
server.js: Main server file.

4. Run the Server
npm run dev


----------Frontend Setup-----------
cd frontend
npm create vite@latest
npm install

npm install @chakra-ui/react @emotion/react react-icons react-router-dom

2. Frontend Files

src/main.jsx: React entry point.
src/App.jsx: Main React component.
src/components/: Add reusable components.

4. Run the Frontend
npm run dev

------- Scripts
Start Backend: npm run dev
Start Frontend: npm run dev (inside Frontend folder)

Notes
Use nodemon for automatic server restarts during development.
Use dotenv to manage environment variables securely.
Use Vite for a fast React development environment.