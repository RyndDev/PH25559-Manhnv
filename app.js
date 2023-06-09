import express from "express";
import routerUser from "./routes/lab.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", routerUser);
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8000");
});

// install axios.
// install concurrently
// cau hinh lai package.json
// them thu muc controllers/product.js
// them thu muc routes/product.js