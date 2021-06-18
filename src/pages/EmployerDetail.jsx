import React from "react";
import { useParams } from "react-router";
import { Grid, Card, Button, Icon } from "semantic-ui-react";
import { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import { Link } from "react-router-dom";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setemployer] = useState([]);
  const [employerJobPostingsList, setemployerJobPostingsList] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByUserId(id)
      .then((result) => setemployer(result.data.data[0]));
    employerService
      .getByIdList(id)
      .then((result) => setemployerJobPostingsList(result.data.data));
  }, []);

  return (
    <div style={{ paddingTop: "5em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>

          <Grid.Column width={12}>
            <label style={{ float: "left", paddingBottom: "1em" }}>
              <strong>Şirket Bilgileri</strong>
            </label>
            <Card
              fluid
              style={{ backgroundColor: "#F9F9F9", marginBottom: "8em" }}
            >
              <Card.Content header={employer.companyName} />
              <div style={{ padding: "2em" }}>
                <div style={{ paddingBottom: "1em", float: "left" }}>
                  <strong>Web Site: </strong>
                  {employer.webSite}
                </div>
                <br />
                <br />
                <div style={{ float: "left" }}>
                  <strong>Telefon Numarası: </strong>
                  {employer.phoneNumber}
                </div>
              </div>
              <Card.Content extra>2020</Card.Content>
            </Card>

            <label style={{ float: "left", paddingBottom: "1em" }}>
              <strong>Şirket İş İlanları</strong>
            </label>
            {employerJobPostingsList.map((result) => (
              <Card
                fluid
                style={{ backgroundColor: "#F9F9F9", marginBottom: "2.5em" }}
              >
                <Card.Content header={result.jobPosition} />
                <div style={{ padding: "2em" }}>
                  <div style={{ paddingBottom: "1em", float: "left" }}>
                    <strong>Açıklama: </strong>
                    {result.description}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Açık Pozisyon Sayısı: </strong>
                    {result.numberOfOpenPosition}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Çalışma Yeri: </strong>
                    {result.workplace}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Çalışma Zamanı: </strong>
                    {result.typeOfWork}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Son Başvuru Tarihi: </strong>
                    {result.numberOfOpenPosition}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Min.Maaş: </strong>
                    {result.minSalary}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Maks.Maaş: </strong>
                    {result.maxSalary}
                  </div>
                </div>
                <Card.Content extra>
                  <Link to={"/"}>
                <Button  color="green" fluid>
                    Başvur
                  </Button></Link>
                </Card.Content>
                
              </Card>
            ))}
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
