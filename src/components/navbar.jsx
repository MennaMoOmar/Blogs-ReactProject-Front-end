import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router";

// import { refBtnLogin, refBtnLogout } from "./../actions";

const Navbar = (props) => {
  /* history */
  const history = useHistory();
  console.log(props);

  // const {refBtnLogin, refBtnLogout} = props;

  // const loginbtn = useRef(null);
  // const logoutbtn = useRef(null);

  // useEffect(() => {
  //   if (loginbtn.current) {
  //     // loginbtn.current.style.display="none"
  //     refBtnLogin(loginbtn.current)
  //   }
  //   if(logoutbtn.current){
  //     refBtnLogout(logoutbtn.current)
  //   }
  // }, [refBtnLogout,refBtnLogin])

  const loginLogout = () => {
    if (props.token) {
      console.log("token exist");
      history.push('/')
    } else {
      console.log("no token");
      history.push('/loginpage')
    }
  };

  return (
    <React.Fragment>
      <nav className="navBar navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="navBar__image"
              src="./images/logo2.png"
              alt="logo"
            ></img>
            <span className="navBar__span">Blogs</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navBar__middle collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flexDirection: "column" }}
          >
            <ul className="navBar__list navbar-nav me-auto mb-2 mb-lg-0">
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link navBar__list__item__link--active nav-link"
                  aria-current="page"
                  to="/home"
                >
                  HOME
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/blogs"
                >
                  BLOGS
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/contactUs"
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="navBar__button btn" onClick={loginLogout}>
            <span className="navBar__button__link nav-link">
              {props.token ? "LOGOUT" : "LOGIN"}
            </span>

            {/* <NavLink className="navBar__button__link nav-link" to="/loginpage">
              {props.token? 'LOGOUT' : 'LOGIN'}
            </NavLink> */}
          </button>
          {/* <div className="navBar__auth">
            <span><NavLink className="navBar__auth__editprofile" to="/editprofile"><i className="far fa-user"></i> Profile</NavLink></span>
            <button className="navBar__button btn">
              <NavLink className="navBar__button__link nav-link" to="/">
                LOG OUT
              </NavLink>
            </button>
          </div> */}
        </div>
      </nav>
    </React.Fragment>
  );
};

/* mapStateToProps */
const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.authReducer.token,
  };
  // return {
  //   loginbtn: state.refBtnLogin,
  //   logoutbtn: state.refBtnLogout,
  // };
};

export default connect(mapStateToProps)(Navbar);
