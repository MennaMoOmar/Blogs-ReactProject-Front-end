import { toast } from "react-toastify";

import db from "../apis/db";

export const editPost = (token, postId, title, body, image) => async (
  dispatch
) => {
  console.log(image);
  const editdata = {
    title: title,
    body: body,
  };
  console.log(editdata);

  const headerData = {
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await db.patch(`/post/${postId}`, editdata, headerData);
    console.log(response.data);
    dispatch({ type: "EDIT_POST", payload: response.data });

    // image
    if (image) {
      const formData = new FormData();
      formData.append("postImage", image, image.name);
      const responseImg = await db.post(
        `/post/postImg/${response.data._id}`,
        formData,
        headerData
      );
      console.log(responseImg.data);
    }
    toast("Post Changed Successfully", {
      autoClose: 2000,
    });
  } catch (err) {
    console.log(err);
  }
};
