import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { getUserById } from "../actions";

const UserName = (props) => {
  /* history */
  const history = useHistory();

  const { getUserById, userId, user } = props;

  useEffect(() => {
    getUserById(userId);
  }, [getUserById, userId]);

  const handleShowProfile = () => {
    history.push(`/showprofile/${userId}`);
  };

  if (!user) return "Loading...";

  return (
    <p onClick={(userId) => handleShowProfile()}>
      {props.user.firstname} {props.user.lastname}
    </p>
  );
};

const mapStateToProps = (state, props) => {
  // console.log(state, props)
  return { user: state.user.find((u) => u._id === props.userId) };
};

export default connect(mapStateToProps, { getUserById })(UserName);
