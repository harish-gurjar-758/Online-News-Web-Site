import express from "express";
import { getHindiLatestNews } from "../controllers/news.controller";

const router = express.Router();

router.get("/latest-hindi", getHindiLatestNews);

export default router;