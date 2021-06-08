import axios from "axios";

export default class SchoolSectionService{
    getAll(){
        return axios.get("http://localhost:8080/api/schoolsection/getAll")
    }
}