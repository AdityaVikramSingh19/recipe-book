import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div className="recipe-details-container">
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strCategory}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.includes('strIngredient') && recipe[key])  // Filter to get ingredients
          .map((ingredientKey, index) => (
            <li key={index}>{recipe[ingredientKey]}</li>
          ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
