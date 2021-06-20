import React from "react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Button, Popup, Form, Header,Card, TextArea,Grid} from "semantic-ui-react";
import * as Yup from "yup";
import SchoolService from "../../services/schoolService";
import SchoolNameListService from "../../services/schoolNameListService";
import SchoolSectionService from "../../services/schoolSectionService";
import { useHistory } from "react-router";

export default function SchoolAdd() {

  const history = useHistory()


  const [schoolNameList, setschoolNameList] = useState([]);
  const [sectionNameList, setsectionNameList] = useState([]);

  useEffect(() => {
    let schoolNameListService = new SchoolNameListService();
    schoolNameListService.getAll().then((result) => setschoolNameList(result.data.data));
  }, []);

  useEffect(() => {
    let schoolSectionService = new SchoolSectionService();
    schoolSectionService
      .getAll()
      .then((result) => setsectionNameList(result.data.data));
  }, []);


  const validationSchema = Yup.object({
    schoolId: Yup.number().required("Zorunlu Alan"),
    schoolSectionId: Yup.number().required("Zorunlu Alan"),
    startingYear: Yup.date().required("Zorunlu Alan"),
    candidateNumber: Yup.number().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      candidateNumber: "47",
      schoolId: "",
      schoolSectionId: "",
      startingYear: "",
      finishYear: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let schoolService = new SchoolService();
      schoolService.add(values).then(toast.success("Okul Eklendi"),history.push("/candidatecvadd"));
    },
  });
 
  
  return (
    <div style={{ marginTop: "5em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3"></Grid.Column>
          <Grid.Column width="10">
              <h2>Okul Bilgileri</h2> 
              <Card fluid style={{padding:"4em",backgroundColor:"#F9F9F9"}}>
            <form onSubmit={handleSubmit}>
              <Form>
                <Form.Field>
                <label style={{ float: "left" }}>Okul</label>
                  <div className="form-group mt-2">
                    <select
                      className="form-control"
                      id="schoolId"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={values.schoolId}
                    >
                      <option value="">--</option>
                      {schoolNameList.map((schoolNameList) => (
                        <option key={schoolNameList.id} value={schoolNameList.id}>
                          {schoolNameList.schoolName}
                        </option>
                      ))}
                    </select>
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.schoolId ? errors.schoolId : null}
                    </small>
                  </div>
                </Form.Field>

                <Form.Field>
                <label style={{ float: "left" }}>Bölüm</label>
                  <div className="form-group mt-2">
                    <select
                      className="form-control"
                      id="schoolSectionId"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={values.schoolSectionId}
                    >
                      <option value="">--</option>
                      {sectionNameList.map((sectionNameList) => (
                        <option key={sectionNameList.id} value={sectionNameList.id}>
                          {sectionNameList.section}
                        </option>
                      ))}
                    </select>
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.schoolId ? errors.schoolId : null}
                    </small>
                  </div>
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Başlangıç Yılı</label>
                  <input
                   type="date"
                   format="YYYY/DD/MM"
                    name="startingYear"
                    placeholder="Başlangıç Yılı"
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
                    placeholder="Bitiş Yılı"
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
