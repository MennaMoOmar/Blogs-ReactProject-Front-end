import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllPosts, getProfile, getAllPostsLoginUser } from "./../actions";
import UserName from "./userName";
import URI from "../apis/URI";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SendIcon from "@material-ui/icons/Send";

const Card = (props) => {
  const { getAllPosts, getProfile, getAllPostsLoginUser, token } = props;

  useEffect(() => {
    getAllPosts();
    getProfile(token);
    getAllPostsLoginUser(token);
  }, [getAllPosts, getProfile, getAllPostsLoginUser, token]);

  return (
    <React.Fragment>
      {props.posts.map((post) => {
        return (
          <div className="card" key={post._id}>
            <div className="card__image card-image">
              <img src={URI + "/post/postImg/" + post._id} alt="" />
            </div>
            <div className="card__content card-content">
              <div className="card__content__media media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={URI + "/user/profileImg/" + post.userId} alt="" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="card__content__media__title title is-4">
                    {post.title}
                  </p>
                  <div className="card__content__media__name subtitle is-6">
                    <UserName userId={post.userId}></UserName>
                  </div>
                </div>
              </div>
              <div className="card__content__describtion content">
                <p className="card__content__describtion__para">{post.body}</p>
              </div>
            </div>
            <div className="card__social card-content">
              <FavoriteBorderIcon className="card__social__like"></FavoriteBorderIcon>
              <input
                className="card__social__comment input is-rounded"
                type="text"
                placeholder="Add Comment"
              ></input>
              <SendIcon className="card__social__send"></SendIcon>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

// mapStateToProps
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.posts,
    token: state.authReducer.token,
  };
};

export default connect(mapStateToProps, {
  getAllPosts,
  getProfile,
  getAllPostsLoginUser,
})(Card);
