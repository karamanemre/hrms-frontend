import React from "react";
import { Button, Checkbox, Form, Grid, Select } from "semantic-ui-react";
import { useState, useEffect } from "react";
import CityService from "../services/cityService";

export default function EmployerJobPostingsPages() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setstate(result.data.data));
  }, []);

  

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            İş İlanı Yayınla
            <Form.Group widths="equal">
              <Form.Input
                fluid
                icon="money bill alternate outline"
                iconPosition="left"
                placeholder="Minumum Maaş"
                required
              />
              <br />
              <Form.Input
                fluid
                icon="money bill alternate outline"
                iconPosition="left"
                placeholder="Maksimum Maaş"
                required
              />
              <br />
            </Form.Group>
            <Form.Input
              fluid
              icon="id card"
              iconPosition="left"
              placeholder="Açık Pozisyon Sayısı"
              type="number"
              required
            />
            <br />
            <Form.Input
              fluid
              icon="calendar"
              iconPosition="left"
              placeholder="Son Başvuru Tarihi"
              type="date"
              required
            />
            <br />
            {/* <Form.Field
              fluid
              control={Select}
              options={options}
              placeholder="Gender"
            /> */}
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
