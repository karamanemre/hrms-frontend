import axios from "axios";

export default class SchoolService{
    getAll(){
        return axios.get("http://localhost:8080/api/school/getAll")
    }

    findById(id){
        return axios.get("http://localhost:8080/api/school/finById?candidateNumber="+id)
    }
}