import axios from "axios";

export default class ProgrammingLanguageNameList{
    getAll(){
        return axios.get("http://localhost:8080/api/programminglanguagenamelist/getAll")
    }

    findById(id){
        return axios.get("http://localhost:8080/api/programminglanguagenamelist/findById?id="+id)
    }
}