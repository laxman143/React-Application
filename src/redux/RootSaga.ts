import {all} from 'redux-saga/effects';
import { waitForLogin } from "../components/Login/saga/LoginSaga";
import { waitForGetDeals } from '../components/Deals/saga/DealsSaga';
import { waitForGetFacility } from '../components/Deals/containers/SharedDeals/Facility/saga/FacilitySaga';
import { waitForGetEvents } from '../components/Deals/containers/DealsDetails/FacilityDetails/events/saga/EventsSaga';
import { waitForEmployee, waitForDelete } from '../components/Employee/container/EmployeeList/saga/EmployeeSaga';
import { waitForAddEmployee, watiForGetByIDEmployee, waitForUpdateEmployee } from '../components/Employee/container/EmployeeForm/saga/EmployeeSaga';

export default function* rootSaga() {
    yield all([waitForLogin(),waitForGetDeals(),waitForGetFacility(),waitForGetEvents(),waitForEmployee(),waitForAddEmployee(),watiForGetByIDEmployee(),waitForDelete(),waitForUpdateEmployee()])
}