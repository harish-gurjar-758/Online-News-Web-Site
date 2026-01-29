import React, { useEffect, useState } from 'react'
import { getLatestNewsApi } from '../../apis/api'
import PuffLoader from '../../components/Loader/PuffLoader'

export default function LatestNews() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true)

                // ✅ API already returns array
                const data = await getLatestNewsApi()

                setNews(data)
            } catch (err) {
                console.error('API Error:', err)
                setError('Failed to load news')
            } finally {
                setLoading(false)
            }
        }

        fetchNews()
    }, [])

    // Loader
    if (loading) {
        return <PuffLoader />
    }

    // Error UI
    if (error) {
        return (
            <div className="text-center py-5 text-danger fw-semibold">
                {error}
            </div>
        )
    }

    // No news case
    if (news.length === 0) {
        return (
            <div className="text-center py-5 fw-semibold">
                No news available
            </div>
        )
    }

    return (
        <div className="container-fluid px-4 py-3">
            <h2 className="mb-4 fw-bold">Latest News 📰</h2>

            <div className="row g-4">
                {news.map((item, index) => (
                    <div className="col-lg-4 col-md-6 col-12" key={item._id || index}>
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
                                    {item.source?.name || 'Unknown Source'}
                                </small>

                                {/* Title */}
                                <h5 className="card-title fw-semibold">
                                    {item.title}
                                </h5>

                                {/* Description */}
                                <p className="card-text text-muted">
                                    {item.description
                                        ? item.description.slice(0, 100) + '...'
                                        : 'No description available'}
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
