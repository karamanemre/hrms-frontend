import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Icon, Menu, Table, Card, GridColumn } from "semantic-ui-react";
import EmployerService from "../services/employerService";
import EmployerDetail from "./EmployerDetail";

export default function Employers() {
  const [employers, setemployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getAll().then((result) => setemployers(result.data.data));
   
  }, []);

  return (
    <div style={{ marginTop: "4em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Card
              fluid
              style={{
                
                backgroundColor: "#F9F9F9",
              }}
            >
              <Card.Header
                style={{ padding: "0.5em", color: "green" }}
                textAlign="center"
              >
                {employers.length} Adet Şirket Görüntülendi
              </Card.Header>
            </Card>
          </Grid.Column>
          <Grid.Column width={10}>
            {employers.map((employer) => (
              <Link to={`/employerdetail/${employer.userId}`}>
              <Card.Group>
                 <Card
                  fluid
                  style={{ backgroundColor: "#F9F9F9",marginBottom:"2.5em" }}
                  color="blue"
                  header={employer.companyName}
                  href="#card-example-link-card"
                  meta={employer.webSite}
                  description="Şirket Hakkında Daha Detaylı Bilgi İçin Tıklayınız"
                />
               
              </Card.Group>
              </Link>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
