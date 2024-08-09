import React,{useState} from 'react';
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
// eslint-disable-next-line no-unused-vars
//import Contact from "./Contact";
//import { Link } from "react-router-dom";


function HeaderComponent(){
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
    <header>
        <nav className="main-nav">
            <div class="logo">
                <h2>
                    <span>E</span>lite
                    <span>G</span>ymBook
                </h2>
            </div>
            <div className= {showMediaIcons ? "menu-link mobile-menu-link" : 'menu-link'}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
               
                <li><a href='#contact' target='self'>Contact</a></li>
                <li><a href="#login">LogIn</a></li>           
            </ul>
            </div>
            
            <button id='signup'>SignUP</button> 
            
            {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
          
        </nav>
        
    </header>
    )
}

export default HeaderComponent;