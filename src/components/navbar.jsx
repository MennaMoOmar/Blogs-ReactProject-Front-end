import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { logout, getProfile } from "./../actions";
import CreatePostBtn from "./createPostbtn";
import URI from "../apis/URI";

const Navbar = (props) => {
  /* history */
  const history = useHistory();

  const { token, getProfile, userProfile, id } = props;
  useEffect(() => {
    getProfile(token);
  }, [getProfile, token]);

  const loginLogout = () => {
    if (props.token) {
      console.log("token exist");
      history.push("/");
      props.logout();
    } else {
      console.log("no token");
      history.push("/loginpage");
    }
  };

  // onImageError
  const onImageError = (e) => {
    e.target.src = "/images/user.png";
  };

  return (
    <React.Fragment>
      <nav className="navBar navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="navBar__image"
              src="/images/logo2.png"
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
          {props.token && (
            <span>
              <CreatePostBtn></CreatePostBtn>
              <NavLink className="navBar__auth__editprofile" to="/editprofile">
                <div className="navBar__auth__editprofile__userimg">
                  {/* <img src="/images/user.png" alt="" /> */}
                  <img
                    src={URI + "/user/profileImg/" + id}
                    alt=""
                    onError={onImageError}
                  />
                </div>
                {userProfile.firstname} {userProfile.lastname}
              </NavLink>
            </span>
          )}
          <button className="navBar__button btn" onClick={loginLogout}>
            <span className="navBar__button__link nav-link">
              {props.token ? "LOGOUT" : "LOGIN"}
            </span>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

/* mapStateToProps */
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    token: state.authReducer.token,
    id: state.authReducer.userId,
    userProfile: state.getProfileReducer,
  };
};

export default connect(mapStateToProps, { logout, getProfile })(Navbar);
