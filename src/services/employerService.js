import axios from "axios";

export default class EmployerService{
    getAll(){
        return axios.get("http://localhost:8080/api/employers/getall");
    }

    getByUserId(id){
        return axios.get("http://localhost:8080/api/employers/getByUserId?id="+id);
    }

    getByIdList(id){
        return axios.get("http://localhost:8080/api/jobposting/getByIdList?id="+id);
    }

    employerUptadeConfirmation(id){
        return axios.put("http://localhost:8080/api/employers/updateConfirmation?userId="+id)
    }

    getByUptadeConfirmationWait(){
        return axios.get("http://localhost:8080/api/employers/getByUptadeConfirmationWait")
    }

    employerUptade(values){
        return axios.put("http://localhost:8080/api/employers/uptadeEmployers",values)
    }
}

