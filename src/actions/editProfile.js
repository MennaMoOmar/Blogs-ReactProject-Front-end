import db from '../apis/db';

export const editProfile = (token, firstname, lastname, phone, country, city, street) => async (dispatch) => {
    const editdata = {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        country: country,
        city: city,
        street: street,     
    };

    const headerData = {
        headers: {
          'Authorization': token,
          'Accept': "application/json",
          'Content-Type': "application/json"
        },
      };

    // console.log(token, editdata)
    
    try{
        const response = await db.patch('/user/profile', editdata, headerData);
        console.log(response.data)
        dispatch({type:"EDIT_PROFILE",payload: response.data});
    }
    catch(err){
        console.log(err)
    }
}