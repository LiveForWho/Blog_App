import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoute.js";
import blogRouter from "./routes/blogRoute.js";

const app = express();

await connectDB();

//Middlewares
app.use(cors());
app.use(express.json());

//Route
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

export default app;
