import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import google from '../../../image/google.png'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
import Menubar from '../../Shared/Menubar/Menubar';
import Footer from '../../Shared/Footer/Footer';




if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSign = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = { name: displayName, email, img: photoURL }
                setLoggedInUser(signInUser)
                history.replace(from)
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div>
            <Menubar></Menubar>
            {/* <button className='btn btn-success' onClick={handleGoogleSign}>Sign in With Google</button> */}
            <div style={{ textAlign: "center", marginTop: "120px" }}>
                <h2>Sign In with Google</h2>
                <Button className="w-25" onClick={handleGoogleSign} variant="warning"> <img style={{ width: '25px', height: "25px" }} src={google} alt="" /> Sign in With Google</Button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;