import axios from "axios";

export default class JobPostingsService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobposting/getAll")
    }
}