import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import axios from "axios";

const journalAPI = "https://expat-journals.herokuapp.com/api";
//STEP:7 Design action creator functions
export const getPosts = () => dispatch => {
  dispatch({ type: types.GET_POSTS_START });
  axiosWithAuth()
    .get(`https://expat-journals.herokuapp.com/api/v1/journals`)
    .then(response => {
      dispatch({
        type: types.GET_POSTS_SUCCESS,
        payload: response.data.journals
      });
    })
    .catch(error => {
      dispatch({
        type: types.GET_POSTS_FAILURE,
        payload: error
      });
      console.log(error);
    });
};
export const createPost = post => dispatch => {
  const token = localStorage.getItem("token");
  dispatch({ type: types.ADD_POST_START });
  console.log(post);
  axiosWithAuth()
    .post(`https://expat-journals.herokuapp.com/api/v1/journals`, post, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      console.log(response.data.journal);
      dispatch({ type: types.ADD_POST_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: types.ADD_POST_FAILURE, payload: error.errorMessage });
    });
};
export const editPost = (post, id) => dispatch => {
  const token = localStorage.getItem("token");
  dispatch({ type: types.UPDATE_POST_START });
  axiosWithAuth()
    .get(`https://expat-journals.herokuapp.com/api/v1/journals/${id}`, post, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      dispatch({ type: types.UPDATE_POST_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({
        type: types.UPDATE_POST_FAILURE,
        payload: error.response.data.error_message
      });
    });
};

export const updatePost = (post, id, message, location) => {
  return dispatch => { 
  dispatch ({type: types.UPDATE_POST_START})
  axiosWithAuth()
    .put(`https://expat-journals.herokuapp.com/api/v1/journals/${id}`, post, {
      message, 
      location
    })
    .then(response => {
      dispatch({ 
        type: types.UPDATE_POST_SUCCESS, 
        payload: response.data });
    })
    .catch(error =>
      dispatch({
        type: types.UPDATE_POST_FAILURE,payload:error
      })
    );
  };
}

export const handleChange = (e) => dispatch => {
  const inputValue = e.target.value;
  const inputName = e.target.name; 
  dispatch({type: types.INPUT_CHANGE, payload: {inputName, inputValue}})
}
// export const updatePost = post => dispatch => {
//   dispatch({ type: types.UPDATE_POST_START });
//   axiosWithAuth()
//     .put(`https://expat-journals.herokuapp.com/api/v1/journals/${post.id}`, post)
//     .then(response => {
//       console.log(response.data);
//       dispatch({ type: types.UPDATE_POST_SUCCESS, payload: post.id });
//     })
//     .catch(error =>
//       dispatch({
//         type: types.UPDATE_POST_FAILURE,
//         payload: error
//       })
//     );
// };

export const deletePost = id => dispatch => {
  dispatch({ type: types.DELETE_POST_START });
  const token = localStorage.getItem("token");
  axiosWithAuth()
    .delete(`https://expat-journals.herokuapp.com/api/v1/journals/${id}`, {
      headers: {
        Authorization: token
      }
    })
    .then(res => {
      dispatch({ type: types.DELETE_POST_SUCCESS, payload: id });
      
    })
    .catch(err => {
      dispatch({ type: types.DELETE_POST_FAILURE, payload: err.errorMessage });
    });
};

export const getUserPosts = () => dispatch => {
  dispatch({ type: types.GET_USER_POSTS_START });
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  axiosWithAuth()
    .get(`https://expat-journals.herokuapp.com/api/v1/journals/${id}`, {
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      dispatch({
        type: types.GET_USER_POSTS_SUCCESS,
        payload: response.data.post
      });
    })
    .catch(error => {
      dispatch({
        type: types.GET_POSTS_FAILURE,
        payload: error.response.data.MessageError
      });
    });
};

export const login = credentials => dispatch => {
  dispatch({ type: types.LOGIN_START });
  console.log(credentials, "credentials is here");
  axios
    .post(`https://expat-journals.herokuapp.com/api/v1/auth/login`, credentials)
    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log(response);
      const payload = { user: response.data.user };
      dispatch({ type: types.LOGIN_SUCCESS, payload });
    })
    .catch(error => {
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
    });
};

export const register = credentials => dispatch => {
  dispatch({ type: types.REGISTER_START });
  console.log(credentials, "credentials is here");
  axios
    .post(
      `https://expat-journals.herokuapp.com/api/v1/auth/signup`,
      credentials
    )
    .then(response => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log(response);
      const payload = {
        user: response.data.user
      };
      console.log(payload, "payload is here");
      dispatch({ type: types.REGISTER_SUCCESS, payload });
    })
    .catch(error => {
      const payload = error.response ? error.response.data : error;
      dispatch({ type: types.REGISTER_FAILURE, payload });
    });
};

export const handleSubmit = (formValues, id) => dispatch => {
  dispatch({ type: types.UPDATE_POST_START });
  axiosWithAuth()
    .put(`https://expat-journals.herokuapp.com/api/v1/journals/${id}`, formValues)
    .then(response => {
      console.log(response.data);
      dispatch({ type: types.UPDATE_POST_SUCCESS });
    })
    .catch(error =>
      dispatch({
        type: types.UPDATE_POST_FAILURE,
        payload: error
      })
    );
};
