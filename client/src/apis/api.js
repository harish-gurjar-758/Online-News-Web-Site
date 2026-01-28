/**
 * api.js
 * Frontend API layer for Newspaper MERN Stack Project
 * News Provider: Knowivate (Free, No API Key)
 * Author: Ready for scalable production use
 */

import axios from "axios";

/* =====================================================
   AXIOS INSTANCE
===================================================== */

const newsApi = axios.create({
  baseURL: "https://news.knowivate.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =====================================================
   ERROR HANDLER
===================================================== */

const handleApiError = (error) => {
  if (error.response) {
    console.error("API Error:", error.response.data);
    throw error.response.data;
  } else if (error.request) {
    console.error("Server not responding");
    throw { message: "Server not responding" };
  } else {
    console.error("Axios Error:", error.message);
    throw { message: error.message };
  }
};

/* =====================================================
   NAVBAR BASED APIS
===================================================== */

/**
 * Latest News
 * Navbar: Latest News
 */
export const getLatestNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Sports News
 * Navbar: Sports
 */
export const getSportsNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?category=sports");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Premium News
 * Navbar: Premium (Exclusive / Highlighted)
 */
export const getPremiumNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?type=premium");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Business News
 * Navbar: Business
 */
export const getBusinessNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?category=business");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Culture News
 * Navbar: Culture (Arts, Lifestyle, Society)
 */
export const getCultureNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?category=culture");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Real Estate News
 * Navbar: Real Estate
 */
export const getRealEstateNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?category=realestate");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Travel News
 * Navbar: Travel
 */
export const getTravelNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?category=travel");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Weather News / Weather Articles
 * Navbar: Weather
 */
export const getWeatherNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?category=weather");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/* =====================================================
   EXTRA COMMON APIS (VERY USEFUL)
===================================================== */

/**
 * Trending News (Sidebar)
 */
export const getTrendingNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?type=trending");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Featured / Editor Picks
 */
export const getFeaturedNewsApi = async () => {
  try {
    const res = await newsApi.get("/latest?type=featured");
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Search News
 */
export const searchNewsApi = async (keyword) => {
  try {
    const res = await newsApi.get(`/latest?search=${keyword}`);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Pagination / Infinite Scroll
 */
export const getPaginatedNewsApi = async (page = 1, limit = 10) => {
  try {
    const res = await newsApi.get(
      `/latest?page=${page}&limit=${limit}`
    );
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/* =====================================================
   FUTURE BACKEND (MERN READY)
===================================================== */

/**
 * Save Article (Bookmark)
 */
export const saveArticleApi = async (articleData) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/articles/save",
      articleData,
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Get Saved Articles
 */
export const getSavedArticlesApi = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/articles/saved",
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

/* =====================================================
   EXPORT DEFAULT INSTANCE
===================================================== */

export default newsApi;
