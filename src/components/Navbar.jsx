import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🍽️ RecipeBook</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/add">Add Recipe</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;