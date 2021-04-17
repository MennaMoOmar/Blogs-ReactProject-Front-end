import React from "react";

import HeroSection from "./heroSection"
import About from "./about"
import Footer from "./footer"

const Home = () => {
    return ( 
        <React.Fragment>
            <HeroSection></HeroSection>
            <About></About>
            <Footer></Footer>
        </React.Fragment>
    );
}
 
export default Home;