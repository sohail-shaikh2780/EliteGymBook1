import React from 'react';
import Gymno4 from './Gymno4.jpg';
import Gymno5 from './Gymno5.jpg';
import Gymno6 from './Gymno6.jpg';

function MainComponent() {


    return (
        <div>
            <section id="home">
                <h1>Welcome to EliteGymBook</h1>
                <p>Your fitness journey starts here. Search your Gym and transform your life!</p>
                <div class="search-container">
                    <select id="city-dropdown">
                        <option value="" disabled selected>Select your city</option>
                        <option value="pimpri">Pimpri</option>
                        <option value="wakad">Wakad</option>
                        <option value="baner">Baner</option>
                        <option value="kothrud">Kothrud</option>
                    </select>
                    <button id="search-button">Search</button>
                </div>
            </section>

            <section id="panel11">
                <div id='listing'>
                    <h1>Featured Listing</h1>
                    <p>See & book your ground from the list of most popular grounds in your city</p>
                </div>
                <br></br>
                <div className="panel-container">
                    <div className="panel">
                        <img src={Gymno4} alt="Gym" className="gymImage" />
                        <h3>Elite Gym</h3>
                        <p>Location: Pimpri</p>
                        <button className="bookButton">Book Now</button>
                    </div>
                    <div className="panel">
                        <img src={Gymno5} alt="People working out in the gym" className="gymImage" />
                        <h3>Prime Gym</h3>
                        <p>Location: Wakad</p>
                        <button className="bookButton">Book Now</button>
                    </div>
                    <div className="panel">
                        <img src={Gymno6} alt="People working out in the gym" className="gymImage" />
                        <h3>Fit Gym</h3>
                        <p>Location: Hinjewadi</p>
                        <button className="bookButton">Book Now</button>
                    </div>



                </div>
                <br></br>
                <br></br>
                <br></br>
                <section id='about'>
                <div id='aboutdiv'>
                     <h2>About Us</h2><br></br>
                      <p>
                            Welcome to EliteGymBook,
                     </p>
                     <p>
                            At EliteGymBook, we bridge the gap between fitness and technology, offering a seamless platform for gym services. Whether you're a gym owner, fitness enthusiast, our user-friendly application makes gym operations effortless.
                     </p><br></br>
                     <h4>Join Us</h4>
                     <p>Transform your fitness journey with EliteGymBook. Contact us at <a href='#' id='mail'>info@EliteGymBook.com</a> to get started!</p>
                     

                </div>
                </section>
            </section>
        </div>

    )

}
export default MainComponent;