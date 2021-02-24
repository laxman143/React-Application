import React, { useState, useEffect } from 'react';

import ShortDeals from './ShortDeals';
import Facility from '../SharedDeals/Facility';
import Trades from '../SharedDeals/Trades';
import { Route, useHistory } from 'react-router-dom';
import FacilityDetails from './FacilityDetails';

const DealsDetails: React.FC<any> = (props) => {


    const [isShowDealsDetails, setIsShowDealsDetails] = useState(true);
    const [isShowFacility, setIsShowFacility] = useState(false);
    const [isShowTrade, setIsShowTrade] = useState(false);
    const history = useHistory();
    console.log(isShowDealsDetails);
    const backToDeals = () => {
        
        // props.history.push('/deals')
        history.push(`/deals`);
    }

    const clickEvent = (value: boolean) => {
         
    
      
        // if(value) {
        //     setIsShowDealsDetails(value);
        //     return;
        // }
        // let d = props.location.pathname;
        // let s = d.split('/');
        // if (s[s.length - 1] == 'facility') {
        //     setIsShowDealsDetails(true);
        // } else {
        //     setIsShowDealsDetails(false);
        // }
        // console.log(s);
        setIsShowDealsDetails(value)
    }

    useEffect(() => {

        // console.log('url => '+ props.location.pathname);
        // let d = props.location.pathname;
        // let s = d.split('/');
        // debugger
        // if(s[s.length -1] == 'details') {
        //     setIsShowDealsDetails(false);
        // } else  {
        //     setIsShowDealsDetails(true);
        // }
        // console.log(s);
    }, [])

    const clickIsShowFacility = () => {
        
        setIsShowFacility(!isShowFacility);
    }


    const clickIsShowTrade = () => {
        
        setIsShowTrade(!isShowTrade);
    }

    return (
        <div>
           
            {isShowDealsDetails && <>
                <div className="d-flex h-100">
                    {/* <!-- First column --> */}
                    <ShortDeals />
               
                    <div className="col pl-0 pr-4">
                        <div className="card">
                            <div className="card-header text-primary justify-content-between">
                                <div className="d-flex align-items-center ">
                                    <span className="icon icon-deals text-uppercase"></span>
                    deaNmeDeal
                        </div>

                                <div className="status-info lead" >
                                    <h4>dealTrackingNo</h4>
                                </div>

                            </div>
                            <div className="card-body card-box d-flex flex-column">
                                {/* <!-- First box with all details --> */}
                                <div>
                                    <div className="pl-0 pr-3  py-0 card-box-details flex-wrap justify-content-between">
                                        <div className="col px-0">
                                            <div className="d-flex col flex-xl-nowrap flex-sm-wrap px-0">
                                                <div className="my-4 4 card-data  col-xl-6 col-lg-12  col-sm-12 col-12 pl-3">
                                                    <h6 className="title">
                                                        Deal Administrator
                    </h6>
                                                    <h5 className="info text-uppercase">
                                                        deaUidAdmnstratr
                    </h5>
                                                </div>
                                                <div className="my-4  card-data col-xl-6 col-lg-12  col-12">
                                                    <h6 className="title">
                                                        Admin Agent
                    </h6>
                                                    <h5 className="info text-uppercase">
                                                        cusNmeShortName
                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col px-0">

                                            <div className="d-flex col flex-xl-nowrap  flex-sm-wrap px-0">
                                                <div className="my-4  border-md-none card-data col-xl-6 col-lg-12  col-12">
                                                    <h6 className="title">
                                                        Agreement date
                    </h6>
                                                    <h5 className="info">
                                                        deaDteAgreement
                    </h5>
                                                </div>
                                                <div className="my-4  card-data col-xl-6 col-lg-12  col-12">
                                                    <h6 className="title">
                                                        closed date
                    </h6>
                                                    <h5 className="info">
                                                        deaDteDealClsd
                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- list of box with data --> */}
                                    <div className="card-box-list">
                                        <h4 className="box-header">
                                            Global Deals Amounts
              </h4>
                                        <div className="border-top"></div>
                                        <div className="box-body py-0 flex-wrap">
                                            <div className="pr-4 pl-0 pt-4 col-lg-auto col-md-6 col-12">
                                                <h6 className="title">
                                                    Proposed Cmt.
                  </h6>
                                                <h5 className="text-secondary-light ">
                                                    deaAmtGloPreclo
                  </h5>
                                            </div>
                                            <div className="border-right border-regular py-3 mt-4 d-none d-md-block"></div>
                                            <div className="pt-4 px-0 px-lg-auto col-lg-auto col-md-5 col-12">
                                                <h6 className="title">
                                                    Closing Cmt.
                  </h6>
                                                <h5 className="text-danger">
                                                    facAmtOrig
                  </h5>
                                            </div>
                                            <div className="border-right border-regular py-3 mt-4 d-none d-lg-block"></div>
                                            <div className="pt-4 px-0 px-lg-auto col-lg-auto col-md-6 col-12">
                                                <h6 className="title">
                                                    Current Cmt.
                  </h6>
                                                <h5 className="text-dark">
                                                    facAmtCurr
                  </h5>
                                            </div>
                                            <div className="border-right border-white py-3 mt-4 d-none d-md-block"></div>
                                            <div className="pt-4 px-0 px-lg-auto col-lg-auto col-md-5 col-12">
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    {/* <!--second list of box with data --> */}
                                    <div className="card-box-list">
                                        <h4 className="box-header">
                                            host bank share amounts
              </h4>
                                        <div className="border-top"></div>
                                        <div className="box-body py-0 flex-wrap">
                                            <div className="pr-4 pl-0 pt-4 col-lg-auto col-md-6 col-12">
                                                <h6 className="title">
                                                    Proposed Cmt.
                  </h6>
                                                <h5 className="text-secondary-light ">
                                                    fhaAmtPreclose
                  </h5>
                                            </div>
                                            <div className="border-right border-regular py-3 mt-4 d-none d-md-block"></div>
                                            <div className="pt-4 px-0 px-lg-auto col-lg-auto col-md-5 col-12">
                                                <h6 className="title">
                                                    Closing Cmt.
                  </h6>
                                                <h5 className="text-danger">
                                                    fhaAmtClosing
                  </h5>
                                            </div>
                                            <div className="border-right border-regular py-3 mt-4 d-none d-lg-block"></div>
                                            <div className="pt-4 px-0 px-lg-auto col-lg-auto col-md-6 col-12">
                                                <h6 className="title">
                                                    Contr. Gross
                  </h6>
                                                <h5 className="text-dark">
                                                    fhaAmtGross
                  </h5>
                                            </div>
                                            <div className="border-right border-regular py-3 mt-4 d-none d-md-block"></div>
                                            <div className="pt-4 px-0 px-lg-auto col-lg-auto col-md-5 col-12">
                                                <h6 className="title">
                                                    Net Cmt.
                  </h6>
                                                <h5 className="text-dark">
                                                    fhaAmtNet
                  </h5>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 

                    {/* <!-- show and hide div --> */}
                 { (!isShowFacility  && !isShowTrade)  &&     <div className="column listing col-1 px-0" >
                        <div className="h-50">
                      <input type="checkbox" className="toggle-data d-none" value="data" name="" id="appBox"/>
                     <label  className="d-flex align-items-center justify-content-center h-100 text-center label-list-checkbox">
                     <section>
                    <div  onClick={clickIsShowFacility} className=" label-list justify-content-center icon icon-previous-pages-1 lead   text-warning">
              <h4 className="title pb-2 pr-2">Facilities</h4>
            </div>
          </section>
        </label>
      </div> 
      <div className="h-50 pt-4">
        <input type="checkbox" className="toggle-data d-none" value="data" name="" id="appBox2" onChange={clickIsShowTrade}/>
        <label  className="d-flex align-items-center justify-content-center h-100 text-center label-list-checkbox">
          <section>
            <div onClick={clickIsShowTrade}  className=" label-list justify-content-center icon icon-previous-pages-1 lead text-warning">
              <h4 className="title pb-2 pr-2">Trade Position</h4>
            </div>
          </section>
        </label>
      </div>
    </div> }



                  {isShowFacility &&  <div className="px-0 app-facilities column col-4">
                    <Facility eventClick={clickEvent}  closeFacility={clickIsShowFacility}/>
                 </div> }

             {isShowTrade && <div className="px-0 app-facilities column col-4" >
                    <Trades closeTrade={clickIsShowTrade} />
                    </div>}
                    
                </div>


                <button onClick={backToDeals}>Back to Deals</button>

                
                
            </>}

        </div>
    )
}

export default DealsDetails