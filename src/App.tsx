import React, { useState } from 'react';
import { Provider, connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import AppRouting from './AppRouting';
import Master from './components/Master';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/StoreCofiguration';
import Loader from './components/Shared/components/Loader';
import axios from 'axios'
import setUpInterceptor from './interceptor';

function App(props : any) {
  const [isShowLoader, setisShowLoader] = useState(false);
  store.subscribe(() => console.log('Update State test' ,setisShowLoader(store.getState().deals.loader)));
 
//   // interceptor
//   axios.interceptors.request.use(function (config) {
//     config.headers = { 
//       'Authorization': `Bearer token`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded'
//      }
//       return config;

//   }, function (error) {
    
//     // Do something with request error
//     return Promise.reject(error);
//   });


//   axios.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     //catches if the session ended!
//     if ( error.response.data.token.KEY == 'ERR_EXPIRED_TOKEN') {
//         console.log("EXPIRED TOKEN!");
//         localStorage.clear();
//         // store.dispatch({ type: UNAUTH_USER });
//     }
//     return Promise.reject(error);
// });

  setUpInterceptor();
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Master>
          <AppRouting />
          {isShowLoader &&  <Loader/>} 
        </Master>
      </BrowserRouter>
    </div>
    </Provider>
  );
}
// const mapStateToProps = (state: any) => {
//  debugger
//   return {
    
//       loader:state.deals.loader
//   }
// }

// export default connect(mapStateToProps, null)( App)
export default App
