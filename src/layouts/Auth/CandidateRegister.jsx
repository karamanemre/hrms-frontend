import React from "react";
import "../../CandidateRegister.css";
import {
  Button,
  Form,
  Input,
  Icon,
  Image,
  Label,
  Grid,
} from "semantic-ui-react";

export default function CandidateRegister() {
  return (
    <div className="candidateRegisterDiv">
      <div 
        style={{
          paddingTop: "10em",
          paddingBottom: "10em",
          textAlign: "center",
          color: "white",
        }}
      >
        Kayıt Ol
        <Grid style={{ marginTop: "1em" }}>
          <Grid.Row>
            <Grid.Column width={5}></Grid.Column>

            <Grid.Column width={6}>
              <Form.Group>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Ad"
                  required
                />
                <br />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Soyad"
                  required
                />
                <br />
              </Form.Group>
              <Form.Input
                fluid
                icon="id card"
                iconPosition="left"
                placeholder="TC Kimlik No"
                required
              />
              <br />
              <Form.Input
                fluid
                icon="birthday"
                iconPosition="left"
                placeholder="Doğum Yılı"
                type="number"
                required
              />
              <br />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-Posta"
                type="email"
                required
              />
              <br />
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Şifre"
                  type="password"
                  required
                />
                <br />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Şifre Tekrarı"
                  type="password"
                  required
                />
              </Form.Group>
              <br />
              <Form.Checkbox
                inline
                label="Kullanım koşullarını okudum onaylıyorum"
                required
              />
              <br />
              <Button color="primary" fluid size="large">
                Kayıt Ol
              </Button>
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
