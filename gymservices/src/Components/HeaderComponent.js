import React,{useState} from 'react';
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// eslint-disable-next-line no-unused-vars
//import Contact from "./Contact";
//import { Link } from "react-router-dom";


function HeaderComponent(){
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    //
    const location = useLocation();
    const navigate = useNavigate();

    // Function to scroll to top when clicking "Home"
    const scrollToTop = () => {
      navigate('/'); // Navigates to Home
      window.scrollTo(0, 0); // Scrolls to the top of the page
    };
  
    //
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
                {/* <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
               
                <li><a href='/Contact' target='_parent'>Contact</a></li>
                <li><a href="#login">LogIn</a></li>            */}

            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            {/* <li><ScrollLink to="about" className="nav-link" smooth={true} duration={500}>About Us</ScrollLink></li> */}

            <li>
              {location.pathname === '/' ? (
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeClass="active"
                >
                  About Us
                </ScrollLink>
              ) : (
                <Link to="/" onClick={() => setTimeout(() => { document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }, 100)}>
                  About Us
                </Link>
              )}
            </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">LogIn</Link></li>
            </ul>
            </div>
            
            <Link to="/signup">
                    <button id='signup'>SignUp</button>
            </Link>
            
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