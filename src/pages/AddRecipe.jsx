import React, { useState } from 'react';
import { useRecipes } from '../context/RecipeContext';
import './AddRecipe.css';

const AddRecipe = () => {
  const { addRecipe } = useRecipes();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    ingredients: '',
    instructions: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.instructions.trim()) newErrors.instructions = 'Instructions are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      addRecipe(formData); 
      alert('Recipe added successfully!');
      setFormData({
        name: '',
        category: '',
        ingredients: '',
        instructions: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="add-recipe-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter recipe name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Category:
          <input
            type="text"
            name="category"
            placeholder="e.g. Breakfast"
            value={formData.category}
            onChange={handleChange}
          />
          {errors.category && <span className="error">{errors.category}</span>}
        </label>

        <label>
          Ingredients (comma-separated):
          <textarea
            name="ingredients"
            placeholder="e.g. Eggs, Milk, Flour"
            value={formData.ingredients}
            onChange={handleChange}
          ></textarea>
          {errors.ingredients && <span className="error">{errors.ingredients}</span>}
        </label>

        <label>
          Instructions:
          <textarea
            name="instructions"
            placeholder="Step by step instructions"
            value={formData.instructions}
            onChange={handleChange}
          ></textarea>
          {errors.instructions && <span className="error">{errors.instructions}</span>}
        </label>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
