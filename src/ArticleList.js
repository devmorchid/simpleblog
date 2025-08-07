import React, { useEffect, useState } from "react";
import "./ArticleList.css";
import { Link } from "react-router-dom";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;

  useEffect(() => {
    const userArticles = JSON.parse(localStorage.getItem("userArticles")) || [];

    fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-07-07&sortBy=publishedAt&apiKey=8debf03cdbd54a6a8f4ce43a0178c149")
      .then((res) => res.json())
      .then((data) => {
        const apiArticles = data.articles || [];

        // ✅ عرض مقالات المستخدم أولاً
        const allArticles = [...userArticles, ...apiArticles];

        setArticles(allArticles);
      })
      .catch((err) => console.error("Erreur:", err));
  }, []);

  // ✅ Pagination logic
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app-container">
      <h1>📰 آخر أخبار تيسلا</h1>

      <div className="articles-grid">
        {currentArticles.map((article, index) => (
          <div className="article-card" key={index}>
            <h2 className="article-title">
              {article.title}
              {/* ✅ تمييز مقالات المستخدم */}
              {article.source?.name === undefined && (
                <span style={{ color: "green", fontSize: "0.8rem" }}>
                  {" "}• من مقالاتك
                </span>
              )}
            </h2>

            {article.urlToImage && (
              <img
                className="article-image"
                src={article.urlToImage}
                alt="news"
              />
            )}
            <p className="article-description">{article.description}</p>

            <Link to="/article" state={{ article }} className="article-link">
              اقرأ المزيد →
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {Array.from({ length: 3 }, (_, i) => {
            let pageNumber = currentPage - 1 + i;
            if (pageNumber < 1 || pageNumber > totalPages) return null;

            return (
              <li
                key={pageNumber}
                className={`page-item ${
                  currentPage === pageNumber ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ArticleList;
