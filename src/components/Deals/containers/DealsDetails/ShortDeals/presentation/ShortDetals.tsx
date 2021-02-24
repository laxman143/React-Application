import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getDealsRequest } from '../../../../actions/DealsActions';
import { IDeals } from '../../../../model/DealsModel';
import { useHistory } from 'react-router-dom';

// import Modal from "react-modal";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


const ShortDeals: React.FC<any> = (props: any) => {

    const { getDeals } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();
    const searchKeyUp = (event: any) => {
        console.log('asdas')
        console.log(event.target.value)

        props.getDeals(event.target.value)
    }

    useEffect(() => {
        getDeals(null);
    }, [])

    const redirectToDetails = (dealId: string) => {
        history.push(`/deals/${dealId}`);
        //    this.props.history.push(`/deals/${deaNumDealCntl}`);
    }

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="column col-3 pl-0 pr-4 app-list">
            <div className="card">
                <div className="card-header text-secondary-dark">
                    <div className="d-flex align-items-center">
                        <span className="icon icon-deals"></span> Deals
            </div>

                    <Button variant="primary" onClick={handleShow}>
                        Launch static backdrop modal
                    </Button>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            I will not close if you click outside me.
                            Don't even try to press
                            escape key.
        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Close
          </Button>

                        </Modal.Footer>
                    </Modal>

                </div>
                <div className="p-3">
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text icon icon-search" id="addon-wrapping"></span>
                        </div>
                        <input type="text" className="form-control border-0" placeholder="Deal Tracking No./Deal Name" aria-label="Search"
                            aria-describedby="addon-wrapping" onKeyUp={(event) => searchKeyUp(event)} />
                    </div>
                </div>
                {props.deals.length == 0 && <div className="d-flex  align-items-center justify-content-center h-100">
                    <h1>No Record found!</h1>
                </div>}
                <div className="card-body p-0 test" id="data-table-body">
                    <table className="data-table h-auto">
                        <tbody className="data-table-body" >
                            {props.deals && props.deals.map((deal: IDeals) =>
                                <tr key={deal.deaNumDealCntl} onClick={() => redirectToDetails(deal.deaNumDealCntl)} className="data-table-row" id="dealDiv{{encodeString(deal.deaNumDealCntl)}}">
                                    <td>
                                        <div className="data-table-row-item"><span>{deal.deaNmeDeal}</span></div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state.deals.deals);
    return {
        deals: state.deals.deals
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

        getDeals: (search: string) => dispatch(getDealsRequest(search))

        // for saga
        // buyCake: () => dispatch({ type : 'BUY_CAKE_MINUS'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShortDeals)

// export default ShortDeals
