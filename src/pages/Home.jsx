import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Recipe Book 🍲</h1>
      <p>Discover amazing recipes or share your own!</p>
      <Link to="/recipes" className="cta-button">Explore Recipes</Link>
    </div>
  );
};

export default Home;