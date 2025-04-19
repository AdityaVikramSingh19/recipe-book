import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useRecipes();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe not found</h2>
        <Link to="/recipes">Go back</Link>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.instructions}</p>
      <Link to="/recipes" className="back-btn">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
