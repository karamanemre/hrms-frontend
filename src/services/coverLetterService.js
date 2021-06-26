import axios from "axios";

export default class CoverLetterService{
    getAll(){
        return axios.get("http://localhost:8080/api/coverletter/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/coverletter/add",values)
    }

    uptadeCoverLetter(id,values){
        return axios.put("http://localhost:8080/api/coverletter/uptadeCoverLetter?id="+id,values)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/coverletter/getById?id="+id)
    }
}