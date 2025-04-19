import React, { useState } from 'react';
import './AddRecipe.css';

const AddRecipe = () => {
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
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!formData.instructions) newErrors.instructions = 'Instructions are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Recipe submitted:', formData);
      alert('Recipe added successfully (mock)');
      // Reset form
      setFormData({ name: '', category: '', ingredients: '', instructions: '' });
      setErrors({});
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
          {errors.category && <span className="error">{errors.category}</span>}
        </label>
        <label>
          Ingredients (comma-separated):
          <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />
          {errors.ingredients && <span className="error">{errors.ingredients}</span>}
        </label>
        <label>
          Instructions:
          <textarea name="instructions" value={formData.instructions} onChange={handleChange} />
          {errors.instructions && <span className="error">{errors.instructions}</span>}
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
