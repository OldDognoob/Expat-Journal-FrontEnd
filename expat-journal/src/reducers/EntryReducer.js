import * as types from "../State/actionTypes";

//STEP 1 DESIGN APPLICATION STATE
const initialState = {
  user:{},
  isLoggedIn: false,
  registerError: null,
  registerSuccess: null,
  loginError: null,
  loginSuccess: null,
  isFetching:false
};
//STEP 3 Create one function reducer per slice of state
export function entryReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loginError: null,
        loginSuccess: null,
        isFetching:true
      };
    case types.LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loginError: null,
        loginSuccess: "You have successfully login",
        isLoggedIn: true,
        user:action.payload.user,
        isFetching:false
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
        loginSuccess: null,
        isLoggedIn: false,
        isFetching:false
      };
    case types.REGISTER_START:
      console.log(action);
      return {
        
        ...state,
        registerError: null,
        registerSuccess: null,
        isFetching:true,
        
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: "Successfully Registered",
        registerError: null,
        isLoggedIn: true,
        user: action.payload.user,
        isFetching:false
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        registerError: action.payload,
        registerSuccess: null,
        isFetching:false
      };
    default:
        return state;
  }
}
