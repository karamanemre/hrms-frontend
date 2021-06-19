import axios from "axios";

export default class CandidateService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidate/getall")
    }

    findById(id){
        return axios.get("http://localhost:8080/api/candidate/findById?id="+id)
    }
}