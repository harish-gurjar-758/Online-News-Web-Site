import express from "express";
import { getLatestNews, getTechnologiesNews } from "../controllers/news.controller.js";

const router = express.Router();

router.get("/latest", getLatestNews);
router.get("/technologies", getTechnologiesNews);

export default router;
