import React, { useEffect, useState } from 'react';
import './RecipeDetailsPage.css';
import { useParams } from 'react-router-dom';
import Loading from './Pieces/Loading';
import Error from './Pieces/Error';

const RecipeDetailsPage = () => {
    const { id } = useParams();
    const tarif = id;
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${tarif}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
                    'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status ${response.status}`);
                }

                const result = await response.json();
                setLoading(false)
                setRecipe(result.d[0]);
            } catch (error) {
                setError(error.message || 'Bir hata oluştu');
                console.error(error);
            }
        };

        fetchData();
    }, [tarif]);

    console.log(recipe)

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
