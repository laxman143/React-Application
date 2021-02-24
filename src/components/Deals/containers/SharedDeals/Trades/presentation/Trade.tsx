import React from 'react';

const Trades = (props:any) => {
    const {closeTrade} = props;
    return (
        <div className="card">
            <div className="card-header text-secondary-dark">
                <div className="d-flex align-items-center">
                    <span className="icon icon-trade-positions text-uppercase"></span> Trade position
              </div>
                <label className="btn btn-transparent btn-close p-0" onClick={closeTrade}>
                    <span className="icon icon-close m-0"></span>
                </label>
            </div>
        </div>
    )
}

export default Trades