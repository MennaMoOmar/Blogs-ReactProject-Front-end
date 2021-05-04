import React from "react";

import Card from "./card"

const Blogs = () => {

    return ( 
        <React.Fragment>
            <div className="blogs">
                <div className="container">
                    <h2 className="blogs__header">Blogs</h2>
                    <Card></Card>
                    {/* <button className="blogs__morebtn button is-rounded">See more...</button> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Blogs;