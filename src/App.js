import React from 'react';
import {Routes,Route} from "react-router-dom";

import Navbar from "./component/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Profile from "./pages/Profile";
import UserDetails from './pages/userDetails'

function App(){
    // this function used for close data when logout
    const isLoggedIn=window.localStorage.getItem("loggedIn");
    return(
        <div className="app">
            <Navbar/>
            <Routes>
                <Route exact path='/' element={isLoggedIn =="true"?<UserDetails/>:<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/userDetails' element={<UserDetails/>}/>
                
            </Routes>

           
            
        </div>
    );
}

export default App;