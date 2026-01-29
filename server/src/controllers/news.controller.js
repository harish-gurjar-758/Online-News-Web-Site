import axios from "axios";

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
