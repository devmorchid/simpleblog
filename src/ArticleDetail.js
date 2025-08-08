import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ArticleDetail.css";

function ArticleDetail() {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return (
      <div className="detail-container">
        <h2>❌Créer un nouvel article</h2>
        <Link to="/" className="back-link">← Retour à la page d'accueil</Link>
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
    
      <br />
      <Link to="/" className="back-link">← Retour à la liste</Link>
    </div>
  );
}

export default ArticleDetail;
