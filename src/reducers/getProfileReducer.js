const getProfileReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PROFILE":
      // return [...state, ...action.payload];
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default getProfileReducer;

// const updateObject = (oldObject, updatedProperties) => {
//     return {
//       ...oldObject,
//       ...updatedProperties,
//     };
//   };
//   const initialState = {
//     orders: [],
//     loading: false,
//     purchased: false
// };

// const getProfileStart = ( state, action ) => {
//     return updateObject( state, { loading: true } );
// };

// const getProfileSuccess = ( state, action ) => {
//     return updateObject( state, {
//         orders: action.orders,
//         loading: false
//     } );
// };

// const getProfileFail = ( state, action ) => {
//     return updateObject( state, { loading: false } );
// };

// const reducer = ( state = initialState, action ) => {
//     switch ( action.type ) {
//         case 'GET_PROFILE_START': return getProfileStart( state, action );
//         case 'GET_PROFILE_SUCCESS': return getProfileSuccess( state, action );
//         case 'GET_PROFILE_FAIL': return getProfileFail( state, action );
//         default: return state;
//     }
// };

// export default reducer;
