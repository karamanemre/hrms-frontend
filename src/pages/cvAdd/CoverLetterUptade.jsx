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

export default function CoverLatterAdd() {
  const history = useHistory();

  const [coverLetterDefault, setcoverLetterDefault] = useState([]);
  console.log(coverLetterDefault);

  useEffect(() => {
    let coverLetterService = new CoverLetterService();
    coverLetterService
      .getById(1)
      .then((result) => setcoverLetterDefault(result.data));
  }, []);

  const validationSchema = Yup.object({
    coverLetter: Yup.string().required("Zorunlu Alan"),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "50",
      coverLetter: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let coverLetterService = new CoverLetterService();
      coverLetterService
        .uptadeCoverLetter(1, values)
        .then(
          toast.success("Açıklama Güncellendi"),
          history.push("/candidatecvadd")
        );
      // coverLetterService
      // .getById(1)
      // .then((result) => setcoverLetterDefault(result.data.data));
    },
  });
  console.log(values);

  return (
    <div style={{ marginTop: "5em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="6">
            <Card style={{color:"#1087EB"}}>
              <Card.Header style={{color:"black"}} >Yüklü Ön Yazı</Card.Header>
              <Card.Content >{coverLetterDefault.coverLetter}</Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width="8">
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
                //hjsajkdgkjsadjsad
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
