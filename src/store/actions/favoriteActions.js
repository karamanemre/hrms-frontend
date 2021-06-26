  
export const ADD_TO_FAVORİTE = "ADD_TO_FAVORİTE"
export const REMOVE_FROM_FAVORİTE = "REMOVE_FROM_FAVORİTE"


export function addToFavorite(jobPosting){
    return {
        type : ADD_TO_FAVORİTE,
        payload: jobPosting
    }
}

export function removeFromFavorite(jobPosting){
    return {
        type : REMOVE_FROM_FAVORİTE,
        payload: jobPosting
    }
}