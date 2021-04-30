import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../image/logo.png'

const Menubar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                <img src={logo} width="15%" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link  as={Link} to="/">Service</Nav.Link>
                        <Nav.Link  as={Link} to="/">Our Team</Nav.Link>
                        <Nav.Link  as={Link} to="/addService">Admin</Nav.Link>
                        <Nav.Link  as={Link} to="/">Contact Us</Nav.Link>
                    </Nav>
                    {/* <Button as={Link} to="/login" variant="success">Login</Button> */}
                    {loggedInUser.displayName || loggedInUser.email ? (
                        <Nav.Link as={Link} to="/">
                            <img
                                className="avatar" style={{borderRadius:"50%",height:"50px"}}
                                src={
                                    loggedInUser.img ||
                                    "https://i.ibb.co/JqYKzYK/avatar.jpg"
                                }
                                alt={loggedInUser.displayName || loggedInUser.email}
                            />
                        </Nav.Link>
                    ) : (
                        <Button as={Link} to="/login" variant="danger" className="ml-3 login-Button">
                            LogIn
                        </Button>
                    )}
                </Navbar.Collapse>
            </Navbar>
             {/* <Navbar expand="md">
                <Navbar.Brand href="#home">
                    <img src="" alt="Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/">Service</Nav.Link>
                        <Nav.Link as={Link} to="/">Our Team</Nav.Link>
                        <Nav.Link as={Link} to="/">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/">Contact Us</Nav.Link>
                    </Nav>
                    {/* <Button as={Link} to="/login" variant="success">Login</Button> */}
                    {/* {loggedInUser.displayName || loggedInUser.email ? (
                        <Nav.Link as={Link} to="/profile">
                            <img
                                className="avatar"
                                src={
                                    loggedInUser.photoURL ||
                                    "https://i.ibb.co/JqYKzYK/avatar.jpg"
                                }
                                alt={loggedInUser.displayName || loggedInUser.email}
                            />
                        </Nav.Link>
                    ) : (
                        <Button as={Link} to="/login" variant="danger" className="ml-3 login-Button">
                            LogIn
                        </Button>
                    )}
                </Navbar.Collapse>
            </Navbar>  */} 
        </div>
    );
};

export default Menubar;