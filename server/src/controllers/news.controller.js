import axios from "axios";

export const getHindiLatestNews = async (req, res) => {
  try {
    const response = await axios.get(
      "https://news.knowivate.com/api/latest"
    );

    const allNews = response.data.news || [];

    // ✅ Filter Hindi news
    const hindiNews = allNews.filter(
      (item) =>
        item.language === "hi" || // if language key exists
        /[ऀ-ॿ]/.test(item.title) || // Hindi Unicode detection
        /[ऀ-ॿ]/.test(item.description || "")
    );

    res.status(200).json({
      success: true,
      count: hindiNews.length,
      news: hindiNews,
    });
  } catch (error) {
    console.error("Hindi News API Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch Hindi news",
    });
  }
};