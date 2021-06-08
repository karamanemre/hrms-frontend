import axios from "axios";

export default class LanguageNameListService{
    getAll(){
        return axios.get("http://localhost:8080/api/languagenamelist/getAll")
    }
}