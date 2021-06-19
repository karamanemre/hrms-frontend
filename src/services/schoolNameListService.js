import axios from "axios";

export default class SchoolNameListService{
    getAll(){
        return axios.get("http://localhost:8080/api/schoolNameList/getAll")
    }

    findById(id){
        return axios.get("http://localhost:8080/api/schoolNameList/findById?id="+id)
    }
}