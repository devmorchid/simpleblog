import React from 'react';
import './Footer.css'; // تأكد من وجود ملف CSS لتنسيق التذييل   
function Footer() {
    return ( 
        <div>
            <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          MonBlog<span className="dot">.</span>
        </div>

        {/* Navigation */}
        <ul className="footer-nav">
          <li><a href="/">Accueil</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/a-propos">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © {new Date().getFullYear()} MonBlog. Tous droits réservés.
      </div>
    </footer>
        </div>
     );
}

export default Footer;