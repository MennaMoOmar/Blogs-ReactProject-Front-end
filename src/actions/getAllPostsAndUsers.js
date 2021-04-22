import * as getAllPosts from './getAllPosts';
import * as getUserById from './getUserById';

export const getAllPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(getAllPosts())
    const users = getState().posts.map(p => p.userId);
    const uniqueUsers = [];
    users.forEach(usr => {
        if(!uniqueUsers.includes(usr))
            uniqueUsers.push(usr);
    });
    uniqueUsers.forEach(usr => dispatch(getUserById(usr)))
}