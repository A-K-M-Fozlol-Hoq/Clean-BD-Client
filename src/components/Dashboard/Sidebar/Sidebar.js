import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://pure-shore-45304.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <span>Add review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addTestimonial" className="text-white">
                        <span>Add Testimonial</span>
                    </Link>
                </li>

                
                {
                    !isAdmin && <div>
                        <li>
                            <Link to="/order" className="text-white">
                                <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/bookings" className="text-white">
                                <span>booking List</span>
                            </Link>
                        </li>
                    </div>
                }
                {isAdmin && <div>
                    <li>
                        <Link to="/orders" className="text-white">
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white" >
                            <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white" >
                            <span>Manage Service</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;