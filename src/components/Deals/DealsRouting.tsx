import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../Shared/components/PrivateRoute';
import DealsDetails from './containers/DealsDetails';
import FacilityDetails from './containers/DealsDetails/FacilityDetails';
import Deals from './Deals';
import DealsList from './presentation/deals-list';
 const DealsRouting: React.FC<any> = () => {
    return(
        <>

            <Switch>
                <Route exact path={`/deals`} component={DealsList} />
                {/* <Route exact path={`/deals`} render={()=>  <DealsList redirectToDetails={this.redirectToDetails} searchKeyUp={this.searchKeyUp} deals={this.props.deals} /> }/> */}
                <Route exact path={`/deals/:dealId`} component={DealsDetails} />
                <Route exact path={`/deals/:dealId/facility/:facilityId/events`}  component={FacilityDetails} />
               </Switch>


         {/* <Switch>
                <Route exact path={`/deals`} render={()=>  <DealsList redirectToDetails={this.redirectToDetails} searchKeyUp={this.searchKeyUp} deals={this.props.deals} /> }/>
                <Route exact path={`/deals/:dealId`} component={DealsDetails} />
                <Route exact path={`/deals/:dealId/facility/:facilityId/events`}  component={FacilityDetails} />
               </Switch>  */}
        {/* <Switch>
        
          <Route path={`/deals`} component={Deals} />
          <Route path={`/deals/:dealId`} component={DealsDetails} />
                <Route path={`/deals/:dealId/facility/:facilityId/events`}  component={FacilityDetails} />
        </Switch> */}
        </>
    )
 }

 export default DealsRouting