import React from "react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CoverLetterService from "../../services/coverLetterService";
import { useHistory } from "react-router";
import {
    Button,Popup,
    Form,
    Message,
    Grid,
    Dropdown,
    Icon,
    Header,
    TextArea,
  } from "semantic-ui-react";
  import * as Yup from "yup";


export default function CoverLatterAdd() {

  
  const history = useHistory()

  const validationSchema = Yup.object({
    coverLetter: Yup.string().required("Zorunlu Alan"),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "47",
      coverLetter: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let coverLetterService = new CoverLetterService();
      coverLetterService.add(values).then(toast.success("Açıklama Eklendi"),history.push("/candidatecvadd"));
    },
  });

  return (
    <div style={{marginTop:"5em"}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3"></Grid.Column>
          <Grid.Column width="10">
            <form onSubmit={handleSubmit}>
              <Form>
                <Form.Field>
                  <label style={{ float: "left" }}>Ön Yazı</label>
                  <textarea
                    type="text"
                    name="coverLetter"
                    placeholder="Ön Yazı"
                    onChange={handleChange}
                    values={values.coverLetter}
                  />
                  {errors.coverLetter ? errors.coverLetter : null}
                </Form.Field>
              </Form>

              <Button
                color="green"
                type="submit"
                style={{ marginBottom: "6em", marginTop: "2em" }}
                
              >
                Ekle
              </Button>
            </form>
          </Grid.Column>
          <Grid.Column width="3"></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
