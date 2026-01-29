import axios from "axios";
import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
} from "./blogTypes";

// normal actions
export const fetchBlogsRequest = () => ({
  type: FETCH_BLOGS_REQUEST,
});

export const fetchBlogsSuccess = (blogs) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: blogs,
});

export const fetchBlogsFailure = (error) => ({
  type: FETCH_BLOGS_FAILURE,
  payload: error,
});

// thunk action
export const fetchPublishedBlogs = () => async (dispatch) => {
  dispatch(fetchBlogsRequest());

  try {
    const { data } = await axios.get("http://localhost:8080/blogs/published");
    dispatch(fetchBlogsSuccess(data));
    console.log(data)
  } catch (error) {
    dispatch(fetchBlogsFailure(error.response?.data?.message || error.message));
  }
};
