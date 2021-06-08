import axios from "axios";

export default class ProgrammingLanguageNameList{
    getAll(){
        return axios.get("http://localhost:8080/api/programminglanguagenamelist/api/getAll")
    }
}