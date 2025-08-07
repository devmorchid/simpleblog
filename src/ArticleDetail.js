import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ArticleDetail.css";

function ArticleDetail() {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="detail-container">
        <h2>المقال غير متوفر ❌</h2>
        <Link to="/" className="back-link">← رجوع إلى الصفحة الرئيسية</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h1>{article.title}</h1>
      {article.urlToImage && (
        <img src={article.urlToImage} alt="Article" className="detail-image" />
      )}
      <p className="detail-content">{article.content || article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="source-link"
      >
        ⤴ المصدر الرسمي
      </a>
      <br />
      <Link to="/" className="back-link">← رجوع إلى القائمة</Link>
    </div>
  );
}

export default ArticleDetail;
