import express from "express";
import { getLatestNews } from "../controllers/news.controller.js";

const router = express.Router();

router.get("/latest", getLatestNews);

export default router;
