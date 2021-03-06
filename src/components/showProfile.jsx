import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserById, getAllPostsByUserId } from "./../actions";
import URI from "../apis/URI";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SendIcon from "@material-ui/icons/Send";

const ShowProfile = (props) => {
  const id = props.match.params.id;
  const { getUserById, getAllPostsByUserId, user, posts } = props;

  useEffect(() => {
    getUserById(id);
    getAllPostsByUserId(id);
  }, [getUserById, getAllPostsByUserId, id]);

  // onImageError
  const onImageError = (e) => {
    e.target.src = "/images/user.png";
  };

  return (
    <React.Fragment>
      <div className="editprofile container">
        <div className="editprofile__header">
          <div className="editprofile__header__image">
            <img
              className="editprofile__header__image__img"
              src={URI + "/user/profileImg/" + id}
              alt=""
              onError={onImageError}
            />
          </div>
          <h3 className="editprofile__header__name">
            {user.firstname} {user.lastname}
          </h3>
        </div>
        <div className="editprofile__edit">
          <div className="editprofile__frmwrapper">
            <form className="editprofile__edit__form">
              <div className="row">
                <div className="col-lg-6">
                  {/* <span>First Name</span>
                  <span>{user.firstname}</span> */}
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="First Name"
                    value={user.firstname}
                    disabled
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Phone"
                    value={user.phone}
                    disabled
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="City"
                    value={user.city}
                    disabled
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Last Name"
                    value={user.lastname}
                    disabled
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Country"
                    value={user.country}
                    disabled
                  />
                  <input
                    className="editprofile__edit__form__input input is-link"
                    type="text"
                    placeholder="Street"
                    value={user.street}
                    disabled
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="editprofile__posts">
          {posts.length === 0 ? (
            <h2 className="editprofile__posts__nopost">No Posts</h2>
          ) : (
            posts.map((post) => {
              return (
                <div className="card" key={post._id}>
                  <div className="card__image card-image">
                    <img src={URI + "/post/postImg/" + post._id} alt="" />
                  </div>
                  <div className="card__content card-content">
                    <div className="card__content__media media">
                      <div className="media-left">
                        <figure className="image is-48x48">
                          <img
                            className="editprofile__header__image__img"
                            src={URI + "/user/profileImg/" + id}
                            alt=""
                            onError={onImageError}
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
            })
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
    user: state.user.find((u) => u._id === props.match.params.id),
    posts: state.posts.filter((p) => p.userId === props.match.params.id),
  };
};

export default connect(mapStateToProps, { getUserById, getAllPostsByUserId })(
  ShowProfile
);
