import React, {useEffect} from "react";
import WOW from 'wowjs';


const About = () => {

    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    })

    return ( 
        <React.Fragment>
            <div className="about container">
                <div className="about__left row">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1s">
                        <h2 className="about__left__header">ABOUT US</h2>
                        <p className="about__left__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptas, dolores aspernatur quos blanditiis ad maiores consectetur iusto similique. Placeat unde assumenda reprehenderit, fuga iure sapiente quaerat deserunt laboriosam expedita?</p>
                    </div>
                    <div className="about__right col-lg-6 wow fadeInRight"  data-wow-duration="1s"  data-wow-delay="1s">
                        <img className="about__right__image" src="images/about.png" alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default About;