import './FeaturedRecipe.scss';
import { Link } from 'react-router-dom';

const featuredItems = [
  {
    title: 'Soups',
    image: 'Images/FeaturedRecipe/Soop.jpg',
    query: 'soup'
  },
  {
    title: 'Pasta',
    image: 'Images/FeaturedRecipe/Pasta.webp',
    query: 'pasta'
  },
  {
    title: 'Cookies',
    image: 'Images/FeaturedRecipe/Coocies.jpg',
    query: 'cookie'
  },
  {
    title: 'Cakes',
    image: 'Images/FeaturedRecipe/dessert.jpg',
    query: 'cake'
  }
];

const FeaturedRecipe = () => {
    return (
        <div className='featured-bg'>
            <div className='side-line-title'>
                <div className="h-line"></div>
                <h2 className='title leads'> Recipes & Cooking Ideas</h2>
                <div className="h-line"></div>
            </div>
            <div id='featured'>
                {featuredItems.map((item, index) => (
                    <div className="featured-images" key={index}>
                        <Link to={`/recipes/?q=${item.query}`}>
                        <img src={item.image} className='rounded' alt={item.title} />
                        <button className='featured-btn'>{item.title}</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
    };

export default FeaturedRecipe;
