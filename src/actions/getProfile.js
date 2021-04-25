// import axios from "axios";

import db from "../apis/db";

// export const getProfile = async (token) => {
//   console.log(token);
//   const headerData = {
//     headers: {
//       'Authorization': token,
//       'Accept': "application/json",
//       'Content-Type': "application/json",
//     }
//   };
//   const responce = await db.get("/user/profile", headerData);
//   console.log(responce.data);
//   return { type: "GET_PROFILE", payload: responce.data };
// };

export const getProfile = (token) =>
  // return dispatch => {
  //     axios.get("http://localhost:3001/user/profile", {headers:{'Authorization': token}})
  //     .then(response => {
  //       dispatch({ type: "GET_PROFILE", payload: response.data })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //     console.log("gg")
  //   }
  async (dispatch) => {
    console.log(token);
    const headerData = {
      headers: {
        'Authorization': token,
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
    };
    console.log(headerData);
    const responce = await db.get("/user/profile", headerData);
    console.log(responce);
    dispatch({ type: "GET_PROFILE", payload: responce.data });
  };
