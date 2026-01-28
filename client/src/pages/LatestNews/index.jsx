import React, { useEffect, useState } from 'react'
import { getLatestNewsApi } from '../../apis/api'

export default function LatestNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch latest news on component load
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getLatestNewsApi()
        setNews(res.news || []) // API response has "news" array
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return <p>Loading latest news... 😴</p> 
  }

  return (
    <div className="w-100 px-4 py-3">
      <h2 className="mb-4 fw-bold">Latest News</h2> 📰

      <div className="row g-4">
        {news.map((item) => (
          <div className="col-lg-4 col-md-6 col-12" key={item._id}>
            <div className="card h-100 shadow-sm border-0">
              
              {/* News Image */}
              <img
                src={item.urlToImage || 'https://via.placeholder.com/400x250'}
                className="card-img-top"
                alt={item.title}
                style={{ height: '220px', objectFit: 'cover' }}
              />

              {/* Card Body */}
              <div className="card-body d-flex flex-column">
                
                {/* Source */}
                <small className="text-muted mb-2">
                  {item.source?.name}
                </small>

                {/* Title */}
                <h5 className="card-title fw-semibold">
                  {item.title}
                </h5>

                {/* Description */}
                <p className="card-text text-muted">
                  {item.description?.slice(0, 100)}...
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
  )
}
