import { useState } from 'react'
import './SearchRecipe.scss'
import { useNavigate } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'

const SearchRecipe = () => {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(keyword.trim().length > 3) {
            navigate(`/recipes/?q=${encodeURIComponent(keyword)}`)

            setKeyword('')
        } else {
            alert("Search query is too short. Please enter at least 4 characters.");
        }
    }


    return (
        <div className='search rounded-bottom'>
            <form className="search-input" onSubmit={handleSubmit}>
                <button type='submit' aria-label='Search'><IoIosSearch /></button>
                <input type="text" placeholder='Search for a recipe' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
            </form>
        </div>
    )
}

export default SearchRecipe