import React from "react";

import HeroSection from "./heroSection"
import About from "./about"
import Blogs from "./blogs"
import Footer from "./footer"

const Home = () => {
    return ( 
        <React.Fragment>
            <HeroSection></HeroSection>
            <About></About>
            <Blogs></Blogs>
            <Footer></Footer>
        </React.Fragment>
    );
}
 
export default Home;