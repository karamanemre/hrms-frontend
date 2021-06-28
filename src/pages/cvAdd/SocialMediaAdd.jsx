import React from "react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import {
  Button,
  Popup,
  Form,
  Header,
  Card,
  TextArea,
  Grid,
} from "semantic-ui-react";
import * as Yup from "yup";
import SocialMediaService from "../../services/socialMediaService";

export default function SocialMedia() {
  const history = useHistory();

  const validationSchema = Yup.object({
    linkedin: Yup.string().required("Zorunlu Alan"),
    github: Yup.string().required("Zorunlu Alan"),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "47",
      linkedin: "",
      github: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let socialMediaService = new SocialMediaService();
      socialMediaService
        .add(values)
        .then(
          toast.success("Sosyal Medya Eklendi"),
          history.push("/candidatecvadd")
        );
    },
  });

  console.log(values);

  return (
    <div style={{ marginTop: "5em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3"></Grid.Column>
          <Grid.Column width="10">
            <h2>Sosyal Medya Ekle</h2>
            <Card fluid style={{ padding: "4em" }}>
              <form onSubmit={handleSubmit}>
                <Form>
                  <Form.Field>
                    <label style={{ float: "left" }}>Linkedin</label>
                    <input
                      type="text"
                      name="linkedin"
                      placeholder="Linkedin"
                      onChange={handleChange}
                      values={values.linkedin}
                    />
                    {errors.linkedin ? errors.linkedin : null}
                  </Form.Field>

                  <Form.Field>
                    <label style={{ float: "left" }}>Github</label>
                    <input
                      type="text"
                      name="github"
                      placeholder="Github"
                      onChange={handleChange}
                      values={values.github}
                    />
                    {errors.github ? errors.github : null}
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
            </Card>
          </Grid.Column>
          <Grid.Column width="3"></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
