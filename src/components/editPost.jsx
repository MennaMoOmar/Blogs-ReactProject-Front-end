import React from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const EditPost = () => {
  return (
    <React.Fragment>
      <div className="addPost">
        <div className="container">
        <h2 className="blogs__header">Create Post</h2>
          <form className="addPost__form">
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
                />
                {/* <label className="addPost__form__label">Description</label> */}
                <textarea
                  className="addPost__form__textarea input is-link"
                  placeholder="Description"
                  id="description"
                  name="description"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <button className="addPost__form__btn--save  button is-rounded">
              Add
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditPost;
