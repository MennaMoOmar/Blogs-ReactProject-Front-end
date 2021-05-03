import React from "react";

const ContactUs = () => {
    return ( 
        <React.Fragment>
            <div className="contact">
                <div className="wrapper">
                    <div className="container  wow zoomIn">
                        <h2 className="contact__header">CONTACT US</h2>
                        <div className="contact__frmwrapper">
                            <form className="contact__form" action="">
                                <input className="contact__form__input input is-link" type="text" placeholder="Email"/>
                                <textarea className="contact__textarea textarea is-link" type="text" placeholder="Leave your message here"></textarea>
                                <button className="contact__form__btn blogs__morebtn button is-rounded">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ContactUs;