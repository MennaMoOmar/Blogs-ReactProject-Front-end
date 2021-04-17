import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="footer__header">Location</h3>
              <ul className="footer__list">
                <li className="footer__list__item">Ismailia</li>
                <li className="footer__list__item">
                  ITI Suez Canal Branch
                </li>
                <li className="footer__list__item">Egypt</li>
                <li className="footer__list__item">Phone : 123-456-7890</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3 className="footer__header">Features</h3>
              <ul className="footer__list">
                <li className="footer__list__item">Post Blog</li>
                <li className="footer__list__item">View Blogs</li>
                <li className="footer__list__item">Edit Profile</li>
                <li className="footer__list__item">Comments</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3 className="footer__header">Phone</h3>
              <p className="footer__header__phone">(012)118-833-46</p>
            </div>
            <div className="col-lg-3">
              <h3 className="footer__header">Social Media</h3>
              <div className="footer__icons">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="footer__copyright col-lg-12">
            <p>© copyright 2021. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
