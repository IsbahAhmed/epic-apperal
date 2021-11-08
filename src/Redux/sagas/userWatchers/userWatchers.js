import { FETCH_USER,LOGIN_FAILED,LOGIN_REQUEST, LOGIN_SUCCESSFULL, LOGOUT_REQUEST, REGISTER_REQUEST, REGISTRATION_FAILED, REGISTRATION_SUCCESSFULL, REMOVE_USER, SET_USER } from "../../userReducer/userConstants";
import { call, put,takeEvery, select,take } from "@redux-saga/core/effects";
import { signin, signUp } from "./userApi";

function* handleRegister(){
 try {
    const user = yield select((state)=> state.user.newUser);
    const result = yield call(signUp,user);
    yield put({
        type: REGISTRATION_SUCCESSFULL,
        payload:{
            userObj:result.userObj,
            message:result.message,
            status:result.status
        }
    })
   yield window.location.reload()
 } catch (error) {
   
    yield put({
        type:REGISTRATION_FAILED,
        payload:{
            error:error
        }
    })
 }
}

function* handleLogout(){
      // const result = yield call(logout);
   yield  put({
            type:REMOVE_USER
        })
       yield window.location.reload()
    
}
function* handleLogin(){
try {
    const user = yield select(state => state.user.requestedUser);
    const result = yield call(signin,user);
   yield put({
        type:LOGIN_SUCCESSFULL,
        payload:{
            userObj:result.user,
            message:result.message
        }
    })
   yield window.location.reload()

} catch (error) {
    yield put({
        type:LOGIN_FAILED,
        payload:{
            error
        }
    })
}
}

function* userWatcher() {
  
    yield takeEvery(REGISTER_REQUEST,handleRegister);
    yield takeEvery(LOGIN_REQUEST,handleLogin);
    yield take(LOGOUT_REQUEST);
    yield call(handleLogout);
  }
export default userWatcher