import FeaturedRecipe from '../components/FeaturedRecipe'
import SearchRecipe from '../components/SearchRecipe'
import Articles from '../components/Articles'
import HomeSwiper from '../components/HomeSwiper'

const Home = () => {
  return (
    <>
        <SearchRecipe />
        <div className='container'>
            <FeaturedRecipe />
            <Articles />
            <HomeSwiper />
        </div>
    </>
  )
}

export default Home