import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext.jsx'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes.jsx';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import './App.css';

function App() {
  return (
    <RecipeProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipe />} />
        </Routes>
      </Router>
    </RecipeProvider>
  );
}

export default App;