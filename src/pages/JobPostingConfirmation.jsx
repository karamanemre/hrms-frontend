import React from "react";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import {
  Button,
  Card,
  Checkbox,
  Image,
  Icon,
  Grid,
  Feed,
  Input,
  Header
} from "semantic-ui-react";
import { useFormik } from "formik";
import JobPostingsService from "../services/jobPostingsService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function JobPostingConfirmation() {

  const [jobPostingsIsConfirmationFalse, setJobPostingsIsConfirmationFalse] = useState([]);
 

  // const {jobPostingItem} = useSelector(state => state.jobPostings)
  // {jobPostingItem.map((cartItem)=>(
  //   console.log(cartItem)
  // ))}

  useEffect(() => {
    let jobPostingsService = new JobPostingsService();
    jobPostingsService.getByIsConfirmationFalse().then((result) => setJobPostingsIsConfirmationFalse(result.data.data));
  }, []);

  function setIsConfirmation(id){
    let jobPostingsService = new JobPostingsService();
    jobPostingsService.uptadeIsConfirmation(id);
    toast.success("İş İlanı Onaylandı");
    
  } 


  return (
    <div style={{ marginTop: "3em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <Card fluid style={{position:"fixed",width:"30%",backgroundColor:"#F9F9F9"}}>
              <Card.Header style={{padding:"0.5em",color:"green"}}  textAlign="center">Onay Bekleyen {jobPostingsIsConfirmationFalse.length} Tane İş İlanı Var</Card.Header>
            </Card>
           </Grid.Column>
          <Grid.Column width={9}>
            <Card.Group>
              {jobPostingsIsConfirmationFalse.map((result) =>(
                
                  <Card fluid style={{backgroundColor:"#F9F9F9"}}>
                    
                  <Card.Content>
                    
                    <Card.Header>{result.companyName} - Onay Bekleyen İlan</Card.Header>
                    <Image src="./company.png" size="mini" style={{float:"right"}}></Image>
                    
                    <Card.Description >
                      <div style={{float:"left"}}> <strong>Şirket İsmi:</strong> {result.companyName}</div>
                      <br/>
                      <div style={{float:"left"}}>  <strong>Şehir İsmi:</strong> {result.city}</div>
                      <br/>
                      <div style={{float:"left"}}>  <strong>İş Pozisyonu:</strong> {result.jobPosition}</div>
                      <br/>
                      <div style={{float:"left"}}>  <strong>Açık Pozisyon Sayısı:</strong> {result.numberOfOpenPosition}</div>
                      <br/>
                      <div style={{float:"left"}}> <strong> Açıklama:</strong> {result.description}</div>
                      <br/>
                      <div style={{float:"left"}}>  <strong>Min. Maaş:</strong> {result.minSalary}</div>
                      <br/>
                      <div style={{float:"left"}}>  <strong>Maks. Maaş:</strong> {result.maxSalary}</div>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button color="green" onClick={()=>setIsConfirmation(result.id)}>İlanı Onayla</Button>
                    </div>
                  </Card.Content>
                </Card>
                
              ))}
             
            </Card.Group>
          </Grid.Column>

          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
