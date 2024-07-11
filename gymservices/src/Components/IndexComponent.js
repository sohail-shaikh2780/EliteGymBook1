import ProjectCarousel from "./Carousel";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";

export default function IndexComponent(){
    return(

        <div>
            <HeaderComponent/>
            <MainComponent/>
            <ProjectCarousel/>
            <FooterComponent/>
            {/* <FooterComponent/> */}
        </div>

    )
} 