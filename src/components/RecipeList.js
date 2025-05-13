import { useEffect, useState } from 'react';
import './RecipeList.scss'
import { useSearchParams, useNavigate } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { CiSearch } from 'react-icons/ci';

const RecipeList = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [searchRecipes, setSearchRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState();
    const [inputValue, setInputValue] = useState(query || "");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setSearchRecipes([]); 
            setLoading(true); 
            setError(null);

            const url = `https://food-recipes-with-images.p.rapidapi.com/?q=${query}`;
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

                const text = await response.text();
                const result = JSON.parse(text);

                if(result && result.d && result.d.length > 0) {
                    setSearchRecipes(result.d); 
                } else {
                    setError("No results found.");
                }
                              
            } catch (error) {
                setError(error.message || "An error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchData(); 
    }, [query]); 

    const handleSearchChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 3) {
            setSearchParams({ q: inputValue.trim() });
        } else {
            alert("Search query is too short. Please enter at least 4 characters.");
        }
    };

    return (
        <div id='recipe-list' className='container'>
            <div className="searching-section">
                <div className='searching-for'>
                    <h4>Searching for</h4>
                    <p>" {`${query}`} "</p>
                </div>
                <div className="search-bar">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleSearchChange}
                            placeholder="Search for recipes..."
                        />
                        <button type="submit"><CiSearch /></button>
                    </form>
                </div>
            </div>
            <RecipeCard searchRecipes={searchRecipes} loading={loading} error={error} />
        </div>
    );
};

export default RecipeList;
