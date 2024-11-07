import React from 'react'
import RecipeList from '../components/RecipeList'
import SearchRecipe from '../components/SearchRecipe'

const Recipes = () => {
  return (
    <div>
      <SearchRecipe />
      <RecipeList />
    </div>
  )
}

export default Recipes