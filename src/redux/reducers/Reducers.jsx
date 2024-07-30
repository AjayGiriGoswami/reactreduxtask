import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    REMOVE_POST,
    CHANGE_PAGE,
  } from '../actions/Actions';
  
  const initialState = {
    posts: [],
    loading: false,
    error: null,
    currentPage: 1,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return { ...state, loading: true };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload.slice(0, 6),
          totalPosts: action.payload,
        };
      case FETCH_POSTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case REMOVE_POST:
        const updatedPosts = state.posts.filter(post => post.id !== action.payload);
        const nextPagePost = state.totalPosts.find(post => !updatedPosts.map(p => p.id).includes(post.id));
        const newPosts = [...updatedPosts.slice(0, 5)];
        if (nextPagePost) {
          newPosts.push(nextPagePost);
        }
        return { ...state, posts: newPosts };
      case CHANGE_PAGE:
        const startIndex = (action.payload - 1) * 6;
        return { ...state, currentPage: action.payload, posts: state.totalPosts.slice(startIndex, startIndex + 6) };
      default:
        return state;
    }
  };
  
  export default Reducer;
  