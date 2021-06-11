import React from "react";
import "../../EmployerRegister.css";
import {
  Button,
  Form,
  Input,
  Icon,
  Image,
  Label,
  Grid,
} from "semantic-ui-react";

export default function EmployerRegister() {
  return (
    <div className="employerRegisterDiv" style={{}}>
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
                  placeholder="Şirket İsmi"
                  required
                />
                <br />
                <Form.Input
                  fluid
                  icon="hand paper outline"
                  iconPosition="left"
                  placeholder="Web Site"
                  type="website"
                  required
                />
                <br />
              </Form.Group>
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
