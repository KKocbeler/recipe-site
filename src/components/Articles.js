import React, { useContext, useEffect, useState } from 'react';
import './Articles.scss'
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/recipeContext';

const Articles = () => {
    const [favs, setFavs] = useState(null)
    const {recipes} = useContext(RecipeContext);
    const articles = [
        {
            "id": 1,
            "image": "Images/articles-img/Cocunat-cake.jpg",
            "title": "Coconut Cake, Tom Cruise Gifts for Christmas",
            "description": "Hollywood stars look forward to receiving the 'Tom Cruise cake' during the holiday season. This white chocolate and coconut Bundt cake is legendary, but you don't need to be an A-lister to enjoy a slice.",
            "date": "Updated: Dec. 15, 2023"
        },
        {
            "id": 2,
            "image": "Images/articles-img/Chocolate-mousse.jpg",
            "title": "Decadent Chocolate Mousse to Satisfy Your Sweet Tooth",
            "description": "This rich and creamy chocolate mousse is a perfect dessert for any occasion. Simple to make, it’s sure to impress your family and friends.",
            "date": "Updated: Jan. 10, 2024"
        },
        {
            "id": 3,
            "image": "Images/articles-img/Lemon-tart.jpeg",
            "title": "Lemon Tart: A Zesty Delight",
            "description": "Tangy and sweet, this lemon tart is a refreshing dessert that’s perfect for spring and summer gatherings. Easy to prepare with a flaky crust and smooth lemon filling.",
            "date": "Updated: Mar. 5, 2024"
        }
    ]

    useEffect(() => {
        if(recipes && recipes.length >= 3) {
            const shuffled = [...recipes].sort(() => 0.5 - Math.random());

            setFavs(shuffled.slice(0, 3));
        }
    }, [recipes])

  return (
    <div className='home-articles-recipes'>
        <div className='article-section'>
            <h2 className='leads'> Articles </h2>
            <div className="articles">
                {
                    articles?.map((article, index) => (
                        <Link to={'/'} key={index}>
                            <div className="article" >
                                <div className="article-img">
                                    <img src={article.image} alt={article.title} loading='lazy'/>
                                </div>
                                <div className="article-texture">
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                    <p className='date-article'>{article.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>  
        </div>
        <div className="fav-recipes-section">
            <h2 className='leads'>Fav Recipes</h2>
            <div className="fav-recipes">
            {
                favs ? (
                        favs.map((fav, index) => (
                            <div className='fav-recipes-box' key={index}>
                                <Link to={`/recipe-details/${fav.Id}`}>
                                    <img src={fav.Image} alt="" />
                                    <h3>{fav.Title}</h3>
                                </Link>
                            </div>
                        ))
                ) : (
                    null
                )
            }
        </div>
        </div>
    </div>
  )
}

export default Articles