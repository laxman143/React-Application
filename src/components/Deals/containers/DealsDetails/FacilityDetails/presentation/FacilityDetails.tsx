import React from 'react';
import Facility from '../../../SharedDeals/Facility';
import Events from '../events';

const  FacilityDetails = () =>{
    return(
        <React.Fragment>
            <section className="d-flex h-100">
            <div className="px-0 app-facilities column col-4">
            <Facility/>
            </div>
            <div className="col pl-4 pr-0 overflow-auto">
                <Events/>
            </div>
           
           
             </section>
        </React.Fragment>
    )
}

export default FacilityDetails