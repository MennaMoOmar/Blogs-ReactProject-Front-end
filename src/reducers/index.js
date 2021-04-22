import { combineReducers } from "redux";

import getAllPostsReducer from "./getAllPostsReducer";
import getAllUsersReducer from "./getAllUsersReducer";
import getUserByIdReducer from "./getUserByIdReducer";

const rootReducer = combineReducers({
    posts: getAllPostsReducer,
    users: getAllUsersReducer,
    user: getUserByIdReducer
});
export default rootReducer;