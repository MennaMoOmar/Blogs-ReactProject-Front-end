import React, { useState } from "react";
import { connect } from "react-redux";
import joi from "joi-browser";
import { ToastContainer } from "react-toastify";

import { addPost } from "./../actions";
import Spinner from "./spinner";

const AddPost = (props) => {
  const { token } = props;

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
    title,
    body,
    errors,
  });

  /* schema */
  const schema = {
    title: joi.string().min(5).max(50).required(),
    body: joi.string().min(5).required(),
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

  /* handleChangeTitle */
  let handleChangeTitle = (e) => {
    setpost({
      title: e.target.value,
      body: post.post,
      errors: errors,
    });
  };

  /* handleChangeBody */
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

  // submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    const errorr = validate();
    if (errorr) return;
    setLoading(true);
    await props.onAddPost(token, post.title, post.body, image);
    setLoading(false);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="addPost">
        <div className="container">
          <h2 className="blogs__header">Create Post</h2>
          {loading ? (
            <Spinner />
          ) : (
            <form className="addPost__form" onSubmit={submitHandler}>
              <div className="row">
                <div className="col-lg-12">
                  <label className="addPost__form__inputupload file-label">
                    <input
                      type="file"
                      id="file"
                      className="imageUpload"
                      name="file"
                      accept=".png, .jpg"
                      onChange={fileSelectHandler}
                    />
                    {/* <span className="addPost__image file-cta">
                    <span className="file-icon">
                    </span>
                    <span className="file-label">Add Image</span>
                  </span> */}
                  </label>
                  <input
                    className="addPost__form__input input is-link"
                    type="text"
                    placeholder="Title"
                    id="title"
                    name="title"
                    onChange={handleChangeTitle}
                    value={title}
                  />
                  {errors.title && (
                    <div className="text-danger">{errors.title}</div>
                  )}
                  <textarea
                    className="addPost__form__textarea input is-link"
                    placeholder="Description"
                    id="body"
                    name="body"
                    onChange={handleChangeBody}
                    value={body}
                    rows="3"
                  ></textarea>
                  {errors.body && (
                    <div className="text-danger">{errors.body}</div>
                  )}
                </div>
              </div>
              <button className="addPost__form__btn--save  button is-rounded">
                Add
              </button>
            </form>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

// mapStateToProps
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    token: state.authReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (token, title, body, image) =>
      dispatch(addPost(token, title, body, image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
