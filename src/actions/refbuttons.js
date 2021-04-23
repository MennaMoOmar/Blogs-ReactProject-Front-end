export const refBtnLogin = (loginbtn)=>{
    return{
        type: "REF_LOGIN",
        payload: loginbtn
    }
}

export const refBtnLogout = (logoutbtn, action)=>{
    return{
        type: "REF_LOGOUT",
        payload: logoutbtn
    }
}