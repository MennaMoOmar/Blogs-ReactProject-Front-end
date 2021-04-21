import React, { useEffect } from "react";
import { connect } from "react-redux";

// import { getAllPosts } from "./../actions";
// import getAllPostsAndUsers from "./../actions/getAllPostsAndUsers";
import getAllUsers from "./../actions/getAllUsers";
import getAllPosts from "./../actions/getAllPosts";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SendIcon from "@material-ui/icons/Send";

const Card = (props) => {
  // console.log(props.users);
  // const user = props.users.find((u) => u._id === "606f3dc414ea1627f80d0af2")
  // console.log(user.firstname)

  useEffect(() => {
    props.getAllPosts();
    props.getAllUsers();
  }, []);

  return (
    <React.Fragment>
      {props.posts.map((post) => {
        return (
          <div className="card" key={post._id}>
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
                  <p className="card__content__media__name subtitle is-6">
                    {post.userId}
                    {/* {
                      console.log(props.users.find((u) => u._id === post.userId))
                    } */}
                  </p>
                </div>
              </div>
              <div className="card__content__describtion content">
                <p className="card__content__describtion__para">
                  {post.body}
                </p>
              </div>
            </div>
            <div className="card__social card-content">
              {/* <FavoriteIcon className="card__social__like"></FavoriteIcon> */}
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
  console.log(state);
  return {
    posts: state.posts,
    users: state.users
  };
};

export default connect(mapStateToProps, { getAllPosts, getAllUsers })(Card);
