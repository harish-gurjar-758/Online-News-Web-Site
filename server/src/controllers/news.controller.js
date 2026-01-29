import axios from "axios";

// const MAIN_API_URI = "https://news.knowivate.com/api"

// Letest News
export const getLatestNews = async (req, res) => {
  try {
    const response = await axios.get(
      "https://news.knowivate.com/api/latest"
    );

    const allNews = response.data?.news || [];

    res.status(200).json({
      success: true,
      count: allNews.length,
      news: allNews,
    });
  } catch (error) {
    console.error("News API Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch news",
    });
  }
};

// Technologies new
export const getTechnologiesNews = async (req, res) => {
  try {
    // const response = await axios.get(
    //   `${MAIN_API_URI}/technology`
    // );

    const response = await axios.get(
      "https://news.knowivate.com/api/technologies"
    );

    const technologiesNews = response.data?.news || [];

    res.status(200).json({
      success: true,
      count: technologiesNews.length,
      news: technologiesNews,
    });
  } catch (error) {
    console.error("Technology News API Error : ", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch news",
    })
  }
};