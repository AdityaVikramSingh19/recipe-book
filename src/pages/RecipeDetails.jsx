import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, loading } = useContext(RecipeContext);

  if (loading) return <p>Loading...</p>;
  const recipe = recipes.find((r) => r.idMeal === id);

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
      <h2>{recipe.strMeal}</h2>
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
      <Link to="/recipes" className="back-btn">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;