import './NotFoundPage.scss';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div id='not-found' className='container'>
        <h2>Sorry !</h2>
        <p>We can't seem to find the resource you're looking for.</p>
        <p>
            Please check that the Web site address is spelled correctly.
            Or go to our <Link to={'/'}>home page</Link>, and use the menus to navigate to a specific section.
        </p>
        <div>
            <i className="fa-solid fa-triangle-exclamation"></i>
        </div>
    </div>
  )
}

export default NotFoundPage