
import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IDeals } from '../model/DealsModel';
import { getDealsRequest } from '../actions/DealsActions';


class DealsList extends React.Component<any, any> {

    
    componentDidMount() {
        if(this.props.deals.length == 0) {
            
         this.props.getDeals(null)
        }
    }

    redirectToDetails = (deaNumDealCntl:string) => {
        this.setState({
            isShowParentDeal: false
        })
        this.props.history.push(`/deals/${deaNumDealCntl}`);
    }

     searchKeyUp = (c: any) => (event:any) => {
         console.log('c');
        console.log(c);
        this.setState({search : event.target.value});
        this.props.getDeals(event.target.value)
    }

    render() {
        const c = new Date();
        return (
            <div>
                <div> {this.props.loader ? 'true' : 'false'}</div>
                   <div className="main-container">
                       
                        <header>
                            <div className="input-group flex-nowrap">
                                <div className="input-group-prepend">
                                    <span className="input-group-text icon icon-search" id="addon-wrapping"></span>
                                </div>
                       
                                <input type="text"  onKeyUp={  this.searchKeyUp(c)}  className="form-control border-0" placeholder="Deal Tracking No./Deal Name" aria-label="Search"
                                    aria-describedby="addon-wrapping" />
                                   
                            </div>
                            {/* <button  onClick={() => this.searchClick()}>search</button> */}
                        </header>
                        <div className="mt-4 h-100 overflow-hidden bg-white border border-gray-accent">
                            {/* data table */}
                            <div className="data-table" id="data-table">
                                {/* [ngClass]="{'overflow-auto h-100':(deals.length === 0)}" */}
                                <div className="data-table-header" id="data-table-header" >
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="data-table-row-item d-flex align-items-center cursor-pointer">
                                                        <span className="mr-2">Deal Tracking No.</span>

                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="data-table-row-item d-flex align-items-center cursor-pointer">
                                                        <span className="mr-2">Deal name</span>

                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="data-table-row-item">
                                                        <span>Deal classification</span>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="data-table-row-item">
                                                        <span>Deal Administrator</span>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="data-table-row-item text-right">
                                                        <span>current commitment</span>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="data-table-row-item text-right">
                                                        <span>closing commitment</span>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className="data-table-row-item text-right">
                                                        <span>host bank shares</span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        {/* no record found body */}
                                        {/* <tbody >
                                             <tr className="border-bottom-0">
                                         <td >
                                         <div className="d-flex  align-items-center justify-content-center h-100 p-4">
                                         <h1>No Record found!</h1>
                                         </div>
                                        </td>
                                        </tr>
                                        </tbody> */}
                                    </table>
                                </div>

                                {/* data table body */}
                                <div className="data-table-body" id="data-table-body">
                                    <table>
                                        <tbody>
                                            {this.props.deals && this.props.deals.map((deal: IDeals) => 
                                               
                                                <tr key={deal.deaNumDealCntl} className="data-table-row"   onClick={()=> this.redirectToDetails(deal.deaNumDealCntl)} >
                                                    <td>
                                                        <div className="data-table-row-item "> {deal.deaNumDealCntl} </div>
                                                    </td>
                                                    <td>
                                                        <div className="data-table-row-item">
                                                            <span> {deal.deaNmeDeal}   </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="data-table-row-item">{deal.deaCdeDealClass}  </div>
                                                    </td>
                                                    <td>
                                                        <div className="data-table-row-item">{deal.deaUidAdmnstratr}  </div>
                                                       </td>
                                                    <td>
                                                        <div className="data-table-row-item text-right">{deal.facAmtCurr}  </div>
                                                    </td>
                                                    <td>
                                                        <div className="data-table-row-item text-right">{deal.facAmtOrig} </div>
                                                    </td>
                                                    <td>
                                                        <div className="data-table-row-item text-right">{deal.fhaAmtNet}  </div>
                                                    </td>
                                                </tr>
                                            )}

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>

                    </div>
                 </div>);
    }
}
const mapStateToProps = (state: any) => {
    console.log(state.deals.deals);
    return {
        deals: state.deals.deals,
        loader:state.deals.loader
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

        getDeals: (search: string) => dispatch(getDealsRequest(search))

        // for saga
        // buyCake: () => dispatch({ type : 'BUY_CAKE_MINUS'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( DealsList)