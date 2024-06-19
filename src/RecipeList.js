import { useState,useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './Recipe.css'
const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm , setSearchTerm] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:4000/recipes').then(response=>{
            setRecipes(response.data);
        })
        .catch(error=>{
            console.log('there was error fetching the recipes!',error);
        });
    },[]);

    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleSearchChange = (event) =>{
        setSearchTerm(event.target.value);
    }
  return (
    <div>
        <h1>Recipe List</h1>
        <div className="search-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe-link">
            <div className="recipe">
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecipeList
