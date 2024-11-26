import React from 'react';
import './FeaturedRecipe.css'
import { Link } from 'react-router-dom';

const FeaturedRecipe = () => {
  return (
     <div className='featured-bg'>
        <div className='side-line-title'>
            <div className="h-line"></div>
            <span className='hi leads'> Recipes & Cooking Ideas</span>
            <div className="h-line"></div>
        </div>
        <div id='featured'>
            <div className="featured-images">
                <Link to={'/recipes/?q=soup'}>
                    <img src="Images/FeaturedRecipe/Soop.jpg" className='rounded' alt="" />
                </Link>
                <button type='button' className='featured-btn'>Soups</button>
            </div>
            <div className="featured-images">
                <Link to={'/recipes/?q=pasta'}>
                    <img src="Images/FeaturedRecipe/Pasta.webp" className='rounded' alt="" />
                    <button className='featured-btn'>Pasta</button>
                </Link>
            </div>
            <div className="featured-images">
                <Link to={'/recipes/?q=cookie'}>
                    <img src="Images/FeaturedRecipe/Coocies.jpg" className='rounded' alt="" />
                    <button className='featured-btn'>Cookies</button>
                </Link>
            </div>
            <div className="featured-images">
                <Link to={'/recipes/?q=cake'}>
                    <img src="Images/FeaturedRecipe/dessert.jpg" className='rounded' alt="" />
                    <button className='featured-btn'>Cakes</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FeaturedRecipe