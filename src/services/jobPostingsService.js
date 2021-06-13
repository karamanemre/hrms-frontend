import axios from "axios";

export default class JobPostingsService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobposting/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobposting/add",values)
    }
}