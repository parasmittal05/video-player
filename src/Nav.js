import React, { useEffect, useState } from "react";
import "./Nav.css";
import {  useNavigate } from "react-router-dom";
function Nav(){
    const [show, handleShow] = useState( false);
    const navigator = useNavigate();

    const transitionNavBar = () => {
    if (window.scrollY > 100) {
    handleShow (true);
    } else {
    handleShow(false);
    }
    };
    useEffect (() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, []);
return (
   
    <div className={`nav  ${show && "nav_black"}`}>
     
    <div className="nav__contents">
    <img
     onClick={() => navigator("/")}
    className="nav_logo"
    src="https://jalaworld.com/wp-content/uploads/2021/07/Fairplay_Logos-02.png"
    alt=""/>
    <img
    onClick={() => navigator("./profile")}
    className="nav_avatar"
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    alt=""/>
    
</div>
</div>
);
}
export default Nav;