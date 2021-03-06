import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => { 
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 " to="/dashboard">Contact US</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 " to="/dashboard">About US</Link>
                    </li>
                    <li className="nav-item">
                        {
                            loggedInUser.name ?
                                <button onClick={() => setLoggedInUser({})}>Sign Out</button> :
                                <button><Link className='menu-item' to="/login">Sign In</Link></button>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;