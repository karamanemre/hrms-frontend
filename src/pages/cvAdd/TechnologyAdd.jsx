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
import TechnologyService from "../../services/technologyService";
import TechnologyNameListService from "../../services/technologyNameListService";

export default function Technology() {

  const history = useHistory()


    const [technology, settechnology] = useState([]);

  useEffect(() => {
    let technologyNameListService = new TechnologyNameListService();
    technologyNameListService.getAll().then((result) => settechnology(result.data.data));
  }, []);

  const validationSchema = Yup.object({
    technologyId: Yup.number().required("Zorunlu Alan"),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "47",
      technologyId: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let technologyService = new TechnologyService();
      technologyService
        .add(values)
        .then(toast.success("Teknoloji Eklendi"),history.push("/candidatecvadd"));
    },
  });





  return (
    <div style={{marginTop:"5em"}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3"></Grid.Column>
          <Grid.Column width="10">
            <h2>Teknoloji Ekle</h2>
            <Card fluid style={{ padding: "4em" }}>
              <form onSubmit={handleSubmit}>
                <Form>
                  <Form.Field>
                    <label style={{ float: "left" }}>Teknoloji Ekle</label>
                    <div className="form-group mt-2">
                      <select
                        className="form-control"
                        id="technologyId"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={values.technologyId}
                      >
                        <option value="">--</option>
                        {technology.map((result) => (
                          <option key={result.id} value={result.id}>
                            {result.name}
                          </option>
                        ))}
                      </select>
                      <small id="emailHelp" className="form-text text-danger">
                        {errors.technologyId
                          ? errors.technologyId
                          : null}
                      </small>
                    </div>
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
