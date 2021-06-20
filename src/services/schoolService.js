import axios from "axios";

export default class SchoolService{
    getAll(){
        return axios.get("http://localhost:8080/api/school/getAll")
    }

    findById(id){
        return axios.get("http://localhost:8080/api/school/finById?candidateNumber="+id)
    }

    getAll(values){
        return axios.post("http://localhost:8080/api/school/add",values)
    }

    add(values){
        return axios.post("http://localhost:8080/api/school/add",values)
    }
}