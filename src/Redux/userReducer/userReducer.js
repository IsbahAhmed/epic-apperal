import {
  CLEAR_REG_ERROR,
  CLEAR_REG_MESSAGE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESSFULL,
  REGISTER_REQUEST,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESSFULL,
  REMOVE_USER,
} from "./userConstants";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState = {
  user: null,
  newUser: null,
  error: "",
  registrationFailed: false,
  registrationStatus: null,
  registrationProgress: false,
  loginProgress: false,
  loginStatus: null,
  registrationMessage: "",
  loginError: "",
  loginMessage: "",
  loginFailed:false,
  requestedUser: null,
};
const userReducer = persistReducer(
  {
    storage,
    key: "auth-XY",
    whitelist: ["user"],
  },
  (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
      case REGISTER_REQUEST:
        return {
          ...state,
          newUser: payload.userObj,
          registrationProgress: true,
        };
      case REGISTRATION_FAILED:
        return {
          ...state,
          error: payload.error,
          registrationFailed: true,
          registrationStatus: 400,
          registrationProgress: false,
        };
      case REGISTRATION_SUCCESSFULL:
        return {
          ...state,
          error: "",
          registrationFailed: false,
          registrationStatus: payload.status,
          user: payload.userObj,
          registrationMessage: payload.message,
          registrationProgress: false,
        };
      case CLEAR_REG_MESSAGE:
        return {
          ...state,
          registrationStatus: null,
          registrationMessage: "",
          loginMessage: "",
        };
      case CLEAR_REG_ERROR:
        return {
          ...state,
          error: "",
          loginError: "",
        };
      case LOGIN_REQUEST:
        return {
          ...state,
          requestedUser: payload.userObj,
          loginProgress: true,
        };
        case LOGIN_SUCCESSFULL:
            return {
                ...state,
                user:payload.userObj,
                loginMessage:payload.message,
                loginProgress:false,
                loginFailed:false
            }
           case LOGIN_FAILED:
               return {
                   ...state,
                   loginFailed:true,
                   loginError:payload.error,
                   loginProgress:false,
                
               } 
      case REMOVE_USER:
        return {
          user: null,
          newUser: null,
          error: "",
          registrationFailed: false,
          registrationStatus: null,
          registrationProgress: false,
          loginProgress: false,
          registrationMessage: "",
        };
      default:
        return state;
    }
  }
);

export default userReducer;
