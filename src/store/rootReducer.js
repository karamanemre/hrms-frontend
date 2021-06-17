import { combineReducers } from "redux";
import jobPostingsReducer from "./reducers/jobPostingsReducer";


const rootReducer = combineReducers({
    jobPostings:jobPostingsReducer
})

export default rootReducer;