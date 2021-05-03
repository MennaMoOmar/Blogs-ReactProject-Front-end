import * as getPosts from './getAllPosts';
import * as getUser from './getUserById';

export const getAllPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(getPosts())
    const users = getState().posts.map(p => p.userId);
    const uniqueUsers = [];
    users.forEach(usr => {
        if(!uniqueUsers.includes(usr))
            uniqueUsers.push(usr);
    });
    uniqueUsers.forEach(usr => dispatch(getUser(usr)))
}