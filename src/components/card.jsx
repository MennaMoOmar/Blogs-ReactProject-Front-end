import React from "react";

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
                <img src="./logo512.png" alt="" />
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
      </div>
    </React.Fragment>
  );
};

export default Card;
