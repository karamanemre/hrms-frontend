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
      .getById(10)
      .then((result) => setjobExperienceDefault(result.data));
  }, []);

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Zorunlu Alan"),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
    finishYear: Yup.string().required("Zorunlu Alan"),
    startingYear: Yup.date().required("Zorunlu Alan"),
    positionName: Yup.string().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "47",
      companyName: "",
      finishYear: "",
      startingYear: "",
      positionName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let jobExperienceService = new JobExperienceService();
      jobExperienceService
        .uptadeJobExperience(10,values)
        .then(toast.success("İş Tecrübesi Güncellendi"),history.push("/candidatecvadd"));
    },
  });
 

  return (
    <div style={{ marginTop: "5em" }}>
      <Grid>
        <Grid.Row>
        <Grid.Column width="1">
          
          </Grid.Column>
          <Grid.Column width="4">
          <Card style={{color:"#1087EB"}}>
              <Card.Header style={{color:"black"}} >Yüklü İş Tecrübesi</Card.Header>
              <Card.Content >Şirket İsmi : {jobExperienceDefault.companyName}</Card.Content>
              <Card.Content >Pozisyon İsmi: {jobExperienceDefault.positionName}</Card.Content>
              <Card.Content >Başlangıç Yılı: {jobExperienceDefault.startingYear}</Card.Content>
              <Card.Content >Bitiş Yılı: {jobExperienceDefault.finishYear}</Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width="10">
            <form onSubmit={handleSubmit}>
              <Form>
                <Form.Field>
                  <label style={{ float: "left" }}>Şirket İsmi</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Şirket İsmi"
                    onChange={handleChange}
                    values={values.companyName}
                  />
                  {errors.companyName ? errors.companyName : null}
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
                  {errors.positionName ? errors.positionName : null}
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
                  {errors.startingYear ? errors.startingYear : null}
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
                  {errors.finishYear ? errors.finishYear : null}
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
