import axios from "axios";

export default class SocialMediaService{
    getAll(){
        return axios.get("http://localhost:8080/api/socialMedia/getAll")
    }

    findByCandidateNumber(id){
        return axios.get("http://localhost:8080/api/socialMedia/findByCandidateNumber?id="+id)
    }
}


