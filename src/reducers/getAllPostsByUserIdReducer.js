const geAllPostsByUserIdReducer = (state=[],action) => {
    switch(action.type){
        case 'GET_POSTS_USER_ID':
            return [...state, action.payload];
        default:
            return state;
        }
    }

export default geAllPostsByUserIdReducer;