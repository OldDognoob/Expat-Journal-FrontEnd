import * as types from "../State/actionTypes";

const initialState = {
  posts: [],
  userPosts: [],
  isLoadingPosts: false,
  isLoadingUserPosts: false,
  isAddingPost: false,
  isUpdatingPost: false,
  isDeletingPost: false,
  error: null
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_POSTS_START:
      return {
        ...state,
        isLoadingPosts: true,
        error: null
      };
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoadingPosts: false,
        posts: action.payload,
        error: null
      };
    case types.GET_POSTS_FAILURE:
      return {
        ...state,
        isLoadingPosts: false,
        error: action.payload,
        posts: null
      };
    case types.GET_USER_POSTS_START:
      return {
        ...state,
        isLoadingUserPosts: true,
        error: null
      };
    case types.GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        isLoadingUserPosts: false,
        userPosts: action.payload,
        error: null
      };
    case types.GET_USER_POSTS_FAILURE:
      return {
        ...state,
        isLoadingUserPosts: false,
        error: action.payload,
        userPosts: null
      };
    case types.ADD_POST_START:
      return {
        ...state,
        
        isAddingPost: true,
        error: null
      };
    case types.ADD_POST_SUCCESS:
      return {
        ...state,
        isAddingPost: false,
        posts: state.posts.concat(action.payload),
        error: null
      };
    case types.ADD_POST_FAILURE:
      return {
        ...state,
        isAddingPost: false,
        error: action.payload
      };
    case types.UPDATE_POST_START:
      return {
        ...state,
        isUpdatingPost: true,
        error: null
      };
    case types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isUpdatingPost: false,
        error: null
      };
    case types.UPDATE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUpdatingPost: false
      };
    case types.DELETE_POST_START:
      return {
        ...state,
        isDeletingPost: true,
        error: null
      };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        isDeletingPost: false,
        error: null
      };
    case types.DELETE_POST_FAILURE:
      return {
        ...state,
        isDeletingPost: false,
        error: action.payload
      };
    default:
      return state;
  }
}
