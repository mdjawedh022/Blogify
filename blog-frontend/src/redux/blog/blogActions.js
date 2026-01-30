import axios from "axios";
import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
  DELETE_BLOG_SUCCESS,
  // DELETE_BLOG_FAILURE,
  UPDATE_BLOG_SUCCESS,
  // UPDATE_BLOG_FAILURE,
  // ADD_BLOG_SUCCESS,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./blogTypes";

// let BASEURL = "http://localhost:8080";

/* =========================
   Fetch ALL Blogs (Admin)
========================= */
export const fetchBlogs = () => async (dispatch) => {
  dispatch({ type: FETCH_BLOGS_REQUEST });
  try {
    const { data } = await axios.get(`http://localhost:8080/blogs/published`);
    dispatch({
      type: FETCH_BLOGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_BLOGS_FAILURE,
      payload: error.message,
    });
  }
};

/* =========================
   Fetch ONLY Published Blogs (User Side)
========================= */
export const fetchPublishedBlogs = () => async (dispatch) => {
  dispatch({ type: FETCH_BLOGS_REQUEST });
  try {
    // const { data } = await axios.get(`${BASEURL}/blogs?status=published`);
    const { data } = await axios.get("http://localhost:8080/blogs/published");
    dispatch({
      type: FETCH_BLOGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_BLOGS_FAILURE,
      payload: error.message,
    });
  }
};

/* ================= CREATE POST ================= */
export const createPost = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_POST_REQUEST });

  try {
    const res = await axios.post("http://localhost:8080/blogs", postData);
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAILURE,
      payload: error.message,
    });
  }
};

/* Update blog */
export const updateBlog = (id, blogData) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:8080/blogs/${id}`, blogData);
    dispatch({ type: UPDATE_BLOG_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

/* Delete blog */
export const deleteBlog = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/blogs/${id}`);
    dispatch({ type: DELETE_BLOG_SUCCESS, payload: id });
  } catch (err) {
    console.error(err);
  }
};
