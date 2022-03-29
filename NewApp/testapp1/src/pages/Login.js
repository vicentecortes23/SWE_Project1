import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from "react-router-dom";

function Login({setIsAuth}) {
    let navigate = useNavigate();

    const signInWithGoogle = ( )  => {
        signInWithPopup(auth,provider).then((result) => {
           //stay logged in if you close page
           localStorage.setItem("isAuth", true);
           setIsAuth = true;
         navigate("/");
        })

    };

    return (<div className="loginPage"> 
        <p> Sign In to Continue </p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}> Sign in with Google</button> 
    </div>
    );
}

export default Login;