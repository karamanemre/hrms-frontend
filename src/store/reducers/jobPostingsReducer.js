import { CONFİRM_POSTİNG } from "../actions/jobPostingsAction";
import { jobPostingItem } from "../initialValues/jobPostingsItem";


const initialState ={
    jobPostingItem:jobPostingItem,
}


export default function jobPostingsReducer(state = initialState,{type,payload }){
    switch(type){
        case CONFİRM_POSTİNG:
           return{
               ...state,
           };

           default:
            return state
    }
        
}










