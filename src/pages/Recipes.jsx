import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Recipes.css';

// Dummy data (will later replace with API call)
const dummyRecipes = [
  { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian dish.' },
  { id: 2, name: 'Chicken Curry', description: 'A flavorful spicy dish.' },
  { id: 3, name: 'Veggie Stir Fry', description: 'A healthy vegetable stir fry.' },
];

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  // Simulating an API call by using dummy data
  useEffect(() => {
    setRecipes(dummyRecipes);
  }, []);

  return (
    <div className="recipes-container">
      <h2>All Recipes</h2>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`} className="recipe-details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
