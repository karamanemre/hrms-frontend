import React from 'react'
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Button, Popup, Form, Header,Card, TextArea,Grid} from "semantic-ui-react";
import * as Yup from "yup";
import LanguageNameListService from '../../services/languageNameListService';
import LanguageService from '../../services/languageService';
import { useHistory } from "react-router";

export default function LanguageAdd() {

  const history = useHistory()
    const [languageNameList, setlanguageNameList] = useState([]);

    useEffect(() => {
        let languageNameListService = new LanguageNameListService();
        languageNameListService.getAll().then((result) => setlanguageNameList(result.data.data));
      }, []);
     

      const validationSchema = Yup.object({
        languageId: Yup.number().required("Zorunlu Alan"),
        candidateNumber: Yup.number().required("Zorunlu Alan"),
        languageLevel: Yup.number().max(5,"Seviye 0-5 arası olmalı").min(0,"Seviye 0-5 arası olmalı").required("Zorunlu Alan")
      });
    

      const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
          candidateNumber: "47",
          languageId: "",
          languageLevel: "",
         
        },
        validationSchema,
        onSubmit: (values) => {
          let languageService = new LanguageService();
          languageService.add(values).then(toast.success("Dil Eklendi"),history.push("/candidatecvadd"));
        },
      });



    return (
        <div style={{marginTop:"5em"}}>
            <Grid>
        <Grid.Row>
          <Grid.Column width="3"></Grid.Column>
          <Grid.Column width="10" >
            <h2>Yabancı Dil</h2>
            <Card fluid style={{ padding: "4em" }}>
              <form onSubmit={handleSubmit}>
                <Form>
                  <Form.Field>
                    <label style={{ float: "left" }}>Yabancı Dil</label>
                    <div className="form-group mt-2">
                      <select
                        className="form-control"
                        id="languageId"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={values.languageId}
                      >
                        <option value="">--</option>
                        {languageNameList.map((result) => (
                          <option key={result.id} value={result.id}>
                            {result.languageName}
                          </option>
                        ))}
                      </select>
                      <small id="emailHelp" className="form-text text-danger">
                        {errors.languageId
                          ? errors.languageId
                          : null}
                      </small>
                    </div>
                  </Form.Field>

                  <Form.Field>
                  <label style={{ float: "left" }}>Dil Seviyesi</label>
                  <input
                   type="number"
                   min="0"
                   max="5"
                    name="languageLevel"
                    placeholder="Dil Seviyesi"
                    onChange={handleChange}
                    values={values.languageLevel}
                  />
                  {errors.languageLevel ? errors.languageLevel : null}
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
    )
}
