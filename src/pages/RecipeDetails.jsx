import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

// Dummy data for now, to be replaced with real API call
const dummyRecipes = [
  { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian dish.', ingredients: ['Spaghetti', 'Tomato sauce', 'Ground beef'], instructions: 'Cook spaghetti and add sauce and beef.' },
  { id: 2, name: 'Chicken Curry', description: 'A flavorful spicy dish.', ingredients: ['Chicken', 'Curry powder', 'Coconut milk'], instructions: 'Cook chicken and add curry spices and coconut milk.' },
  { id: 3, name: 'Veggie Stir Fry', description: 'A healthy vegetable stir fry.', ingredients: ['Broccoli', 'Carrots', 'Soy sauce'], instructions: 'Stir-fry veggies with soy sauce.' },
];

const RecipeDetails = () => {
  const { id } = useParams();  // Extracting the recipe id from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = dummyRecipes.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipe-details-container">
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
