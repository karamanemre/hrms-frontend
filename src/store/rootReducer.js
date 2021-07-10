import { combineReducers } from "redux";
import jobPostingsReducer from "./reducers/jobPostingsReducer";
import employerReducer from "./reducers/employerReducer";
import favoriteReducer from "./reducers/favoriteReducer";


const rootReducer = combineReducers({
    jobPosting:jobPostingsReducer,
    employer:employerReducer,
    favorite:favoriteReducer
})





export default rootReducer;