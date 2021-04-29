import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import joi from "joi-browser";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import { getPostById, editPost } from "./../actions";

const EditPost = (props) => {

  const postId = props.match.params.id;
  const { getPostById, userPost, token } = props;

  useEffect(() => {
    getPostById(postId);
  }, [getPostById, postId]);
  
  /* hooks */
  const [title] = useState();
  const [body] = useState();
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
    title: joi.string().min(5).max(20).required(),
    body: joi.string().min(5).max(200).required(),
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

  const submitHandler = (e) => {
    console.log(postId)
    e.preventDefault();
    props.onEditPost(
      token,
      postId,
      post.title,
      post.body,
    );
    const errorr = validate();
    if (errorr) return;
    // history.push("/blogs");
  };

  return (
    <React.Fragment>
      <div className="addPost">
        <div className="container">
          <h2 className="blogs__header">Edit Post</h2>
          <form className="addPost__form" onSubmit={submitHandler}>
            <div className="row">
              <div className="col-lg-12">
                <label className="addPost__form__inputupload file-label">
                  <input className="file-input" type="file" name="image" />
                  <span className="addPost__image file-cta">
                    <span className="file-icon">
                      <PhotoCameraIcon></PhotoCameraIcon>
                    </span>
                    <span className="file-label">Add Image</span>
                  </span>
                </label>
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
                {/* <label className="addPost__form__label">body</label> */}
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
    onEditPost: (
      token,
      postId,
      title,
      body
    ) =>
      dispatch(
        editPost(token, postId, title, body)
      ),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditPost);
