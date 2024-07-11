import React from 'react';

function FooterComponent(){
    return(
<footer>
        <div class="footer-container">
            <div class="footer-business">
                <br></br>
                <br></br>
                <h3>FOR BUSINESSES</h3>
                <ul>
                    <li><a href="#">Add A Gym</a></li>
                </ul>
                <button class="business-button">BUSINESS LOGIN</button>
                <button class="business-button">REGISTER WITH US</button>
                <br></br>
            </div>
            <div class="footer-contact">
                <br></br>
                <br></br>
                <h3>Contact Us</h3>
                <p>Email: info@EliteGymBook.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 EliteGymFinder. All rights reserved  |  <a href="#" target="_blank">Privacy Policy</a>  |  <a href="#" target="_blank">Terms and Conditions</a></p>
        </div>
</footer>

    )
}

export default FooterComponent;