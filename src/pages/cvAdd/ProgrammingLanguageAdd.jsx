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
import ProgrammingLanguageNameListService from "../../services/programmingLanguageNameListService";
import ProgrammingLanguageService from "../../services/programmingLanguageService";

export default function ProgrammingLanguageAdd() {

  const history = useHistory()
  
  const [programmingLanguageNameList, setprogrammingLanguageNameList] =
    useState([]);

  useEffect(() => {
    let programmingLanguageNameListService =
      new ProgrammingLanguageNameListService();
    programmingLanguageNameListService
      .getAll()
      .then((result) => setprogrammingLanguageNameList(result.data.data));
  }, []);

  const validationSchema = Yup.object({
    programmingLanguageId: Yup.number().required("Zorunlu Alan"),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "47",
      programmingLanguageId: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let programmingLanguageService = new ProgrammingLanguageService();
      programmingLanguageService
        .add(values)
        .then(toast.success("Programlama Dili Eklendi"),history.push("/candidatecvadd"));
    },
  });

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3"></Grid.Column>
          <Grid.Column width="10">
            <h2>Programlama Dili</h2>
            <Card fluid style={{ padding: "4em", backgroundColor: "#F9F9F9" }}>
              <form onSubmit={handleSubmit}>
                <Form>
                  <Form.Field>
                    <label style={{ float: "left" }}>Programlama Dili</label>
                    <div className="form-group mt-2">
                      <select
                        className="form-control"
                        id="programmingLanguageId"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={values.programmingLanguageId}
                      >
                        <option value="">--</option>
                        {programmingLanguageNameList.map((result) => (
                          <option key={result.id} value={result.id}>
                            {result.programmingLanguageName}
                          </option>
                        ))}
                      </select>
                      <small id="emailHelp" className="form-text text-danger">
                        {errors.programmingLanguageId
                          ? errors.programmingLanguageId
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
