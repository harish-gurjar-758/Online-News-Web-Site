import React, { useEffect, useState } from "react";
import { getLatestNewsApi } from "../../apis/api";
import PuffLoader from "../../components/Loader/PuffLoader";

export default function LatestNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch latest news on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getLatestNewsApi();

        // ✅ SAFE CHECK
        if (res?.success && Array.isArray(res.news)) {
          setNews(res.news);
        } else {
          setNews([]);
          setError("No news available right now");
        }
      } catch (err) {
        console.error("Latest News Error:", err);
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  /* ===============================
     LOADING STATE
  ================================ */
  if (loading) {
    return <PuffLoader />;
  }

  /* ===============================
     ERROR STATE
  ================================ */
  if (error) {
    return (
      <div className="text-center py-5">
        <h5 className="text-danger">{error}</h5>
      </div>
    );
  }

  /* ===============================
     EMPTY STATE
  ================================ */
  if (news.length === 0) {
    return (
      <div className="text-center py-5">
        <h5>No latest news found</h5>
      </div>
    );
  }

  /* ===============================
     UI RENDER
  ================================ */
  return (
    <div className="w-100 px-4 py-3">
      <h2 className="mb-4 fw-bold">Latest News 📰</h2>

      <div className="row g-4">
        {news.map((item) => (
          <div className="col-lg-4 col-md-6 col-12" key={item._id}>
            <div className="card h-100 shadow-sm border-0">

              {/* News Image */}
              <img
                src={item.urlToImage || "https://via.placeholder.com/400x250"}
                className="card-img-top"
                alt={item.title || "News image"}
                style={{ height: "220px", objectFit: "cover" }}
              />

              {/* Card Body */}
              <div className="card-body d-flex flex-column">

                {/* Source */}
                <small className="text-muted mb-2">
                  {item?.source?.name || "Unknown Source"}
                </small>

                {/* Title */}
                <h5 className="card-title fw-semibold">
                  {item.title}
                </h5>

                {/* Description */}
                <p className="card-text text-muted">
                  {item.description
                    ? item.description.slice(0, 100) + "..."
                    : "No description available"}
                </p>

                {/* Read More */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn btn-outline-dark btn-sm"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
