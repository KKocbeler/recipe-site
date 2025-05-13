import { Link } from 'react-router-dom';
import './Navbar.scss';
import MobileNavMenu from "./MobileNavMenu.js";

const Navbar = () => {

    const messageAlert = () => {
        alert("These links are for visual puprposes only. Home and Contact links are active")
    }
    return (
        <>
            <div id='navbar'>
                <div className="navbar-header">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/"} onClick={messageAlert}>Article</Link>
                    <h1 className="navbar-logo">
                        <Link to={'/'}>
                            <img src="Images/logo/logo.png" alt="logo" loading='lazy'/>
                        </Link>
                    </h1>
                    <Link to={"/"} onClick={messageAlert}>Recipes</Link>                    
                    <Link to={"/contact"}>Contact</Link>                    
                </div>
                <MobileNavMenu />
            </div>
        </>
    )
}

export default Navbar