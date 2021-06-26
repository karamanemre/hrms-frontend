import axios from "axios";

export default class JobExperienceService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobexperience/getAll")
    }

    findByCandidateNumber(id){
        return axios.get("http://localhost:8080/api/jobexperience/findByCandidateNumber?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobexperience/add",values)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobexperience/getById?id="+id)
    }

    uptadeJobExperience(id,values){
        return axios.put("http://localhost:8080/api/jobexperience/uptadejobExperience?id="+id,values)
    }
}


