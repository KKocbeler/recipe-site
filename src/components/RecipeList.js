
import React, { useEffect, useState } from 'react';
import './RecipeList.css'
import { useSearchParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const RecipeList = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [searchRecipes, setSearchRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setSearchRecipes([])
            setLoading(true)
            setError(null)
            const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${query}`;
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
                setSearchRecipes(result.d); 
                if(result.d && result.d.length > 0) {
                    setLoading(false)
                } else {
                    setError(true)
                    setLoading(false)
                }
                              
            } catch (error) {
                setError(error.message || "Bir hata oluştu");
                console.error(error);
            } 
        };

        fetchData(); 
    }, [query]); 

    // console.log(error)
    // console.log(searchRecipes)
return (
    <div id='recipe-list' className='container'>
        <div className='searching-for'>
            <h4>Searching for</h4>
            <p>" {`${query}`} "</p>
        </div>
        <hr />
         <RecipeCard searchRecipes={searchRecipes} loading={loading} error={error}/>
    </div>
)
}

export default RecipeList