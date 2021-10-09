import { LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST } from "./userConstants";

export const requestRegister = (userObj)=>({
    type:REGISTER_REQUEST,
    payload:{
        userObj
    }
})
export const requestLogin = (userObj)=>({
    type:LOGIN_REQUEST,
    payload:{
        userObj
    }
})
export const requestLogout = ()=>({
    type:LOGOUT_REQUEST
})