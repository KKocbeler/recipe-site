import React from 'react';
import './RecipeCard.css';
import { Link } from 'react-router-dom';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';

const RecipeCard = ({ searchRecipes, loading, error }) => {
    
    return (
        <div id='recipe-card'>
            {
                loading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : (
                    searchRecipes?.map((recipe) => (
                        <Link to={`/recipe-details/${(recipe.id)}`} key={recipe.id} className="recipe-link">
                            <div className="food-card">
                                <div className="card-image">
                                    <img src={recipe.Image} alt={recipe.Title} />
                                </div>
                                <div className="card-main">
                                    <span>Dinner</span>
                                    <h3>{recipe.Title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                )
            }
        </div>
    );
};

export default RecipeCard;