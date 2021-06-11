import React from "react";
import { useState, useEffect } from "react";
import { Grid, Icon, Menu, Table, Card, GridColumn } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function Employers() {
  const [employers, setemployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getAll().then((result) => setemployers(result.data.data));
  }, []);

  return (
    <div style={{ marginTop: "4em" }}>
      <Grid >
        <Grid.Row>
          <Grid.Column width={4}>esdfsed</Grid.Column>
          <Grid.Column width={10}>
            {employers.map((product) => (
              <Card.Group >
                <Card
                  fluid
                  
                  color="blue"
                  header={product.companyName}
                  href="#card-example-link-card"
                  meta={product.webSite}
                  description="Şirket Hakkında Daha Detaylı Bilgi İçin Tıklayınız"
                />
              </Card.Group>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
