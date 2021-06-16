import React from "react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";

import {
  Button,
  Form,
  Message,
  Grid,
  Dropdown,
  Icon,
  Header,
  TextArea
} from "semantic-ui-react";
import * as Yup from "yup";
import JobPostingService from "../services/jobPostingsService";
import JobPositionService from "../services/jobPositionService";
import CityService from "../services/cityService";
import { useHistory } from "react-router";

const options = [{ text: "Tam Zamanlı" }, { text: "Yarı Zamanlı" }];

const options2 = [{ text: "İş yerinde" }, { text: "Uzaktan" }];

export default function JobPostingsAdd() {
  const [city, setcity] = useState([]);
  const [jobpositions, setJobPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setcity(result.data.data));
  }, []);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const validationSchema = Yup.object({
    maxSalary: Yup.number().required("Zorunlu Alan"),
    minSalary: Yup.number().required("Zorunlu Alan"),
    numberOfOpenPosition: Yup.string().required("Zorunlu Alan"),
    description: Yup.string().required("Zorunlu Alan"),
    workplace: Yup.string().required("Zorunlu Alan"),
    typeOfWork: Yup.string().required("Zorunlu Alan"),
    employerId: Yup.number().required("Zorunlu Alan"),
    applicaitonDeadline: Yup.string().required("Zorunlu Alan"),
    cityId: Yup.number().required("Zorunlu Alan"),
    jobPositionId: Yup.number().required("Zorunlu Alan"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      maxSalary: "",
      minSalary: "",
      description: "",
      applicaitonDeadline: "",
      workplace: "",
      employerId: "52",
      cityId: "",
      jobPositionId: "",
      typeOfWork: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let jobPostingService = new JobPostingService();
      jobPostingService.add(values).then(alert("Başarıyla eklendi"));
    },
  });

  return (
    <div >
      <div style={{backgroundColor:"#F9F9F9"}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <Header
              as="h2"
              icon
              textAlign="center"
              style={{ marginTop: "3em", marginBottom: "2em" }}
            >
              <Header.Content>İş İlanı Ekle</Header.Content>
            </Header>
            <div style={{width:"auto"}}>
            <form onSubmit={handleSubmit}>
            
              <Form>
                <Form.Field>
                  <label style={{ float: "left" }}>Pozisyon</label>
                  <div className="form-group mt-2">
                    <select
                      className="form-control"
                      id="jobPositionId"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={values.jobPositionId}
                    >
                      <option value="">--</option>
                      {jobpositions.map((jobposition) => (
                        <option key={jobposition.id} value={jobposition.id}>
                          {jobposition.positionName}
                        </option>
                      ))}
                    </select>
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.jobPositionId ? errors.jobPositionId : null}
                    </small>
                  </div>
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Şehir</label>
                  <div className="form-group mt-2">
                    <select
                      className="form-control"
                      id="cityId"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={values.cityId}
                    >
                      <option value="">--</option>
                      {city.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.city}
                        </option>
                      ))}
                    </select>
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.cityId ? errors.cityId : null}
                    </small>
                  </div>
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Çalışma Zamanı</label>
                  <div className="form-group mt-2">
                    <select
                      className="form-control"
                      id="workplace"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={values.workplace}
                    >
                      <option value="">--</option>
                      {options.map((options) => (
                        <option key={options.text} value={options.text}>
                          {options.text}
                        </option>
                      ))}
                    </select>
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.workplace && errors.workplace}
                    </small>
                  </div>
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Çalışma Yeri</label>
                  <div className="form-group mt-2">
                    <select
                      className="form-control"
                      id="typeOfWork"
                      aria-describedby="emailHelp"
                      onChange={handleChange}
                      value={values.typeOfWork}
                    >
                      <option value="">--</option>
                      {options2.map((options) => (
                        <option key={options.text} value={options.text}>
                          {options.text}
                        </option>
                      ))}
                    </select>
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.workplace && errors.workplace}
                    </small>
                  </div>
                </Form.Field>
                
                <Form.Field>
                  <label style={{ float: "left" }}>Max Ücret</label>
                  <input
                    type="text"
                    name="maxSalary"
                    placeholder="Max. Ücret"
                    onChange={handleChange}
                    values={values.maxSalary}
                  />
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Min Ücret</label>
                  <input
                    type="text"
                    name="minSalary"
                    placeholder="Min. Ücret"
                    onChange={handleChange}
                    values={values.minSalary}
                  />
                </Form.Field>

                

                <Form.Field>
                  <label style={{ float: "left" }}>Son Başvuru Tarihi</label>
                  <input
                    type="date"
                    format="YYYY/DD/MM"
                    name="applicaitonDeadline"
                    placeholder="Son Başvuru Tarihi"
                    onChange={handleChange}
                    values={values.applicaitonDeadline}
                  />
                  {errors.applicaitonDeadline
                    ? errors.applicaitonDeadline
                    : null}
                    
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Açık Pozisyon Sayısı</label>
                  <input
                    type="text"
                    name="numberOfOpenPosition"
                    placeholder="Açık pozisyon sayısı"
                    onChange={handleChange}
                    values={values.numberOfOpenPosition}
                   
                  />
                  {errors.numberOfOpenPosition
                    ? errors.numberOfOpenPosition
                    : null}
                </Form.Field>

                <Form.Field>
                  <label style={{ float: "left" }}>Açıklama</label>
                  <textarea
                    type="text"
                    label='About'
                    name="description"
                    placeholder="Açıklaması"
                    onChange={handleChange}
                    values={values.description}
                  />
                  {errors.description ? errors.description : null}
                </Form.Field>
              </Form>
             
              <Button
                primary
                type="submit"
                style={{ marginBottom: "6em", marginTop: "2em" }}
              >
                Yayınla
              </Button>
            </form>
            </div>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      
    </div>
  );
}
