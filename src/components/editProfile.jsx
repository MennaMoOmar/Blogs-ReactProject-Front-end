import React, { useState ,useEffect } from "react";
import { connect } from "react-redux";
import joi from "joi-browser";

import { getUserById, getProfile, editProfile } from "./../actions";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import Card from "./card";

const EditProfile = (props) => {
  const { getUserById, id, token, userProfile } = props;

  // useEffect(() => {
  //   getUserById(id);
  // }, [getUserById, id]);

  useEffect(() => {
    getProfile(token);
  }, [token]);

  /* hooks */
  // const [firstname] = useState(userProfile.firstname);
  // const [lastname] = useState(userProfile.lastname);
  // const [phone] = useState(userProfile.phone);
  // const [country] = useState(userProfile.country);
  // const [city] = useState(userProfile.city);
  // const [street] = useState(userProfile.street);

  const [firstname] = useState();
  const [lastname] = useState();
  const [phone] = useState();
  const [country] = useState();
  const [city] = useState();
  const [street] = useState();
  const [errors, setErrors] = useState({
    firstname,
    lastname,
    phone,
    country,
    city,
    street
  });
  const [user, setuser] = useState({
    firstname,
    lastname,
    phone,
    country,
    city,
    street,
    errors,
  });

  /* schema */
  const schema = {
    firstname: joi.string().alphanum().min(3).max(10).required(),
    lastname: joi.string().alphanum().min(3).max(10).required(),
    phone: joi.number().required().min(6),
    country: joi.string().alphanum().min(3).max(10).required(),
    city: joi.string().alphanum().min(3).max(10).required(),
    street: joi.string().alphanum().min(3).max(10).required(),
  };

  /* validate */
  const validate = () => {
    const errors = {};
    const urs = { ...user };
    const urs2 = {
      firstname: urs.firstname,
      lastname: urs.lastname,
      phone: urs.phone,
      country: urs.country,
      city: urs.city,
      street: urs.street,
      errors: urs.errors,
    };
    delete urs2.errors;
    const res = joi.validate(urs2, schema, { abortEarly: false });
    if (res.error === null) {
      setErrors({});
      return null;
    }
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    setErrors(errors);
    return errors;
  };

  /* handleChangeFirstname */
  let handleChangeFirstname = (e) => {
    setuser({
      firstname: e.target.value,
      lastname: user.lastname,
      phone: user.phone,
      country: user.country,
      city: user.city,
      street: user.street,
      errors: errors,
    });
  };
  /* handleChangeLastname */
  let handleChangeLastname = (e) => {
    setuser({
      firstname: user.firstname,
      lastname: e.target.value,
      phone: user.phone,
      country: user.country,
      city: user.city,
      street: user.street,
      errors: errors,
    });
  };
  /* handleChangePhone */
  let handleChangePhone = (e) => {
    setuser({
      firstname: user.firstname,
      lastname: user.lastname,
      phone: e.target.value,
      country: user.country,
      city: user.city,
      street: user.street,
      errors: errors,
    });
  };
    /* handleChangeCountry */
    let handleChangeCountry = (e) => {
      setuser({
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        country: e.target.value,
        city: user.city,
        street: user.street,
        errors: errors,
      });
    };
      /* handleChangeCity */
  let handleChangeCity = (e) => {
    setuser({
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      country: user.country,
      city: e.target.value,
      street: user.street,
      errors: errors,
    });
  };
    /* handleChangePhone */
    let handleChangeStreet = (e) => {
      setuser({
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        country: user.country,
        city: user.city,
        street: e.target.value,
        errors: errors,
      });
    };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onEditProfile(
      token,
      user.firstname,
      user.lastname,
      user.phone,
      user.country,
      user.city,
      user.street
    );
    const errorr = validate();
    if (errorr) return;
    // history.push("/blogs");
  };

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
          <h3 className="editprofile__header__name">
            {firstname} {lastname}
          </h3>
        </div>
        <div className="editprofile__edit">
          <div className="editprofile__frmwrapper">
            <form className="editprofile__edit__form" action="" onSubmit={submitHandler}>
              <div className="row">
                <div className="col-lg-6">
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChangeFirstname}
                    value={firstname}
                    id="firstname"
                    name="firstname"
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Phone"
                    onChange={handleChangePhone}
                    value={phone}
                    id="phone"
                    name="phone"
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="City"
                    onChange={handleChangeCity}
                    value={city}
                    id="city"
                    name="city"
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
                    onChange={handleChangeLastname}
                    value={lastname}
                    id="lastname"
                    name="lastname"
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Country"
                    onChange={handleChangeCountry}
                    value={country}
                    id="country"
                    name="country"
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Street"
                    onChange={handleChangeStreet}
                    value={street}
                    id="street"
                    name="street"
                  />
                </div>
              </div>
              <button className="editprofile__edit__form__btn--save  button is-rounded">
                Save
              </button>
              {/* <button className="editprofile__edit__form__btn--cancel button is-rounded">
                Cancel
              </button> */}
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
    userProfile: state.getProfileReducer,
    // user: state.user.find((u) => u._id === state.authReducer.userId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserById,
    getProfile,
    onEditProfile: (token, firstname, lastname, phone, countrty, city, street) =>
      dispatch(editProfile(token, firstname, lastname, phone, countrty, city, street)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(
  EditProfile
);
