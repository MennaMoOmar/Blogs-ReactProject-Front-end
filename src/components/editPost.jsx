import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import joi from "joi-browser";
import { ToastContainer } from "react-toastify";
// import { useHistory } from "react-router";

import { getPostById, editPost } from "./../actions";
import URI from "../apis/URI";
import Spinner from "./spinner";

const EditPost = (props) => {
  /* history */
  // const history = useHistory();

  const postId = props.match.params.id;
  const { getPostById, userPost, token } = props;

  useEffect(() => {
    getPostById(postId);
  }, [getPostById, postId]);

  /* hooks */
  const [loading, setLoading] = useState(false);
  const [title] = useState();
  const [body] = useState();
  let [image, setImage] = useState(null);
  const [errors, setErrors] = useState({
    title,
    body,
  });
  const [post, setpost] = useState({
    title: userPost[0].title,
    body: userPost[0].body,
    errors,
  });

  /* schema */
  const schema = {
    title: joi
      .string()
      .min(5)
      .max(20)
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.min":
              return { message: "Title must be more than 5 characters" };
            case "string.max":
              return { message: "Title must be less than 10 characters" };
            case "any.required":
              return { message: "Title is Required" };
            default:
              return { message: "Some thing went wrong" };
          }
        });
      }),
    body: joi
      .string()
      .min(5)
      .max(200)
      .required()
      .error((errors) => {
        return errors.map((error) => {
          switch (error.type) {
            case "string.min":
              return { message: "Body must be more than 5 characters" };
            case "any.required":
              return { message: "Body is Required" };
            default:
              return { message: "Some thing went wrong" };
          }
        });
      }),
  };

  /* validate */
  const validate = () => {
    const errors = {};
    const pst = { ...post };
    const pst2 = {
      title: pst.title,
      body: pst.body,
      errors: pst.errors,
    };
    delete pst2.errors;
    const res = joi.validate(pst2, schema, { abortEarly: false });
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
  let handleChangeTitle = (e, value) => {
    setpost({
      title: e.target.value,
      body: post.body,
      errors: errors,
    });
  };
  /* handleChangeLastname */
  let handleChangeBody = (e) => {
    setpost({
      title: post.title,
      body: e.target.value,
      errors: errors,
    });
  };

  // fileSelectHandler
  const fileSelectHandler = async (e) => {
    setImage(e.target.files[0]);
  };

  //submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    const errorr = validate();
    if (errorr) return;
    setLoading(true);
    await props.onEditPost(token, postId, post.title, post.body, image);
    setLoading(false);
    // history.push("/editprofile");
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="addPost">
        <div className="container">
          <h2 className="blogs__header">Edit Post</h2>
          {loading ? (
            <Spinner />
          ) : (
            <form className="addPost__form" onSubmit={submitHandler}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="editprofile__header__image">
                    <img
                      className="editprofile__header__image__img--editPost"
                      src={URI + "/post/postImg/" + postId}
                      alt=""
                    />
                    <label htmlFor="file">
                      <i className="editprofile__header__camera--editPost fas fa-camera-retro"></i>
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
                  <input
                    className="addPost__form__input input is-link"
                    type="text"
                    placeholder="Title"
                    id="title"
                    name="title"
                    onChange={handleChangeTitle}
                    value={post.title}
                  />
                  {errors.title && (
                    <div className="text-danger">{errors.title}</div>
                  )}
                  <textarea
                    className="addPost__form__textarea input is-link"
                    placeholder="body"
                    id="body"
                    name="body"
                    rows="3"
                    onChange={handleChangeBody}
                    value={post.body}
                  ></textarea>
                  {errors.body && (
                    <div className="text-danger">{errors.body}</div>
                  )}
                </div>
              </div>
              <button className="addPost__form__btn--save  button is-rounded">
                Save Changes
              </button>
            </form>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

// mapStateToProps
const mapStateToProps = (state, props) => {
  // console.log(state)
  // console.log(props)
  return {
    token: state.authReducer.token,
    userPost: state.posts.filter((p) => p._id === props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostById,
    onEditPost: (token, postId, title, body, image) =>
      dispatch(editPost(token, postId, title, body, image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
