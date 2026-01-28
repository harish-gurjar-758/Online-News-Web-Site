import axios from "axios";

const BASE_URL = "https://news.knowivate.com/api/";

/**
 * Reusable fetcher
 */
const fetchNews = async (url, res) => {
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Knowivate Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch news",
    });
  }
};

// Latest
export const getLatestNews = async (req, res) => {
  fetchNews(`${BASE_URL}/latest/`, res);
};

// Sports
export const getSportsNews = async (req, res) => {
  fetchNews(`${BASE_URL}?category=sports`, res);
};

// Premium
export const getPremiumNews = async (req, res) => {
  fetchNews(`${BASE_URL}?type=premium`, res);
};

// Business
export const getBusinessNews = async (req, res) => {
  fetchNews(`${BASE_URL}?category=business`, res);
};

// Culture
export const getCultureNews = async (req, res) => {
  fetchNews(`${BASE_URL}?category=culture`, res);
};

// Real Estate
export const getRealEstateNews = async (req, res) => {
  fetchNews(`${BASE_URL}?category=realestate`, res);
};

// Travel
export const getTravelNews = async (req, res) => {
  fetchNews(`${BASE_URL}?category=travel`, res);
};

// Weather
export const getWeatherNews = async (req, res) => {
  fetchNews(`${BASE_URL}?category=weather`, res);
};

// Trending
export const getTrendingNews = async (req, res) => {
  fetchNews(`${BASE_URL}?type=trending`, res);
};

// Search
export const searchNews = async (req, res) => {
  const { q } = req.query;
  fetchNews(`${BASE_URL}?search=${q}`, res);
};
