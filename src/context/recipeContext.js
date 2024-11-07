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
                    'X-RapidAPI-Key': 'e2d130b571mshd875073fff5b747p12e217jsne68d48a0c5a1',
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
                console.error(error);
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