import React from 'react';
import DealsRouting from './DealsRouting';
import { Route, Link, Switch, BrowserRouter, useRouteMatch } from 'react-router-dom';
import DealsDetails from './containers/DealsDetails';
import { getDealsRequest } from './actions/DealsActions';
import { connect } from 'react-redux';
import { IDeals } from './model/DealsModel';
import FacilityDetails from './containers/DealsDetails/FacilityDetails';
import DealsList from './presentation/deals-list';

const Deals: React.FC<any> = (props) => {
    
        let { path, url } = useRouteMatch();

        console.log(path, 'path')
        console.log(url, 'URL');
        return (
            <div>
              {/* <DealsRouting/> */}
           
              <Switch>

              {/* <Route exact path={`/`} component={DealsList} />
                 <Route exact path={`:dealId`} component={DealsDetails} />
                <Route exact path={`facility/:facilityId/events`}  component={FacilityDetails} /> */}
        
                {/* <Route exact path={`/deals`} component={DealsList} />
                 <Route exact path={`/deals/:dealId`} component={DealsDetails} />
                <Route exact path={`/deals/:dealId/facility/:facilityId/events`}  component={FacilityDetails} /> */}

                 <Route exact path={`${path}`} component={DealsList} />
                 <Route exact path={`${path}/:dealId`} component={DealsDetails} />
                <Route exact path={`${path}/:dealId/facility/:facilityId/events`}  component={FacilityDetails} />
               </Switch>
           


               {/* <Route exact path={`/deals`} render={()=>  <DealsList redirectToDetails={this.redirectToDetails} searchKeyUp={this.searchKeyUp} deals={this.props.deals} /> }/> */}
            </div>);
    }




export default Deals;