import React from 'react';
import './Footer.css'; // تأكد من وجود ملف CSS لتنسيق التذييل   
function Footer() {
    return ( 
        <div>
            <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          SimpleBlog<span className="dot">.</span>
        </div>

       
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © {new Date().getFullYear()} © 2025 MonBlog. Tous droits réservés.
      </div>
    </footer>
        </div>
     );
}

export default Footer;