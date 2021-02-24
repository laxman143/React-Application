import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/Shared';
import Login from './components/Login';


const DealsComp = lazy(() => import('./components/Deals/Deals'));
// const DealsComp = lazy(() => import('./components/Deals/MailDeals'));

const GLEntriesComp = lazy(() => import('./components/GLEntries/GLEntries'));
const EmployeeComp = lazy(() => import('./components/Employee/Employee'));

const AppRouting: any = () => {
    return (
        <>
           
                <Suspense fallback={<div>Loading....</div>}>
                    <Switch>
                        <Route exact path="/" component={DealsComp} />
                        <Route exact path="/login" component={Login}/>
                        <PrivateRoute  path="/deals" component={DealsComp} />
                        <PrivateRoute  path="/glentries" component={GLEntriesComp} />
                        <PrivateRoute path="/employee" component= {EmployeeComp}/>
                    </Switch>
                </Suspense>
         

        </>
    )
}

export default AppRouting