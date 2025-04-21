import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';
import './Recipes.css';

function Recipes() {
  const { recipes, loading } = useContext(RecipeContext);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading recipes...</p>;

  return (
    <div className="recipes-wrapper">
      <h2>All Recipes</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;