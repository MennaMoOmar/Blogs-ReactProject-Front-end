import React from "react";

import Login from "./login"
import Register from "./register"

const Home = () => {
    return ( 
        <React.Fragment>
            <div className="joinus">
                <div className="joinus__wrapper">
                <div className="container">
                    <div className="row">
                        <div className="joinus__register col-lg-6">
                            <Register></Register>
                        </div>
                        <div className="joinus__login col-lg-6">
                            <Login></Login>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Home;