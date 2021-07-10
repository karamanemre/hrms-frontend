import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
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
import { useHistory } from "react-router";
import EmployerService from "../services/employerService";

export default function LanguageAdd() {
  const history = useHistory();

  const validationSchema = Yup.object({
    userId: Yup.number().required("Zorunlu Alan"),
    companyName: Yup.string(),
    email: Yup.string().email(),
    password: Yup.string().matches(
        "^(?=.*\\d).{4,16}$",
        "Şifreniz küçük harf,büyük harf,sembol ve rakam içermelidir.En az 4 en fazla 16 karakter olmalıdır"
      ),
    phoneNumber: Yup.string().matches(
        "[0-9\\s]{11}",
        "Hatalı Telefon Numarası"
      ),
    webSite: Yup.string(),
    
  });

  const { handleSubmit, handleChange, values, errors,resetForm } = useFormik({
    initialValues: {
      userId: "54",
      companyName: "",
      phoneNumber: "",
      webSite: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let employerService = new EmployerService();
      employerService.employerUptade(values).then(toast.success("Güncelleme İşlemi Başarılı Site Yönetiminin Onayı Bekleniyor"));
      
    },
  });
  console.log(values);

  return (
    <div style={{ marginTop: "5em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3"></Grid.Column>
          <Grid.Column width="10">
            <h2>Bilgileri Güncelle</h2>
            <Card fluid style={{ padding: "4em" }}>
              <form onSubmit={handleSubmit}>
                <Form>
                  <Form.Field>
                    <label style={{ float: "left" }}>Şirket İsmi</label>
                    <div className="form-group mt-2">
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Şirket İsmi"
                        onChange={handleChange}
                        values={values.companyName}
                      ></input>
                    </div>
                  </Form.Field>

                  <Form.Field>
                    <label style={{ float: "left" }}>Web Site</label>
                    <input
                      type="text"
                      name="webSite"
                      placeholder="www.ornek.com"
                      onChange={handleChange}
                      values={values.webSite}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label style={{ float: "left" }}>Telefon Numarası</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Telefon Numarası"
                      onChange={handleChange}
                      values={values.phoneNumber}
                    /> <small id="emailHelp" style={{color:"red"}}>
                    {errors.phoneNumber ? errors.phoneNumber : null}
                   </small>
                  </Form.Field>
                  <Form.Field>
                    <label style={{ float: "left" }}>E-Mail</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Telefon Numarası"
                      onChange={handleChange}
                      values={values.email}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label style={{ float: "left" }}>Şifre</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Şifre"
                      onChange={handleChange}
                      values={values.password}
                    /> <small id="emailHelp" style={{color:"red"}}>
                   {errors.password ? errors.password : null}
                  </small>
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
          <Grid.Column width="3"></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
