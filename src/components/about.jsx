import React from "react";

const About = () => {
    return ( 
        <React.Fragment>
            <div className="about container">
                <div className="about__left row">
                    <div className="col-lg-6">
                        <h2 className="about__left__header">ABOUT US</h2>
                        <p className="about__left__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptas, dolores aspernatur quos blanditiis ad maiores consectetur iusto similique. Placeat unde assumenda reprehenderit, fuga iure sapiente quaerat deserunt laboriosam expedita?</p>
                    </div>
                    <div className="about__right col-lg-6">
                        <img className="about__right__image" src="images/about.png" alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default About;