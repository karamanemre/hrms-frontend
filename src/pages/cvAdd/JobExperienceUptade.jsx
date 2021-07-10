import React from "react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CoverLetterService from "../../services/coverLetterService";
import { useHistory } from "react-router";
import {
  Button,
  Popup,
  Form,
  Message,
  Grid,
  Dropdown,
  Icon,
  Header,
  TextArea,
  Card,
} from "semantic-ui-react";
import * as Yup from "yup";
import JobExperienceService from "../../services/jobExperienceService";

export default function CoverLatterAdd() {
  const history = useHistory();

  const [jobExperienceDefault, setjobExperienceDefault] = useState([]);

  useEffect(() => {
    let jobExperienceService = new JobExperienceService();
    jobExperienceService
      .findByCandidateNumber(47)
      .then((result) => setjobExperienceDefault(result.data.data));
  }, []);
 

  const validationSchema = Yup.object({
    companyName: Yup.string(),
    candidateNumber: Yup.number(),
    finishYear: Yup.string(),
    startingYear: Yup.date(),
    positionName: Yup.string(),
    adId:Yup.string().required("Lütfen Güncellemek İstediğiniz İlanın Id Numarasını Girin"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "47",
      companyName: "",
      finishYear: "",
      startingYear: "",
      positionName: "",
      adId:"",
    },
    validationSchema,
    onSubmit: (values) => {
      let jobExperienceService = new JobExperienceService();
     
      jobExperienceService
        .uptadeJobExperience(values.adId,values)
        .then(toast.success("İş Tecrübesi Güncellendi"),history.push("/candidatecvadd"));
    },
  }); console.log(values)
 

  return (
    <div style={{ marginTop: "5em" }}>
      <Grid>
        <Grid.Row>
        <Grid.Column width="1">
          
          </Grid.Column>
          <Grid.Column width="4">
            {jobExperienceDefault.map((result)=>(
              <Card style={{color:"#1087EB"}}>
                <Card.Header style={{color:"black"}} >Kayıtlı İş Tecrübeleri</Card.Header>
                <Card.Content >İlan No : {result.id}</Card.Content>
                <Card.Content >Şirket İsmi : {result.companyName}</Card.Content>
                <Card.Content >Pozisyon İsmi: {result.positionName}</Card.Content>
                <Card.Content >Başlangıç Yılı: {result.startingYear}</Card.Content>
                <Card.Content >Bitiş Yılı: {result.finishYear}</Card.Content>
              </Card>
            ))}
          
          </Grid.Column>
          <Grid.Column width="10">
            <form onSubmit={handleSubmit}>
              <Form>
              <Form.Field>
                  <label style={{ float: "left" }}>İlan Id</label>
                  <input
                    type="text"
                    name="adId"
                    placeholder="Güncellemek istediğiniz ilanın id numarası"
                    onChange={handleChange}
                    values={values.adId}
                  />
                  {errors.adId ? errors.adId : null}
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Şirket İsmi</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Şirket İsmi"
                    onChange={handleChange}
                    values={values.companyName}
                  />
                 
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Pozisyon İsmi</label>
                  <input
                    type="text"
                    name="positionName"
                    placeholder="Pozisyon İsmi"
                    onChange={handleChange}
                    values={values.positionName}
                  />
                 
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Başlangıç Yılı</label>
                  <input
                     type="date"
                     format="YYYY/DD/MM"
                    name="startingYear"
                    onChange={handleChange}
                    values={values.startingYear}
                  />
                  
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Bitiş Yılı</label>
                  <input
                     type="date"
                     format="YYYY/DD/MM"
                    name="finishYear"
                    onChange={handleChange}
                    values={values.finishYear}
                  />
                
                </Form.Field>
              </Form>

              <Button
                color="green"
                type="submit"
                style={{ marginBottom: "6em", marginTop: "2em" }}
              >
                Güncelle
              </Button>
            </form>
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
