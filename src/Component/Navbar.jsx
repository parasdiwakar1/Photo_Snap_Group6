import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://pixlr.com/img/general/pixlr-logo.svg" alt="Pixlr Logo" />
      </div>
      <ul className="nav-links">
        <li className="icon"><a href="#">Pricing</a></li>
        <li className="admin"><Link to="/">Home</Link></li>
        <li className="admin"><Link to="/login-signup"><FaUser /> Sign up / Log in</Link></li>
        <li className="icon"><a href="#">Try premium</a></li>
        <li className="bell"><a href="#"><i className="fas fa-bell"></i></a></li>
        <li><a href="#" onClick={toggleMenu}><i className="fas fa-bars"></i></a></li>
      </ul>
      {menuVisible && (
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login-signup">Login/Signup</Link></li>
            <li><a href="#">Edit</a></li>
            <li><a href="#">Footer</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
