
import JobPostings from "../../services/jobPostingsService"

export const GET_ALL_SUCCESS="GET_ALL_SUCCESS"
export const GET_ALL_FAILURE="GET_ALL_FAILURE"
export const CHANGE_ACTIVATION="CHANGE_ACTIVATION"


let jobPostings = new JobPostings();

export const getAllJobPostings=()=>dispatch=>{
    jobPostings.getByIsConfirmationFalse()
    .then(response=>dispatch({
        type:GET_ALL_SUCCESS,
        payload:response.data.data
    }))
    .catch(error=>dispatch({
        type:GET_ALL_FAILURE,
        payload:error
    }))
}

export const changeActivation=(jobPosting)=>{
    return {
        type:CHANGE_ACTIVATION,
        payload:jobPosting
    }
}
