import { combineReducers } from "redux";

import getAllPostsReducer from "./getAllPostsReducer";
import getAllUsersReducer from "./getAllUsersReducer";
import getUserByIdReducer from "./getUserByIdReducer";
import authReducer from "./authReducer";
import {refBtnLogin, refBtnLogout}  from "./refButtonsReducer";

const rootReducer = combineReducers({
    posts: getAllPostsReducer,
    users: getAllUsersReducer,
    user: getUserByIdReducer,
    authReducer: authReducer,
    refBtnLogin: refBtnLogin,
    refBtnLogout: refBtnLogout,
});
export default rootReducer;