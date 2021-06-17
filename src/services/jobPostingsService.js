import axios from "axios";

export default class JobPostingsService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobposting/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobposting/add",values)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobposting/getById?id="+id)
    }

    uptadeIsConfirmation(id){
        return axios.put("http://localhost:8080/api/jobposting/isConfirmation?id="+id)
    }

    getByIsConfirmationFalse(){
        return axios.get("http://localhost:8080/api/jobposting/getAllByIsConfirmationFalse")
    }

    getByIsConfirmation(){
        return axios.get("http://localhost:8080/api/jobposting/getAllByIsConfirmation")
    }
}