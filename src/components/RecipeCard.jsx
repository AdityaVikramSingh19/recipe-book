import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="recipe-img"
      />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strArea} - {recipe.strCategory}</p>
      <Link to={`/recipes/${recipe.idMeal}`}>
        <button className="view-button">View Details</button>
      </Link>
    </div>
  );
}

export default RecipeCard;
