import React from "react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

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
import LanguageNameListService from "../../services/languageNameListService";
import LanguageService from "../../services/languageService";

export default function CoverLatterAdd() {
  const history = useHistory();

  const [languageDefault, setlanguageDefault] = useState([]);
  const [languageNameList, setlanguageNameList] = useState([]);

  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .findByCandidateNumberDto(47)
      .then((result) => setlanguageDefault(result.data.data));
  }, []);

  useEffect(() => {
    let languageNameListService = new LanguageNameListService();
    languageNameListService
      .getAll()
      .then((result) => setlanguageNameList(result.data.data));
  }, []);

  const validationSchema = Yup.object({
    languageId: Yup.number(),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
    languageLevel: Yup.number()
      .max(5, "Seviye 0-5 arası olmalı")
      .min(0, "Seviye 0-5 arası olmalı"),
    adId:Yup.number().required("Değiştirmek İstediğiniz Dilin Id Numarasını Girin")  
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "47",
      languageId: "",
      languageLevel: "",
      adId:"",
    },
    validationSchema,
    onSubmit: (values) => {
      let languageService = new LanguageService();
      languageService
        .uptadeLanguage(values.adId, values)
        .then(
          toast.success("Dil Güncellendi"),
          history.push("/candidatecvadd")
        );
    },
  });

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="1"></Grid.Column>
          <Grid.Column width="3" style={{ marginTop: "8em" }}>
            <Card style={{ color: "#1087EB" }}>
              <Card.Header style={{ color: "black" }}>
                Kayıtlı Yabancı Dil
              </Card.Header>
              {languageDefault.map((result) =>(
                 <Card.Content>
                  Id : {result.id}
                 <br/>
                 Yabancı Dil : {result.language}
                 <br/>
                 Dil Seviyesi : {result.languageLevel}
               </Card.Content>
              ))}
             
            </Card>
          </Grid.Column>
          <Grid.Column width="11" style={{ marginTop: "5em" }}>
            <h2>Yabancı Dil</h2>
            <Card fluid style={{ padding: "4em", backgroundColor: "#F9F9F9" }}>
              <form onSubmit={handleSubmit}>
                <Form>
                <Form.Field>
                    <label style={{ float: "left" }}>Id</label>
                    <input
                      type="number"
                      name="adId"
                      placeholder="Id"
                      onChange={handleChange}
                      values={values.adId}
                    />
                    {errors.adId ? errors.adId : null}
                  </Form.Field>
                  
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
                        {errors.languageId ? errors.languageId : null}
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
