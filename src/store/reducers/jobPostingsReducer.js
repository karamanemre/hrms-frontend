import { CHANGE_ACTIVATION, GET_ALL_FAILURE, GET_ALL_SUCCESS  } from "../actions/jobPostingsAction";
import { jobPostings } from "../initialValues/jobPostingsItem";


const initialState ={
    jobPostings:jobPostings,
}


export default function jobPostingsReducer(state = initialState,{type,payload }){
    switch (type) {
        case GET_ALL_SUCCESS:
            return{
                ...state,
                jobPostings:payload
            }
        case GET_ALL_FAILURE:
            return{
                ...state,
                message:payload
            }
       
        case CHANGE_ACTIVATION:
            let jobPostingIndex= state.jobPostings.findIndex(jobPosting=>jobPosting.id===payload.id)
            return{
                ...state,
                jobPostings:state.jobPostings.map((jobPosting,i)=>i===jobPostingIndex?{...jobPosting,activated:!payload.activated}:jobPosting)
            }
        default:
            return state;
    }
        
}











