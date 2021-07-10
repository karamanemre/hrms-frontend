import React from "react";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import EmployerService from "../services/employerService";
import {getAllEmployers} from "../store/actions/employersAction";

export default function EmployersUptadeConfirmation() {
  const [employerUptadeConfirmationWait, setEmployerUptadeConfirmationWait] =
    useState([]);

  const [oldInformation, setOldInformation] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByUptadeConfirmationWait()
      .then((result) => setEmployerUptadeConfirmationWait(result.data.data));
  }, []);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByUptadeConfirmationWait()
      .then((result) => setOldInformation(result.data.data));
  }, []);

  function setOldInformationFunction(id) {
    
  }

  function setUptadeConfirmation(id) {
    let employerService = new EmployerService();
    employerService.employerUptadeConfirmation(id);
    toast.success("Güncelleme Onaylandı");
  }

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllEmployers());
  }, [dispatch]);
  
  const employers = useSelector((state) => state.employers);

  // const { employers } = useSelector((state) => state.employers);

  return (
    <div style={{ marginTop: "3em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <Card
              fluid
              style={{
                position: "fixed",
                width: "30%",
                backgroundColor: "#F9F9F9",
              }}
            >
              <Card.Header
                style={{ padding: "0.5em", color: "green" }}
                textAlign="center"
              >
                Güncelleme Onayı Bekleyen{" "}
                {employerUptadeConfirmationWait.length} Şirket Var
              </Card.Header>
            </Card>
          </Grid.Column>
          <Grid.Column width={9}>
            <Card.Group>
              {employerUptadeConfirmationWait.map((result) => (
                <Card
                  fluid
                  style={{ backgroundColor: "#F9F9F9" }}
                  key={result.id}
                >
                  <Card.Content>
                    <Card.Header>
                      {result.companyName} - Güncelleme Onayı Bekleyen İlan
                    </Card.Header>
                    <Image
                      src="./company.png"
                      size="mini"
                      style={{ float: "right" }}
                    ></Image>

                    <Card.Description>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={7}>
                            <div>
                              <h4 style={{ textAlign: "left" }}>
                                Eski Bilgiler
                              </h4>
                            </div>
                            <br />
                            <div style={{ float: "left" }}>
                              {" "}
                              <strong>Şirket İsmi:</strong> {result.companyName}
                            </div>
                            <br />

                            <div style={{ float: "left" }}>
                              {" "}
                              <strong>Web Site:</strong> {result.webSite}
                            </div>
                            <br />
                            <div style={{ float: "left" }}>
                              {" "}
                              <strong>Telefon Numarası :</strong>{" "}
                              {result.phoneNumber}
                            </div>
                          </Grid.Column>
                          <Grid.Column width={6}>
                            
                              <div>
                                <h4 style={{ textAlign: "left" }}>
                                  Yeni Bilgiler
                                </h4>
                                <div style={{ float: "left" }}>
                                  <strong>Şirket İsmi:</strong>{" "}
                                  {result.uptade_information.companyName}
                                </div>
                                <br />

                                <div style={{ float: "left" }}>
                                  {" "}
                                  <strong>Web Site:</strong>{" "}
                                  {result.uptade_information.webSite}
                                </div>
                                <br />
                                <div style={{ float: "left" }}>
                                  {" "}
                                  <strong>Telefon Numarası :</strong>{" "}
                                  {result.uptade_information.phoneNumber}
                                </div>
                              </div>
                           
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button
                        color="green"
                        onClick={() => setUptadeConfirmation(result.userId)}
                      >
                        Güncellemeyi Onayla
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>

          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
