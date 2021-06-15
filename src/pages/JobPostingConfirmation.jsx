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
} from "semantic-ui-react";
import { useFormik } from "formik";
import JobPostingsService from "../services/jobPostingsService";

export default function JobPostingConfirmation() {

  const [jobPostingsIsConfirmationFalse, setJobPostingsIsConfirmationFalse] = useState([]);


  useEffect(() => {
    let jobPostingsService = new JobPostingsService();
    jobPostingsService.getByIsConfirmationFalse().then((result) => setJobPostingsIsConfirmationFalse(result.data.data));
  }, []);

  function setIsConfirmation(id){
    let jobPostingsService = new JobPostingsService();
    jobPostingsService.uptadeIsConfirmation(id);
    alert("Başarıyla Onaylandı") 
  } 





  return (
    <div style={{ marginTop: "3em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}></Grid.Column>
          <Grid.Column width={9}>
            <Card.Group>
              {jobPostingsIsConfirmationFalse.map((result) =>(
                
                  <Card fluid>
                  <Card.Content>
                    <Card.Header>Onay Bekleyen İlan</Card.Header>
                    <Card.Description >
                     
                      <div style={{float:"left"}}> İşveren Id: {result.employerId}</div>
                      <br/>
                      <div style={{float:"left"}}>  Şehir Id: {result.cityId}</div>
                      <br/>
                      <div style={{float:"left"}}>  İş Pozisyonu Id: {result.jobPositionId}</div>
                      <br/>
                      <div style={{float:"left"}}>  Açık Pozisyon Sayısı: {result.numberOfOpenPosition}</div>
                      <br/>
                      <div style={{float:"left"}}>  Açıklama: {result.description}</div>
                      <br/>
                      <div style={{float:"left"}}>  Min. Maaş: {result.minSalary}</div>
                      <br/>
                      <div style={{float:"left"}}>  Maks. Maaş: {result.maxSalary}</div>
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
