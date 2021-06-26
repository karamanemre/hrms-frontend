import axios from "axios";

export default class TechnologyService{
    getAll(){
        return axios.get("http://localhost:8080/api/technology/getAll")
    }

    findByCandidateNumberDto(id){
        return axios.get("http://localhost:8080/api/technology/findByDto?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/technology/add",values)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/technology/getById?id=",id)
    }

    getByIdDto(id){
        return axios.get("http://localhost:8080/api/technology/getByIdDto?id=",id)
    }
    uptadeTechnology(id,value){
        return axios.put("http://localhost:8080/api/technology/uptadeTechnology?id="+id,value)
    }
   
}