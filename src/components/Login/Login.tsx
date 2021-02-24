import React from 'react';
import { Redirect } from 'react-router-dom';
import { loginRequest } from './actions/LoginAction';
import { connect } from 'react-redux';

// const initialState = {
//     login: false
// }

// const  Login = (props: any) =>{
  function Login(props: any) {
    const {login,isLogin} = props;
    const loginButton = () => {
        localStorage.setItem('login','true');
        login();
        props.history.push('./deals')
    }


    return(
        <div>
            {props.isLogin}
            <button onClick={loginButton}>Login {isLogin}</button> 
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return{
        isLogin: state.login.isLogin
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: () =>  dispatch(loginRequest())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)