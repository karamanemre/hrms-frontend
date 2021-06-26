import axios from "axios";

export default class SocialMediaService{
    getAll(){
        return axios.get("http://localhost:8080/api/socialMedia/getAll")
    }

    findByCandidateNumber(id){
        return axios.get("http://localhost:8080/api/socialMedia/findByCandidateNumber?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/socialMedia/add",values)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/socialMedia/getById?id="+id)
    }


    uptadeSocialMedia(id,values){
        return axios.put("http://localhost:8080/api/socialMedia/uptadesocialmedia?id="+id,values)
    }
}


