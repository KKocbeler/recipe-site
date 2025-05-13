import './RecipeCard.scss';
import { Link } from 'react-router-dom';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';

const RecipeCard = ({ searchRecipes, loading, error }) => {
    return (
        <>
            {loading ? (
                <Loading />
            ) : error ? (
                <Error />
            ) : (
                <div id="recipe-card" className='container'>
                    {searchRecipes?.map((recipe) => (
                        <Link
                            to={`/recipe-details/${recipe.id}`}
                            key={recipe.id}
                            className="recipe-link"
                        >
                            <div className="food-card">
                                <div className="card-image">
                                    <img src={recipe.Image} alt={recipe.Title} loading='lazy'/>
                                </div>
                                <div className="card-main">
                                    <span>Dinner</span>
                                    <div>{recipe.Title}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default RecipeCard;
