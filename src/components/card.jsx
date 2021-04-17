import React from "react";

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';

const Card = () => {
  return (
    <React.Fragment>
      <div className="card">
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
              <p className="card__content__media__title title is-4">title</p>
              <p className="card__content__media__name subtitle is-6">
                menna omar
              </p>
            </div>
          </div>
          <div className="card__content__describtion content">
            <p className="card__content__describtion__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              voluptates aliquid, hic nisi incidunt dolores dignissimos expedita
              assumenda quo.
            </p>
          </div>
        </div>
        <div className="card__social card-content">
            {/* <FavoriteIcon className="card__social__like"></FavoriteIcon> */}
            <FavoriteBorderIcon className="card__social__like"></FavoriteBorderIcon>
            <input className="card__social__comment input is-rounded" type="text" placeholder="Add Comment"></input>
            <SendIcon className="card__social__send"></SendIcon>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
