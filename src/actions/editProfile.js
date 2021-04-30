import { toast } from "react-toastify";

import db from "../apis/db";

export const editProfile = (
  token,
  firstname,
  lastname,
  phone,
  country,
  city,
  street,
  image
) => async (dispatch) => {
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
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // console.log(token, editdata)

  try {
    const response = await db.patch("/user/profile", editdata, headerData);
    // console.log(response.data)
    dispatch({ type: "EDIT_PROFILE", payload: response.data });
    // image
    if (image) {
      const formData = new FormData();
      formData.append("profileImage", image, image.name);
      // console.log(formData.get("profileImage").name);
      const responseImg = await db.post(
        `/user/profileImg`,
        formData,
        headerData
      );
      console.log(responseImg.data)
    }
    toast("Changes have been saved!", {
      autoClose: 2000,
    });
  } catch (err) {
    console.log(err);
  }
};
