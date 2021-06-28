import axios from "axios";

export default class JobPostingsService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobposting/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobposting/add",values)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobposting/getById?id="+id)
    }

    uptadeIsConfirmation(id){
        return axios.put("http://localhost:8080/api/jobposting/isConfirmation?id="+id)
    }

    getByIsConfirmationFalse(){
        return axios.get("http://localhost:8080/api/jobposting/getAllByIsConfirmationFalse")
    }

    getByIsConfirmation(){
        return axios.get("http://localhost:8080/api/jobposting/getAllByIsConfirmation")
    }

    getAllPageSize(pageNo,pageSize){
        return axios.get("http://localhost:8080/api/jobposting/getAllPageSize?pageNo="+pageNo+"&pageSize="+pageSize)
    }

    uptadeJobPosting(values){
        return axios.get("http://localhost:8080/api/jobposting/uptadeJobPosting",values)
    }

    getByIdDto(id){
        return axios.get("http://localhost:8080/api/jobposting/getByIdDto?id="+id)
    }

    filterWorkplace(id){
        return axios.get(" http://localhost:8080/api/jobposting/filterWorkplace?id="+id)
    }

    filterTypeOfWork(id){
        return axios.get("http://localhost:8080/api/jobposting/filterTypeOfWork?id="+id)
    }

    filterCity(cityFilter){
        return axios.get("http://localhost:8080/api/jobposting/filterCity?cities="+68)
    }

   

    

    
   
}