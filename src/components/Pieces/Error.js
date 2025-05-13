import './Error.scss';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div id='error' className='container'>
            <div className="oops">Oops</div>
            <p>We can't seem to find the recipes you're looking for.</p>
            <div>
                The page you are looking for does not exist
            </div>
            <Link className='to-home' to={'/'}>Home Page</Link>
        </div>
    )
}

export default Error