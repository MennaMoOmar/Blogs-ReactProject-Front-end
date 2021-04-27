import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import joi from "joi-browser";
import { useHistory } from "react-router";

import {
  getProfile,
  editProfile,
  getAllPostsLoginUser,
  getAllPosts,
  deletePost
} from "./../actions";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const EditProfile = (props) => {
  /* history */
  const history = useHistory();

  const { token, userProfile, getAllPostsLoginUser } = props;

  useEffect(() => {
    getAllPosts();
    getProfile(token);
    getAllPostsLoginUser(token);
  }, [token, getAllPostsLoginUser]);

  /* hooks */
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
    street,
  });
  const [user, setuser] = useState({
    firstname: userProfile.firstname,
    lastname: userProfile.lastname,
    phone: userProfile.phone,
    country: userProfile.country,
    city: userProfile.city,
    street: userProfile.street,
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
  let handleChangeFirstname = (e, value) => {
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

  const handlerDeletePost=(postId)=>{
    console.log(postId)
    props.onDeletePost(postId)
  }

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

  const HandlerEditPost = (id) => {
    // console.log(id);
    history.push(`/editpost/${id}`);
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
            {user.firstname} {user.lastname}
          </h3>
        </div>
        <div className="editprofile__edit">
          <div className="editprofile__frmwrapper">
            <form
              className="editprofile__edit__form"
              action=""
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="col-lg-6">
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChangeFirstname}
                    // value={!firstname?userProfile.firstname:firstname}
                    value={user.firstname}
                    id="firstname"
                    name="firstname"
                  />
                  {errors.firstname && (
                    <div className="text-danger">{errors.firstname}</div>
                  )}
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Phone"
                    onChange={handleChangePhone}
                    value={user.phone}
                    id="phone"
                    name="phone"
                  />
                  {errors.phone && (
                    <div className="text-danger">{errors.phone}</div>
                  )}
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="City"
                    onChange={handleChangeCity}
                    value={user.city}
                    id="city"
                    name="city"
                  />
                  {errors.city && (
                    <div className="text-danger">{errors.city}</div>
                  )}
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
                    value={user.lastname}
                    id="lastname"
                    name="lastname"
                  />
                  {errors.lastname && (
                    <div className="text-danger">{errors.lastname}</div>
                  )}
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Country"
                    onChange={handleChangeCountry}
                    value={user.country}
                    id="country"
                    name="country"
                  />
                  {errors.country && (
                    <div className="text-danger">{errors.country}</div>
                  )}
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Street"
                    onChange={handleChangeStreet}
                    value={user.street}
                    id="street"
                    name="street"
                  />
                  {errors.street && (
                    <div className="text-danger">{errors.street}</div>
                  )}
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
          {props.userPosts.length === 0 ? (
            <h2 className="editprofile__posts__nopost">No Posts</h2>
          ) : (
            props.userPosts.map((post) => {
              return (
                <div className="card" key={post._id}>
                  <button class="delete card__deletebtn is-large" onClick={()=>{handlerDeletePost(post._id)}}></button>
                  <div className="card__image card-image">
                    <img src="./logo512.png" alt="" />
                  </div>
                  <div className="card__content card-content">
                    <div className="card__content__media media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img src="./images/user.png" alt="" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="card__content__media__title title is-4">
                          {post.title}
                        </p>
                        <div className="card__content__media__name subtitle is-6">
                          <p>
                            {user.firstname} {user.lastname}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card__content__describtion content">
                      <p className="card__content__describtion__para">
                        {post.body}
                      </p>
                    </div>
                  </div>
                  <div className="card__social card-content">
                    <button
                      class="button is-success is-rounded card__social__edit"
                      onClick={()=>HandlerEditPost(post._id)}
                    >
                      <i class="far fa-edit"></i> Edit
                    </button>
                  </div>
                </div>
              );
            })
          )}
          {/* <Card></Card> */}
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
    userPosts: state.getAllPostsLoginUserReducer,
    // user: state.user.find((u) => u._id === state.authReducer.userId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts,
    getProfile,
    getAllPostsLoginUser,
    onDeletePost: (postId)=>dispatch(deletePost(postId)),
    onEditProfile: (
      token,
      firstname,
      lastname,
      phone,
      countrty,
      city,
      street
    ) =>
      dispatch(
        editProfile(token, firstname, lastname, phone, countrty, city, street)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
