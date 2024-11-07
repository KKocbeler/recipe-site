import React, { useContext, useEffect, useState } from 'react';
import './Articles.css'
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/recipeContext';

const Articles = () => {
    const [favs, setFavs] = useState(null)
    const {recipes} = useContext(RecipeContext);

    useEffect(() => {
        if(recipes) {
            setFavs(recipes)
        }
    }, [recipes])

    console.log(favs)
  return (
    <>
        <div id='all-article'>
            <div id="articles">
                <h4><Link className='leads'> Articles </Link></h4>
                <div className="article">
                    <div className="article-left">
                        <img src="Images/articles-img/Cocunat-cake.jpg" alt="" />
                    </div>
                    <div className="article-right">
                        <h5>Cocunut Cake, Tom Cruise Gifts for Christmas</h5>
                        <p>
                        Hollywood stars look forward to receiving the 'Tom Cruise cake' during the holiday season.
                        This white chocolate and coconut Bundt cake is legendary, but you don't need to be an A-lister to enjoy a slice.
                        </p>
                        <p className='date-article'> Updated: Dec. 15, 2023</p>
                    </div>
                </div>
                <div className="article">
                    <div className="article-left">
                        <img src="Images/articles-img/Cocunat-cake.jpg" alt="" />
                    </div>
                    <div className="article-right">
                        <h5>Cocunut Cake, Tom Cruise Gifts for Christmas</h5>
                        <p>
                        Hollywood stars look forward to receiving the 'Tom Cruise cake' during the holiday season.
                        This white chocolate and coconut Bundt cake is legendary, but you don't need to be an A-lister to enjoy a slice.
                        </p>
                        <p className='date-article'> Updated: Dec. 15, 2023</p>
                    </div>
                </div>
                <div className="article">
                    <div className="article-left">
                        <img src="Images/articles-img/Cocunat-cake.jpg" alt="" />
                    </div>
                    <div className="article-right">
                        <h5>Cocunut Cake, Tom Cruise Gifts for Christmas</h5>
                        <p>
                        Hollywood stars look forward to receiving the 'Tom Cruise cake' during the holiday season.
                        This white chocolate and coconut Bundt cake is legendary, but you don't need to be an A-lister to enjoy a slice.
                        </p>
                        <p className='date-article'> Updated: Dec. 15, 2023</p>
                    </div>
                </div>
            </div>
            <div id="fav-recipes">
                <h4><Link className='leads'> Fav Recipes </Link></h4>
                {
                    favs ? (
                        <div className="ara">
                            <div className='fav-recipes__box'>
                                <Link to={'/recipe-details/67'}>
                                    <img src={favs[0].Image} alt="" />
                                    <h5>{favs[0].Title}</h5>
                                </Link>
                            </div>
        
                            <div className='fav-recipes__box'> 
                                <Link to={'/recipe-details/760'}>
                                    <img src={favs[7].Image} alt="" />
                                    <h5>{favs[7].Title}</h5>
                                </Link>
                            </div>
        
                            <div className='fav-recipes__box'> 
                                <Link to={'/recipe-details/855'}>
                                    <img src={favs[11].Image} alt="" />
                                    <h5>{favs[11].Title}</h5>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        </div>   
    </>
  )
}

export default Articles