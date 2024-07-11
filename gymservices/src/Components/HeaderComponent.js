import React from 'react';
import "./IndexComponent.css";

function HeaderComponent(){
    return(
    <header>
        <nav>
            <div class="logo">EliteGymBook</div>
            <ul>
                <li class='ulist'><a href="#home">Home</a></li>
                <li class='ulist'><a href="#about">About Us</a></li>
                <li class='ulist'><a href="#contact" target='self'>Contact</a></li>
                <li class='ulist'><a href="#login">LogIn</a></li>
                <div class='signup'>
                <button id="signup">SignUP</button>
                </div>  
            </ul>
        </nav>
    </header>
    )
}

export default HeaderComponent;