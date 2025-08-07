// import React from "react";
// import { Link } from "react-router-dom";    

// function Navbar() {
//     return ( 
//         <div className="topnav">
//             <Link className="active" to="/">Home</Link>
//             <Link to="/news">News</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="/NewArticleForm">Ecrire un article</Link>
//         </div>
//     );
// }

// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css'; // تأكد من وجود ملف CSS لتنسيق شريط التنقل
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MyLogo</div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
