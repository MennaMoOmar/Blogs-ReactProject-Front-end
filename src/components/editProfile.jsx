import React, {useEffect} from "react";
import { connect } from "react-redux";

import { getUserById, getProfile } from "./../actions"

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import Card from "./card"

const EditProfile = (props) => {
  console.log(props.user)

  const { getUserById, id, token, user } = props;

  useEffect(() => {
    getUserById(id);
  }, [getUserById, id]);

  useEffect(() => {
    getProfile(token)
  }, [getProfile, token]);

  return (
    <React.Fragment>
      <div className="editprofile container">
        <div className="editprofile__header">
          <div className="editprofile__header__image">
            <img
              className="editprofile__header__image__img"
              src="./images/user.png"
              alt=""
            />
          </div>
          <h3 className="editprofile__header__name">{user.firstname} {user.lastname}</h3>
        </div>
        <div className="editprofile__edit">
          <div className="editprofile__frmwrapper">
            <form className="editprofile__edit__form" action="">
              <div className="row">
                <div className="col-lg-6">
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="First Name"
                    value={user.firstname}
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Phone"
                    value={user.phone}
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="City"
                    value={user.city}
                  />
                  <label className="editprofile__header__inputupload file-label">
                    <input className="file-input" type="file" name="image" />
                    <span className="register__form__image file-cta">
                      <span className="file-icon">
                        <PhotoCameraIcon></PhotoCameraIcon>
                      </span>
                      <span className="file-label">Change Image</span>
                    </span>
                  </label>
                </div>
                <div className="col-lg-6">
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Last Name"
                    value={user.lastname}
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Country"
                    value={user.country}
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Street"
                    value={user.street}
                  />
                </div>
              </div>
              <button className="editprofile__edit__form__btn--save  button is-rounded">
                Save
              </button>
              <button className="editprofile__edit__form__btn--cancel button is-rounded">
                Cancel
              </button>
            </form>
          </div>
        </div>
        <div className="editprofile__posts">
            <Card></Card>
        </div>
      </div>
    </React.Fragment>
  );
};

// mapStateToProps
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    id: state.authReducer.userId,
    token: state.authReducer.token,
    user: state.user.find((u) => u._id === state.authReducer.userId)
    // user: state.user.find((u) => u.token === state.authReducer.token)

  };
};

export default connect(mapStateToProps, {getUserById, getProfile})(EditProfile);
