import React, { useState } from 'react'
import './SearchRecipe.css'
import { useNavigate } from 'react-router-dom'

const SearchRecipe = () => {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(keyword.trim() !== '') {
            navigate(`/recipes/?q=${keyword}`)

            setKeyword('')
        } else {
            alert("Please enter a word.");
        }
    }


    return (
        <div className='search rounded-bottom'>
            <form className="search-input" onSubmit={handleSubmit}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search for a recipe' onChange={(e) => setKeyword(e.target.value)}/>
            </form>
        </div>
    )
}

export default SearchRecipe