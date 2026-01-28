import express from "express";
import {
  getLatestNews,
  getSportsNews,
  getPremiumNews,
  getBusinessNews,
  getCultureNews,
  getRealEstateNews,
  getTravelNews,
  getWeatherNews,
  searchNews,
  getTrendingNews
} from "../controllers/news.controller.js";

const router = express.Router();

// Navbar routes
router.get("/latest", getLatestNews);
router.get("/sports", getSportsNews);
router.get("/premium", getPremiumNews);
router.get("/business", getBusinessNews);
router.get("/culture", getCultureNews);
router.get("/real-estate", getRealEstateNews);
router.get("/travel", getTravelNews);
router.get("/weather", getWeatherNews);

// Extra
router.get("/trending", getTrendingNews);
router.get("/search", searchNews);

export default router;
