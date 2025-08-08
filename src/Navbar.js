 import React, { useState } from 'react';
 import { Link } from "react-router-dom";
 import './Navbar.css';
 // تأكد من وجود ملف logo.png في المسار الصحيح

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">MyLogo</div>

//         <div className={`topnav ${menuOpen ? 'open' : ''}`}>
//           <Link className="active" to="/">Home</Link>
//           <Link to="/news">News</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/NewArticleForm">Ecrire un article</Link>
//         </div>

//         <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

function Navbar() {
    return ( 
        <div className='navbar'> 
      
      
        <div className="logo">
              <img src='../SimpleBlog.png' alt="Logo du site"  />
             SimpleBlog
        </div>
        
        <div className="lnk">
           <Link className="" to="/">Articles</Link>
    
           <Link to="/NewArticleForm">Ecrire un article</Link>
        </div>

        </div>
     );
}

export default Navbar;
