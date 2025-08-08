import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NewArticleForm.css';

function NewArticleForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      title,
      description,
      content,
      urlToImage: imageUrl,
      publishedAt: new Date().toISOString(),
    };

    // 🟢 Sauvegarder l'article dans le localStorage
    const existingArticles = JSON.parse(localStorage.getItem("userArticles")) || [];
    const updatedArticles = [newArticle, ...existingArticles];
    localStorage.setItem("userArticles", JSON.stringify(updatedArticles));

    // 🔁 Retourner à la page d'accueil
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>✍️ Créer un nouvel article </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Brève description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <textarea
          placeholder="Contenu complet de l'article"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          required
        />

        <input
          type="text"
          placeholder="Lien de l'image (optionnel)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">Publier l'article</button>
      </form>
    </div>
  );
}

export default NewArticleForm;
