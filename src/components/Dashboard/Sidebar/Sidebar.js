import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import './Sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faGripHorizontal, faHdd, faHome, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch(`https://sleepy-mesa-43385.herokuapp.com/admin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = true;
                    setLoggedInUser(newUser)
                }
                else {
                    const newUser = { ...loggedInUser };
                    newUser.setUser = false;
                    setLoggedInUser(newUser)
                }
            })
    }, [])




    return (
        <div className="sidebar d-flex flex-column justify-content-between p-3 m-4 shadow" style={{ position: "absolute", height: "100vh", margin: "0" }} >
            <ul className="list-unstyled">
                {loggedInUser.setUser ? <div className="my-5">
                    <li>
                        <Link to="/adminOrder" className="text-secondary">
                            <FontAwesomeIcon icon={faHdd} />  <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-secondary">
                            <FontAwesomeIcon icon={faPlus} />  <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-secondary" >
                            <FontAwesomeIcon icon={faUserPlus} />  <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-secondary" >
                            <FontAwesomeIcon icon={faGripHorizontal} />  <span>Manage Service</span>
                        </Link>
                    </li>
                </div>
                    :
                    <div>
                        <li>
                            <Link to="/home" className="text-secondary">
                                <FontAwesomeIcon icon={faHome} />  <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/order" className="text-secondary">
                                <FontAwesomeIcon icon={faShoppingCart} />  <span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orderList" className="text-secondary">
                                <FontAwesomeIcon icon={faHdd} />  <span>User Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/testimonial" className="text-secondary">
                                <FontAwesomeIcon icon={faCommentDots} />  <span>Testimonial</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;