import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu,Icon } from "semantic-ui-react";
import EmployerRegister from "./Auth/EmployerRegister";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Link to="/register"><Button  basic color="black">
          <Icon name="user" size="large" /> Üye Ol
        </Button></Link>
        <Button onClick={signIn} basic color="blue" style={{ marginLeft: "0.5em" }}>
          <Icon name="sign-in" size="large" />
          Giriş Yap
        </Button>
      </Menu.Item>
    </div>
  );
}
