const getAllUsersReducer = (state=[],action) => {
    switch(action.type){
        case 'GET_ALL_USERS':
            // return [...state, ...action.payload];
            return action.payload;

        default:
            return state;
        }
    }

export default getAllUsersReducer;