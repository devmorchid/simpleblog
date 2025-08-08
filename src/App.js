import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import Navbar from "./Navbar";  
import Footer from "./Footer";
import NewArticleForm from "./NewArticleForm"; // Assuming you have a NewArticleForm component
function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        <Navbar />
         
      
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article" element={<ArticleDetail />} />
          <Route path="/NewArticleForm" element={<NewArticleForm />} />
        </Routes>
       <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
