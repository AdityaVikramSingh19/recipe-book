import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <Link to={`/recipes/${recipe.id}`} className="view-button">View Details</Link>
    </div>
  );
};

export default RecipeCard;
