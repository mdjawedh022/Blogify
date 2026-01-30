import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
  DELETE_BLOG_SUCCESS,
  // DELETE_BLOG_FAILURE,
  UPDATE_BLOG_SUCCESS,
  // UPDATE_BLOG_FAILURE,
  // ADD_BLOG_SUCCESS,
  CREATE_POST_SUCCESS,
} from "./blogTypes";

const initialState = {
  loading: false,
  blogs: [],
  error: "",
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      return { ...state, loading: true };
    case FETCH_BLOGS_SUCCESS:
      return { loading: false, blogs: action.payload, error: "" };
    case FETCH_BLOGS_FAILURE:
      return { loading: false, blogs: [], error: action.payload };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: [action.payload, ...state.blogs],
      };

    case UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload : blog,
        ),
      };

    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
      };

    default:
      return state;
  }
};

export default blogReducer;
