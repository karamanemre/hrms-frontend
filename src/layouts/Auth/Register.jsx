import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Button, Divider, Form,Segment } from 'semantic-ui-react'

export default function Register() {
  return (
    <div style={{backgroundColor:"white"}}>
      <Grid style={{ marginTop: "8em" ,marginBottom: "8em" ,backgroundColor:"white"}}>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <Segment placeholder>
              <Grid columns={2} relaxed="very" stackable>
                <Grid.Column>
                <Link to="/candidateregister"><Button primary content="Üye Kayıt" icon="signup" size="big" /></Link>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <Link to="/employerregister"><Button primary content="İşveren Kayıt" icon="signup" size="big" /></Link>
                </Grid.Column>
              </Grid>
              <Divider vertical>Or</Divider>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
