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

    // 🟢 حفظ المقال في localStorage
    const existingArticles = JSON.parse(localStorage.getItem("userArticles")) || [];
    const updatedArticles = [newArticle, ...existingArticles];
    localStorage.setItem("userArticles", JSON.stringify(updatedArticles));

    // 🔁 الرجوع إلى الصفحة الرئيسية
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>✍️ إنشاء مقال جديد</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="عنوان المقال"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="وصف مختصر"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <textarea
          placeholder="المحتوى الكامل للمقال"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          required
        />

        <input
          type="text"
          placeholder="رابط الصورة (اختياري)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">نشر المقال</button>
      </form>
    </div>
  );
}

export default NewArticleForm;
