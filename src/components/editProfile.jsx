import React from "react";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import Card from "./card"

const EditProfile = () => {
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
          <h3 className="editprofile__header__name">menna omar</h3>
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
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Phone"
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="City"
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
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Country"
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Street"
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

export default EditProfile;
