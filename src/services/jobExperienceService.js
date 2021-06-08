import axios from "axios";

export default class JobExperienceService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobexperience/getAll")
    }
}