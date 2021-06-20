import axios from "axios";

export default class LanguageService{
    getAll(){
        return axios.get("http://localhost:8080/api/language/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/language/add",values)
    }

    findByCandidateNumberDto(id){
        return axios.get("http://localhost:8080/api/language/findByCandidateNumberDto?candidateNumber="+id)
    }
}