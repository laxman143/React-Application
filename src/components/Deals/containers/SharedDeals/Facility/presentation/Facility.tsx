import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getFacilityRequest } from '../actions/FacilityActions';
import { connect } from 'react-redux';
import { IFacilities } from '../../../../model/DealsModel';
import { useParams } from 'react-router-dom';

const Facility = (props: any) => {
    const history = useHistory();
    let { dealId } = useParams();
    const {closeFacility} = props;
    const gotoEvent = (id: string) => {
      // history.push(`/deals/details/${id}/facility`);
      //     if (props.eventClick) {
      //       props.eventClick(false)
      //  }
      history.push(`/deals/${dealId}/facility/${id}/events`);
      if (props.eventClick) {
        props.eventClick(false)
   }
 
    }


    
   const searchKeyUp = (event:any) => {
       
    props.getFacility(event.target.value);
  }

    useEffect(() => {
        // // console.log('url => '+window.location.href);
        // let d = window.location.href;
        // let s = d.split('/');
        // debugger
        // if(s[s.length -1] != 'facility') {
        //     props.eventClick(false);
        // } else  {
        //     props.eventClick(true);
        // }
        props.getFacility()
    },[])
    return (
        // <div>
        //     Facility
        //     <button onClick={ () => gotoEvent(1)}>Got to Event</button>

        // </div>
        <div className="card">
            <div className="card-header text-se condary-dark">
                <div className="d-flex align-items-center text-capitalize text-secondary-dark">
                    <span className="icon icon-facilities "></span> Facilities
                 </div>
                <label className="btn btn-transparent btn-close p-0" onClick={closeFacility}>
                    <span className="icon icon-close m-0"></span>
                </label>
            </div>
            <div className="p-3 card-search">
                <div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                        <span className="input-group-text icon icon-search" id="addon-wrapping"></span>
                    </div>
                    <input type="text" onKeyUp={ (event) => searchKeyUp(event)}  className="form-control border-0" placeholder="Facility control No./Facility name" aria-label="Search"
                        aria-describedby="addon-wrapping" />
                </div>
            </div>
            {props.facility.length == 0  &&  <div className="d-flex  align-items-center justify-content-center h-100">
                <h1>No Record found!</h1>
    </div> }


<div className="card-body p-0">
    <ul className="pl-0">
    {props.facility && props.facility.map((facility: IFacilities) =>
      <div key={facility.facNumFacCntl} >
        <li className="p-4 card-list">
          <span className="position-absolute not-allowed d-none" ></span>
           <section className="d-flex justify-content-between align-items-center flex-wrap">
            <label className="text-secondary-dark small-label">Facility Control Number</label>
            <h2 className="text-dark">{facility.facNumFacCntl}</h2>
          </section>
          <hr className="d-block d-lg-none"/>
          <section>
            <label className="text-secondary-dark mt-3 mt-lg-auto  small-label">Name</label>
            <div className="d-flex justify-content-between align-items-center flex-md-nowrap flex-wrap">
              <h2 className="text-dark">{facility.facNmeFacility} </h2>
              <label className="status-success">
               {facility.status}
              </label>
              {/* <label className="status-regular">
                InActive
              </label> */}
            </div>
          </section>
          <hr className="d-block d-lg-none"/>
          <div className="d-flex justify-content-between flex-wrap">
            <div className="pt-3 px-0 px-lg-auto col-12 col-lg-auto">
              <label className="text-secondary-dark small-label">Effective Date</label>
              <div className="text-dark font-weight-bold">{facility.facDteEffective}</div>
            </div>
            <div className="border-right border-gray-accent fat-border mt-4 d-none d-lg-block"></div>
            <div className="text-lg-center pt-3 px-0 px-lg-auto col-12  col-lg-auto">
              <label  className="text-secondary-dark small-label">Maturity Date</label>
              <div className="text-dark font-weight-bold">{facility.facDteFinalMat}</div>
            </div>
            <div className="border-right border-gray-accent fat-border mt-4 d-none d-lg-block "></div>
            <div className="col-12 col-lg-auto pt-3 px-0 px-lg-auto pr-4">
              <label  className="text-secondary-dark small-label">Currency</label>
              <div className="text-dark font-weight-bold">{facility.facCdeCurrency}</div>
            </div>
          </div>
          <hr className="d-block d-lg-none"/>
          <div className="d-flex justify-content-between flex-wrap mb-3">
            <div className="mt-3">
              <label  className="text-secondary-dark small-label">Closing Commitment</label>
              <h5 className="text-danger text-truncate mt-1">{facility.facAmtGloblOrig }</h5>
            </div>
            <div className="mt-3">
              <label  className="text-secondary-dark small-label">Current Commitment</label>
              <h5 className="text-secondary-light mt-1 text-truncate">{facility.facAmtGloblCurr}</h5>
            </div>
            <div className="mt-3">
              <label  className="text-secondary-dark small-label">Current Host Bank</label>
              <h5 className="text-dark text-truncate mt-1">{facility.facAmtNet}</h5>
            </div>
          </div>
          <hr className="d-block d-lg-none"/>
          <footer className="d-flex justify-content-end align-items-center">
            <button className="btn btn-primary"   onClick={ () => gotoEvent(facility.facNumFacCntl)}
              aria-label="Events">Events</button>
          </footer>
        </li>
        <hr className="border-top border-gray-accent mx-4 my-0 d-none d-lg-block fat-border"/>
        <hr className="fat-border  mx-4 my-0 border-top d-block d-lg-none border-primary-dark"/>
      </div>
       )}
    </ul>
  </div>


        </div>
    )
}


const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    facility: state.facility.facility
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      getFacility: (search:string) => dispatch(getFacilityRequest(search))

      // for saga
      // buyCake: () => dispatch({ type : 'BUY_CAKE_MINUS'})
  }
}

export default   connect(mapStateToProps, mapDispatchToProps)(Facility)