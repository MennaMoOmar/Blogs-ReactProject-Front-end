import React from "react";

const HeroSection = () => {
    return ( 
        <React.Fragment>
            <div className="herosection">
                <div className="container">
                    <h2 className="herosection__header">Explore More Blogs</h2>
                    <p className="herosection__para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="button">Explore Now</button>
                </div>
                
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9381FF" fillOpacity="1" d="M0,96L60,122.7C120,149,240,203,360,197.3C480,192,600,128,720,122.7C840,117,960,171,1080,176C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            
        </React.Fragment>
    );
}
 
export default HeroSection;