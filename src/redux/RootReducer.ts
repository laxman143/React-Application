import { Reducer , combineReducers } from "redux";
import LoginReducer from "../components/Login/reducer/LoginReducer";
import DealsReducer from "../components/Deals/reducer/DealsReducer";
import FacilityReducer from "../components/Deals/containers/SharedDeals/Facility/reducer/FacilityReducer";
import EventsReducer from "../components/Deals/containers/DealsDetails/FacilityDetails/events/reducer/EventsReducer";
import EmployeeReducer from "../components/Employee/container/EmployeeList/reducer/EmployeeReducer";
import EmployeeFormReducer from "../components/Employee/container/EmployeeForm/reducer/EmployeeFormReducer";

export type IAppState = {
    loginReducer: any
}
// const getReducer = () : any => ({
//     loginReducer: LoginReducer
// })

// export const rootReducer: Reducer<IAppState> = combineReducers(
//     getReducer()
// );


const rootReducer = combineReducers({
    login: LoginReducer,
    deals: DealsReducer,
    facility: FacilityReducer,
    events: EventsReducer,
    employees: EmployeeReducer,
    employeesDetails : EmployeeFormReducer
})

export default rootReducer