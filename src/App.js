import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

// CONTEXT
import RecipeContextProvider from './context/recipeContext';

// LAYOUTS
import MainLayout from './Layouts/MainLayout';

//PAGES
import Home from './pages/Home';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import NotFoundPage from './components/Pieces/NotFoundPage';
import ScrollToTop from './components/Pieces/ScrollToTop';

function App() {

    return (
        <RecipeContextProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route
                        path='/'
                        element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/recipes" element={<Recipes />} />
                        <Route path="/recipe-details/:id" element={<RecipeDetails />} />
                        <Route path="*" element={ <NotFoundPage />}/>
                    </Route>
                </Routes>
            </Router>
        </RecipeContextProvider>
    );
}

export default App;
