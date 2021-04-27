const getPostByIdReducer = (state=[],action) => {
    switch(action.type){
        case 'GET_POST_BY_ID':
            return [...state, action.payload];
        default:
            return state;
        }
    }

export default getPostByIdReducer;