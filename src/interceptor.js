import axios from 'axios';

function setUpInterceptor()  {
    // interceptor
  axios.interceptors.request.use(function (config) {
    console.log('request');
      
    config.headers = { 
      'Authorization': `Bearer token`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
     }
      return config;

  }, function (error) {
    
    // Do something with request error
    return Promise.reject(error);
  });


  axios.interceptors.response.use(function (response) {
      
    console.log('response');

    return response;
}, function (error) {
    //catches if the session ended!
    if ( error.response.data.token.KEY == 'ERR_EXPIRED_TOKEN') {
        console.log("EXPIRED TOKEN!");
        localStorage.clear();
        // store.dispatch({ type: UNAUTH_USER });
    }
    return Promise.reject(error);
});
}

export default setUpInterceptor;