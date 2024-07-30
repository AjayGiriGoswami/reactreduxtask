import axios from 'axios';

// Action types
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const REMOVE_POST = 'REMOVE_POST';
export const CHANGE_PAGE = 'CHANGE_PAGE';

// API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Action creators
export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
};

export const removePost = (postId) => ({ type: REMOVE_POST, payload: postId });

export const changePage = (pageNumber) => ({ type: CHANGE_PAGE, payload: pageNumber });
