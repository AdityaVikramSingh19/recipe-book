import React from 'react';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const { recipes } = useRecipes();

  return (
    <div className="recipes-page">
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found. Try adding one!</p>
      ) : (
        recipes.map((recipe, index) => (
            <RecipeCard key={recipe.id || index} recipe={recipe} />
          ))
          
      )}
    </div>
  );
};

export default Recipes;
