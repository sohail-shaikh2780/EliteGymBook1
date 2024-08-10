import ProjectCarousel from "./Carousel";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import Contact from "./Contact";

export default function IndexComponent(){
    return(
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={
        <div>
            <HeaderComponent/>
            <MainComponent/>
            <ProjectCarousel/>
            <FooterComponent/>
            {/* <FooterComponent/> */}
            
        </div>
        } />
        </Routes>
</BrowserRouter>
    )
} 