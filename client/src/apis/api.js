import axios from "axios";

/* =====================================================
   AXIOS INSTANCE
===================================================== */

const api = axios.create({
  baseURL: "https://news.knowivate.com/api",
  timeout: 10000,
});

/* =====================================================
   NAVBAR BASED APIS
===================================================== */

/**
 * Latest News
 */
export const getLatestNewsApi = async () => {
  try {
    const res = await api.get("/latest");
    return res.data?.news || [];
  } catch (error) {
    console.error(error.message);

  }
};
