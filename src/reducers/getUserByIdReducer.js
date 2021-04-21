const getUserByIdReducer = (state=[],action) => {
    switch(action.type){
        case 'GET_USER_BY_ID':
            // return [...state, action.payload];
            return action.payload;
        default:
            return state;
        }
    }

export default getUserByIdReducer;