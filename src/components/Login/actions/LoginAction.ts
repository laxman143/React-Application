import { SUCCESS_LOGIN, ERROR_LOGIN, REQUEST_LOGIN, REQUEST_LOGOUT } from "../types/loginType"

export const loginSuccess = (payload: any) =>  {
    return {
        type :  SUCCESS_LOGIN,
        payload : payload
    }
}

export const loginFailure  = (error: any) => {
    return {
        type : ERROR_LOGIN,
        payload: error
    }
}

export const loginRequest = () =>  {
    return {
        type :  REQUEST_LOGIN
    }
}

export const logoutRequest = () => {
    return {
        type : REQUEST_LOGOUT
    }
}