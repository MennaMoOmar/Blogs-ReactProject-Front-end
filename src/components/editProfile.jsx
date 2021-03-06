import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import joi from "joi-browser";
import { useHistory } from "react-router";
import { ToastContainer } from "react-toastify";
import Spinner from "./spinner";

import {
  getProfile,
  editProfile,
  getAllPostsLoginUser,
  getAllPosts,
  deletePost,
} from "./../actions";
import URI from "../apis/URI";

const EditProfile = (props) => {
  /* history */
  const history = useHistory();

  const { token, userProfile, getAllPostsLoginUser } = props;

  // console.log(token)

  useEffect(() => {
    // getAllPosts();
    getProfile(token);
    getAllPostsLoginUser(token);
  });

  /* hooks */
  const [loading, setLoading] = useState(false);
  const [firstname] = useState();
  const [lastname] = useState();
  const [phone] = useState();
  const [country] = useState();
  const [city] = useState();
  const [street] = useState();
  let [image, setImage] = useState(null);
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
    firstname: joi
      .string()
      .alphanum()
      .min(3)
      .max(10)
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.min":
              return { message: "First Name must be more than 3 characters" };
            case "string.max":
              return { message: "First Name must be less than 10 characters" };
            case "any.required":
              return { message: "First Name is Required" };
            default:
              return { message: "Some thing went wrong" };
          }
        });
      }),
    lastname: joi
      .string()
      .alphanum()
      .min(3)
      .max(10)
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.min":
              return { message: "Last Name must be more than 3 characters" };
            case "string.max":
              return { message: "Last Name must be less than 10 characters" };
            case "any.required":
              return { message: "Last Name is Required" };
            default:
              return { message: "Some thing went wrong" };
          }
        });
      }),
    phone: joi
      .number()
      .required()
      .min(6)
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "number.min":
              return { message: "Phone must be more than 6 characters" };
            case "number":
              return { message: "Phone must be Numbers Only" };
            case "any.required":
              return { message: "Phone is Required" };
            default:
              return { message: "Some thing went wrong" };
          }
        });
      }),
    country: joi
      .string()
      .min(3)
      .max(10)
      .required()
      .regex(/^[a-zA-Z\s]*$/)
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.min":
              return { message: "Country must be more than 3 characters" };
            case "string.max":
              return { message: "Country must be less than 10 characters" };
            case "string":
              return { message: "Country must be Character Only" };
            case "any.required":
              return { message: "Country is Required" };
            default:
              return { message: "Some thing went wrong" };
          }
        });
      }),
    city: joi
      .string()
      .min(3)
      .max(10)
      .required()
      .regex(/^[a-zA-Z\s]*$/)
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.min":
              return { message: "City must be more than 3 characters" };
            case "string.max":
              return { message: "City must be less than 10 characters" };
            case "string":
              return { message: "City must be Character Only" };
            case "any.required":
              return { message: "City is Required" };
            default:
              return { message: "Some thing went wrong" };
          }
        });
      }),
    street: joi
      .string()
      .min(3)
      .max(10)
      .required()
      .regex(/^[a-zA-Z\s]*$/)
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.min":
              return { message: "Street must be more than 3 characters" };
            case "string.max":
              return { message: "Street must be less than 10 characters" };
            case "string":
              return { message: "Street must be Character Only" };
            case "any.required":
              return { message: "Street is Required" };
            default:
              return { message: "Some thing went wrong" };
          }
        });
      }),
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

  // handlerDeletePost
  const handlerDeletePost = async (postId) => {
    console.log(postId);
    setLoading(true);
    await props.onDeletePost(postId);
    setLoading(false);
  };

  // fileSelectHandler
  const fileSelectHandler = async (e) => {
    await setImage(e.target.files[0]);
  };

  // submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    const errorr = validate();
    if (errorr) return;
    setLoading(true);
    await props.onEditProfile(
      token,
      user.firstname,
      user.lastname,
      user.phone,
      user.country,
      user.city,
      user.street,
      image
    );
    setLoading(false);
  };

  const HandlerEditPost = (id) => {
    // console.log(id);
    history.push(`/editpost/${id}`);
  };

  // onImageError
  const onImageError = (e) => {
    e.target.src = "/images/user.png";
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="editprofile container">
        <div className="editprofile__header">
          <div className="editprofile__header__image">
            <img
              className="editprofile__header__image__img"
              src={URI + "/user/profileImg/" + userProfile._id}
              alt=""
              onError={onImageError}
            />
            <label htmlFor="file">
              <i className="editprofile__header__camera fas fa-camera-retro"></i>
            </label>
            <input
              id="file"
              className="imageUpload"
              type="file"
              name="file"
              accept=".png, .jpg"
              onChange={fileSelectHandler}
            />
          </div>
          <h3 className="editprofile__header__name">
            {user.firstname} {user.lastname}
          </h3>
        </div>
        <div className="editprofile__edit">
          <div className="editprofile__frmwrapper">
            {loading ? (
              <Spinner />
            ) : (
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
            )}
          </div>
        </div>
        <div className="editprofile__posts">
          {/* {loading ? (
              <Spinner />
            ) : ( */}

          {props.userPosts.length === 0 ? (
            <h2 className="editprofile__posts__nopost">No Posts</h2>
          ) : (
            props.userPosts.map((post) => {
              return (
                <div className="card" key={post._id}>
                  <button
                    className="delete card__deletebtn is-large"
                    onClick={() => {
                      handlerDeletePost(post._id);
                    }}
                  ></button>
                  <div className="card__image card-image">
                    <img src={URI + "/post/postImg/" + post._id} alt="" />
                  </div>
                  <div className="card__content card-content">
                    <div className="card__content__media media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img
                            src={URI + "/user/profileImg/" + userProfile._id}
                            alt=""
                          />
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
                      className="button is-success is-rounded card__social__edit"
                      onClick={() => HandlerEditPost(post._id)}
                    >
                      <i className="far fa-edit"></i> Edit
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

// mapStateToProps
const mapStateToProps = (state) => {
  // console.log(state.authReducer.loading);
  return {
    loading: state.authReducer.loading,
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
    getAllPostsLoginUser: (token) => dispatch(getAllPostsLoginUser(token)),
    onDeletePost: (postId) => dispatch(deletePost(postId)),
    onEditProfile: (
      token,
      firstname,
      lastname,
      phone,
      countrty,
      city,
      street,
      image
    ) =>
      dispatch(
        editProfile(
          token,
          firstname,
          lastname,
          phone,
          countrty,
          city,
          street,
          image
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
