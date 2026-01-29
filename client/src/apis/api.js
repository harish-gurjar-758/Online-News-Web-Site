import axios from "axios";

/* =====================================================
   AXIOS INSTANCE
===================================================== */

const api = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ backend proxy
  timeout: 10000,
});

/* =====================================================
   NAVBAR BASED APIS
===================================================== */

/**
 * Latest Hindi News
 */
export const getLatestNewsApi = async () => {
  try {
    const res = await api.get("/news/latest");
    return res.data.news || [];
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
