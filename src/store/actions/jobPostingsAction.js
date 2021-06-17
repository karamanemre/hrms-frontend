

export const  CONFİRM_POSTİNG = "CONFİRM_POSTİNG"

export function confirmPosting(jobPosting){
    return{
        type:CONFİRM_POSTİNG,
        payload:jobPosting
    }
}
