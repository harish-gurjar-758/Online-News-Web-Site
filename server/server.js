import express from "express";
import cors from "cors";
import newsRoutes from "./src/routes/news.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // Vite frontend
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/news", newsRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
