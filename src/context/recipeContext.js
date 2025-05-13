import React, { useEffect, useState } from "react";

export const RecipeContext = React.createContext();

const RecipeContextProvider = (props) => {
    const [recipes, setRecipes] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=meat';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '52c84b808bmsh3011dd83d5e47a9p1582bbjsnf10e135d46ea',
                    'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status ${response.status}`);
                }

                const result = await response.json();
                setRecipes(result.d);
            } catch (error) {
                setError(error.message || "Bir hata oluştu");
            }
        };

        fetchData(); 
    }, []); 

    return (
    <RecipeContext.Provider value={{ 
        recipes: recipes,
        error: error
    }}>
        {props.children}
    </RecipeContext.Provider>
    );
};

export default RecipeContextProvider ;