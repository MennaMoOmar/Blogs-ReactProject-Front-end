import React from "react";

import HeroSection from "./heroSection"
import About from "./about"

const Home = () => {
    return ( 
        <React.Fragment>
            <HeroSection></HeroSection>
            <About></About>
        </React.Fragment>
    );
}
 
export default Home;