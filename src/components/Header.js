import React from "react";
import logo from "../images/web.png";
import menutop from "../images/menu-top.svg";
import '../css/header.css';

const Header = () => {
  return (
    <div className = 'header-container'>
      <div className= 'header-top'>
        <img className = 'imgLeft' src={logo}  alt="imgLeft" /> 
        <img className = 'imgRight' src={menutop} alt="imgRight" />
      </div>
       
      <h1>
        Say hello to <br /> ReactJS
      </h1>
      <p>
        You will learn a Frontend <br />
        framework from scratch, to becaome an Ninka Developer.
      </p>
      <button>
        Awesome!
      </button>
     
    </div>
  );
};

export default Header;
