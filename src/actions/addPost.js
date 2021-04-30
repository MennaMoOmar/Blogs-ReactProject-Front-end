import { toast } from "react-toastify";

import db from "../apis/db";

export const addPost = (token, title, body, image) => async (dispatch) => {
  console.log(image);
  const newPost = {
    title: title,
    body: body,
  };

  const headerData = {
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // console.log(token, newPost, image)

  try {
    const response = await db.post("/post/addPost", newPost, headerData);
    console.log(response.data);
    await dispatch({ type: "ADD_POST", payload: response.data });
    // image
    const formData = new FormData();
    formData.append("postImage", image, image.name);
    const headerData2 = {
      headers: {
        Authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const responseImg = await db.post(
      `/post/postImg/${response.data._id}`,
      formData,
      headerData2
    );
    console.log(responseImg.data);

    toast("Post Added Successfully", {
      autoClose: 2000,
    });
  } catch (err) {
    console.log(err);
  }
};
