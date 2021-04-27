import { combineReducers } from "redux";

import getAllPostsReducer from "./getAllPostsReducer";
import getAllUsersReducer from "./getAllUsersReducer";
import getUserByIdReducer from "./getUserByIdReducer";
import authReducer from "./authReducer";
import getProfileReducer from "./getProfileReducer";
import registerReducer from "./registerReducer";
import editProfileReducer from "./editProfileReducer";
import getAllPostsLoginUserReducer from "./getAllPostsLoginUserReducer";
import getAllPostsByUserIdReducer from "./getAllPostsByUserIdReducer";
import getPostByIdReducer from "./getPostByIdReducer";
import editPostByIdReducer from "./editPostByIdReducer";

const rootReducer = combineReducers({
    posts: getAllPostsReducer,
    users: getAllUsersReducer,
    user: getUserByIdReducer,
    authReducer: authReducer,
    getProfileReducer: getProfileReducer,
    registerReducer: registerReducer,
    editProfileReducer: editProfileReducer,
    getAllPostsLoginUserReducer: getAllPostsLoginUserReducer,
    getAllPostsByUserIdReducer: getAllPostsByUserIdReducer,
    getPostByIdReducer: getPostByIdReducer,
    editPostByIdReducer: editPostByIdReducer
});
export default rootReducer;