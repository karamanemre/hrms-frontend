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
  const [socialMediaDefault, setsocialMediaDefault] = useState([]);

  useEffect(() => {
    let socialMediaservice = new SocialMediaService();
    socialMediaservice
      .findByCandidateNumber(50)
      .then((result) => setsocialMediaDefault(result.data.data));
  }, []);

  const validationSchema = Yup.object({
    linkedin: Yup.string().required("Zorunlu Alan"),
    github: Yup.string().required("Zorunlu Alan"),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "50",
      linkedin: "",
      github: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let socialMediaService = new SocialMediaService();
      socialMediaService
        .uptadeSocialMedia(1, values)
        .then(
          toast.success("Sosyal Medya Eklendi"),
          history.push("/candidatecvadd")
        );
    },
  });

  return (
    <div style={{ marginTop: "5em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="5">
            <Card fluid style={{ color: "#1087EB", marginTop: "3em" }}>
              <Card.Header style={{ color: "black" }}>
                Güncel Sosyal Medya
              </Card.Header>
              {socialMediaDefault.map((result) => (
                <div>
                  <Card.Content>
                    <a href={result.linkedin}>Linkedin : {result.linkedin}</a>
                  </Card.Content>
                  <Card.Content>
                    <a href={result.github}>Github : {result.github}</a>
                  </Card.Content>
                </div>
              ))}
            </Card>
          </Grid.Column>
          <Grid.Column width="9">
            <h2>Sosyal Medya Güncelle</h2>
            <Card fluid style={{ padding: "4em", backgroundColor: "#F9F9F9" }}>
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
                  Güncelle
                </Button>
              </form>
            </Card>
          </Grid.Column>
          <Grid.Column width="1"></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
