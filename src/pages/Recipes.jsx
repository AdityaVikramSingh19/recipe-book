import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import './Recipes.css';

const Recipes = () => {
  const { recipes } = useRecipes();

  return (
    <div className="recipes-container">
      <h2>All Recipes</h2>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <h3>{recipe.strMeal}</h3>
            <p>{recipe.strCategory}</p>
            <Link to={`/recipes/${recipe.idMeal}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
