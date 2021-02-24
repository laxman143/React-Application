import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../../../../../Login/actions/LoginAction';

const Header = (props: any) => {
    let history = useHistory();
    const { isLogin, logout } = props;
    const logoutButton = () => {
        localStorage.removeItem('login');
        logout();
        history.push('/login')
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand  bg-secondary-dark px-0 py-0">
                <a href="#" className="logo ">
                    <img src="../../../../../../../../../assets/images/logo.png" alt="antares logo" />
                </a>
                <a href="#" className="small-logo d-none">
                    <img src="../../../../../../assets/images/small-logo.png" alt="antares logo" />
                </a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/deals" className="nav-link">
                                <span className="icon icon-deals mr-2"></span>
                           Deals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/glentries" className="nav-link">
                                <span className="icon icon-search mr-2"></span>GL Entries</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/employee" className="nav-link">
                                <span className="icon icon-search mr-2"></span>Employee</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="pr-4 navbar-text">
                    <label className="text-warning">
                        WELCOME<h6 className="text-white">Laxman</h6>
                    </label>

                </div>

                {isLogin ? <button onClick={logoutButton}>Logout</button> : null}
            </nav>
        </React.Fragment>
    )
}
const mapStateToProps = (state: any) => {
    return {
        isLogin: state.login.isLogin
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        logout: () => dispatch(logoutRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)