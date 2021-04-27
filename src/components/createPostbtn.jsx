import React from "react";
import { useHistory } from "react-router";

const CreatePostBtn = () => {
  /* history */
  const history = useHistory();

  /* submit login */
  const addPostHandler = () => {
    history.push("/addpost");
  };

  return (
    <React.Fragment>
      <div className="addPostBtn" onClick={addPostHandler}>
        <div className="addPostBtn__content">
          <i className="fas fa-feather-alt"></i>
          <span> Create Post</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreatePostBtn;
