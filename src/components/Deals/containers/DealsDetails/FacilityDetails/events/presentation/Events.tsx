import React, { useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { getEventsRequest } from '../actions/EventsActions';
import { connect } from 'react-redux';
import { IEvents } from '../../../../../model/DealsModel';
import { useLocation } from 'react-router-dom';


const Events = (props: any) => {
    let { events,getEvent  } = props;
    let { facilityId } = useParams();
    const location = useLocation();


    useEffect(() => {
        console.log(facilityId);
        getEvent(facilityId); 
    }, [location]);
    return (
        <div className="card">
            <div className="card-header text-primary">
                <div className="d-flex align-items-center">
                    Events {facilityId}
                </div>
            </div>

            <div className="card-body p-0">
                <div className="data-table" id="data-table">
                    <div className="data-table-header" id="data-table-header">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <div className="data-table-row-item">
                                            <span>Event</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="data-table-row-item d-flex align-items-center">
                                            <span className="mr-2">Release date</span>
                                            <span className="icon icon-sorting cursor-pointer"></span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="data-table-row-item">
                                            <span>Time</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="data-table-row-item">
                                            <span>user</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="data-table-row-item d-flex align-items-center justify-content-end">
                                            <span className="mr-2">Effective date</span>
                                            <span className="icon icon-sorting cursor-pointer" ></span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                          {events.length == 0 &&  <tbody >
                                <tr className="border-0">
                                    <td >
                                        <div className="d-flex  align-items-center justify-content-center h-100">
                                            <h1>No Record found!</h1>
                                        </div>
                                    </td>
                                </tr>
                            </tbody> }
                           
                        </table>
                    </div>


                    <div className="data-table-body" id="data-table-body">
                        <table>
                            <tbody>
                                  {props.events && props.events.map((event: IEvents) => 

                                <tr className="data-table-row">
                                    <td>
                                        <div className="data-table-row-item">
                                            <span > { event.preTxtEventCmt }</span> </div>
                                    </td>
                                    <td>
                                        <div className="data-table-row-item">
                                            <span> { event.preTspRecCreate} </span> </div>
                                    </td>
                                    <td>
                                        <div className="data-table-row-item">
                                            <span>
                                                { event.preTspRecCreate} </span></div>
                                    </td>
                                    <td>
                                        <div className="data-table-row-item">
                                            <span >
                                                { event.preUidRecCreate }</span> </div>
                                    </td>
                                    <td>
                                        <div className="data-table-row-item text-right">
                                            <span>
                                                { event.preDteEffective} </span></div>
                                    </td>
                                </tr>
                                 )} 
                            </tbody>
                        </table>
                    </div>

                  

          
                    

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {

    return {
        events: state.events.events
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

        getEvent: (facilityId: string) => dispatch(getEventsRequest(facilityId))
    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events))
export default connect(mapStateToProps, mapDispatchToProps)(Events)
