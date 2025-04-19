import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Recipes.css';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from TheMealDB API
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals);  // Set the recipes state with the fetched data
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  return (
    <div className="recipes-container">
      <h2>All Recipes</h2>
      <div className="recipes-list">
        {recipes?.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <h3>{recipe.strMeal}</h3>
            <p>{recipe.strCategory}</p>
            <Link to={`/recipes/${recipe.idMeal}`} className="recipe-details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
