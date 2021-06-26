import { combineReducers } from "redux";
import jobPostingsReducer from "./reducers/jobPostingsReducer";
import favoriteReducer from "./reducers/favoriteReducer";


const rootReducer = combineReducers({
    jobPosting:jobPostingsReducer,
    favorite:favoriteReducer
})





export default rootReducer;