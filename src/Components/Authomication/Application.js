import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../Providers/UserProvider";
import { useState } from "react";
import { useEffect } from "react";

function Application() {
    const user = useContext(UserContext);


    return (
        user ? <ProfilePage /> :
            <Router>
                {/* <Route path="/ProfilePage" component={ProfilePage}></Route> */}
                <Route path="/signUp" component={SignUp}></Route>
                <Route path="/" component={SignIn}></Route>
                <Route path="/passwordReset" component={PasswordReset}></Route>
            </Router>
    );

}
export default Application;


