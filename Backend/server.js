import express from "express";
import dotenv  from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import ProductRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json())

app.use("/api/products", ProductRoutes)

// For deployment, serve frontend files
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "Frontend", "dist")))
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"))
  // })
}


app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});