import React, { useEffect, useState } from 'react';
import './RecipeDetailsPage.scss';
import { useParams } from 'react-router-dom';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';

const RecipeDetailsPage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${id}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': "52c84b808bmsh3011dd83d5e47a9p1582bbjsnf10e135d46ea",
                    'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status ${response.status}`);
                }

                const result = await response.json();
                if(result.d[0]) {
                    setRecipe(result.d[0]);
                } else {
                    setError("Recipe")
                }
            } catch (error) {
                setError("Recipe not found")
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='container'>
            {loading && <div className='details-loading'><Loading /></div>}

            {error && <Error />}

            {recipe && 
                <div id="recipe-details">
                    <div className="recipe-title">
                        <h3>{ recipe.Title }</h3>
                    </div>
                    <div className="details-body">
                        <div className="details-image">
                            <img src={recipe.Image} alt={recipe.Title} />
                        </div>
                        <div className="details-main">
                            <h4>Instructions</h4>
                            <p>
                                {recipe.Instructions}
                            </p>
                        </div>
                        <div className="details-ingri">
                            <h4>Ingredients</h4>
                            <ul>
                                {
                                    Object.values(recipe.Ingredients).map((ingre, index) => (
                                        <li key={index}>
                                            <i className="fa-solid fa-lemon"></i> <span>{ingre}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default RecipeDetailsPage;
