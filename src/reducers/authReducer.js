const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  localStorage.setItem('token',action.idToken)
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false,
  });
};

const authLogout = (state, action) => {
  localStorage.removeItem('token');
  return updateObject(state, {
    token: null,
    userId: null,
    error: null,
    loading: false,
  });
  // return updateObject(state,
  //   {
  //     token: null,
  //     userId: null
  //   });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return authStart(state, action);
    case "AUTH_SUCCESS":
      return authSuccess(state, action);
    case "AUTH_FAIL":
      return authFail(state, action);
    case "AUTH_LOGOUT":
      return authLogout(state, action);
    default:
      return state;
  }
};

export default authReducer;
