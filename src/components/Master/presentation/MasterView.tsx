import React, { useEffect } from 'react';
import Header from './container/Header/presentation/Header';
import Footer from './container/Footer/presentation/Footer';
import Sidebar from './container/Sidebar/presentation/Sidebar';
import { MasteProps } from './model/MasterModel';
import { connect } from 'react-redux';
import { loginRequest } from '../../Login/actions/LoginAction';

const MasterView: React.FC<any> = (props) => {
    const {isLogin , login} = props;
    useEffect(() => {
        // this useEffect check if user referesh page and token is already stored in localstorage then again set isLogin flage to true in state
        if(localStorage.getItem('login') == 'true') {
            login()
        }
    })
    return(
        <> 
            {props.isLogin}
            { isLogin ? <Header/>  : null}
            {/* { isLogin ? <Sidebar/>  : null} */}
            
            
            <div >
                {/* className="headerM" */}
                {props.children}
            </div>
            { isLogin ? <Footer/>     : null}
                
        </>
    )
}


const mapStateToProps = (state: any) => {
    return {
        isLogin : state.login.isLogin,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: () =>  dispatch(loginRequest())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MasterView);