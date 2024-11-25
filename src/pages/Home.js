import React from 'react'
import FeaturedRecipe from '../components/FeaturedRecipe'
import SearchRecipe from '../components/SearchRecipe'
import Articles from '../components/Articles'

const Home = () => {
  return (
    <div>
        {/* <SearchRecipe /> */}
        <div className='container'>
            <FeaturedRecipe />
            <Articles />
        </div>
    </div>
  )
}

export default Home