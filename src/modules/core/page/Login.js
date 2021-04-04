import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import LogedIn from '../../../shared/auth/LogedIn';
export default function Login() {
   const [isLogin, setIsLogin] = useState(LogedIn.isAuthenticate);
   const login = () =>{
       if(!isLogin){
         LogedIn.login({username: "keshav"});
         setIsLogin(true);
       } else{
         LogedIn.logout();
         setIsLogin(false)
       }
   }
    return (
        <div>
            <h1>This is Login Component</h1>
            <Link to="dashboard">Dashboard</Link>
            <Button onClick={()=>login()}>{isLogin ? "Log out" : "Login"}</Button>
        </div>
    )
}
