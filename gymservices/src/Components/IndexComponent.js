import ProjectCarousel from "./Carousel";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import Contact from "./Contact";
import Signup from "./SignUp";
import Login from "./Login";
import PimpriComponent from './PimpriComponent'; // Component for Pimpri
import BanerComponent from './BanerComponent';   // Component for Baner
import WakadComponent from './WakadComponent'; 


export default function IndexComponent(){
    return(
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} /> 
                <Route path="/login" element={<Login />} /> 
                <Route path="/pimpri" element={<PimpriComponent />} />
                <Route path="/baner" element={<BanerComponent />} />
                <Route path="/wakad" element={<WakadComponent />} />
                <Route path="/" element={
        <div>
            <HeaderComponent/>
            <MainComponent/>
            <ProjectCarousel/>
            <FooterComponent/>
            
        </div>
        } />
        </Routes>
</BrowserRouter>
    )
} 