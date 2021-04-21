import getAllPosts from './getAllPosts';
import getUserById from './GetUserById';

const getAllPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(getAllPosts())
    const users = getState().posts.map(p => p.userId);
    const uniqueUsers = [];
    users.forEach(usr => {
        if(!uniqueUsers.includes(usr))
            uniqueUsers.push(usr);
    });
    uniqueUsers.forEach(usr => dispatch(getUserById(usr)))
}

export default getAllPostsAndUsers;