import axios from "axios";

export default class ProgrammingLanguageService{
    getAll(){
        return axios.get("http://localhost:8080/api/programminglanguage/getAll")
    }

    findByCandidateNumberDto(id){
        return axios.get("http://localhost:8080/api/programminglanguage/findByDto?candidateId="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/programminglanguage/add",values)
    }


}