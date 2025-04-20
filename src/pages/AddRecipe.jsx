import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';
import './AddRecipe.css';

const AddRecipe = () => {
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    strMeal: '',
    strCategory: '',
    strArea: '',
    strInstructions: '',
    strMealThumb: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.strMeal) newErrors.strMeal = 'Name is required';
    if (!formData.strCategory) newErrors.strCategory = 'Category is required';
    if (!formData.strArea) newErrors.strArea = 'Area is required';
    if (!formData.strInstructions) newErrors.strInstructions = 'Instructions are required';
    if (!formData.strMealThumb) newErrors.strMealThumb = 'Image URL is required';

    if (Object.keys(newErrors).length === 0) {
      const newRecipe = { idMeal: Date.now().toString(), ...formData };
      addRecipe(newRecipe);
      navigate('/recipes');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="add-recipe">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="strMeal" value={formData.strMeal} onChange={handleChange} />
          {errors.strMeal && <span className="error">{errors.strMeal}</span>}
        </label>
        <label>
          Category:
          <input type="text" name="strCategory" value={formData.strCategory} onChange={handleChange} />
          {errors.strCategory && <span className="error">{errors.strCategory}</span>}
        </label>
        <label>
          Area:
          <input type="text" name="strArea" value={formData.strArea} onChange={handleChange} />
          {errors.strArea && <span className="error">{errors.strArea}</span>}
        </label>
        <label>
          Instructions:
          <textarea name="strInstructions" value={formData.strInstructions} onChange={handleChange} />
          {errors.strInstructions && <span className="error">{errors.strInstructions}</span>}
        </label>
        <label>
          Image URL:
          <input type="text" name="strMealThumb" value={formData.strMealThumb} onChange={handleChange} />
          {errors.strMealThumb && <span className="error">{errors.strMealThumb}</span>}
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;