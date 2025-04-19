import React, { createContext, useContext, useEffect, useState } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  // Fetch API data only once
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals);
        }
      });
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      {
        idMeal: Date.now().toString(), // temporary ID
        strMeal: newRecipe.name,
        strCategory: newRecipe.category,
        strInstructions: newRecipe.instructions,
        strIngredient1: newRecipe.ingredients, // simplified
      },
    ]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);
