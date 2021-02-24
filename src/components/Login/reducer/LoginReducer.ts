import { REQUEST_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN, REQUEST_LOGOUT } from "../types/loginType"

const initialState = {
  isLogin: false,
  error : ''
}

const LoginReducer = (state = initialState , action: any) => {
    switch(action.type) {
        case REQUEST_LOGIN : {
            return {
                ...state
            }
        }

        case SUCCESS_LOGIN : {
            return {
                ...state,
                isLogin: action.payload
            }
        }

        case ERROR_LOGIN: {
            return{
                ...state,
                error: 'Login Error'
            }
        }

        case REQUEST_LOGOUT: {
            return{
                ...state,
                isLogin: false
            }
        }
        default: return state
    }
}

export default LoginReducer