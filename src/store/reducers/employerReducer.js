import { CHANGE_ACTIVATION, GET_ALL_FAILURE, GET_ALL_SUCCESS  } from "../actions/employersAction";
import { employers } from "../initialValues/employerItem";


const initialState ={
    employers:employers,
}


export default function employerReducer(state = initialState,{type,payload }){
    switch (type) {
        case GET_ALL_SUCCESS:
            return{
                ...state,
                employers:payload
            }
        case GET_ALL_FAILURE:
            return{
                ...state,
                message:payload
            }
       
        case CHANGE_ACTIVATION:
            let employerIndex= state.employers.findIndex(employer=>employer.id===payload.id)
            return{
                ...state,
                employers:state.employers.map((employer,i)=>i===employerIndex?{...employer,activated:!payload.activated}:employer)
            }
        default:
            return state;
    }
        
}











