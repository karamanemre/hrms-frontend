import React from "react";
import { Button, Menu,Icon } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button basic color="black">
          <Icon name="user" size="large" /> Üye Ol
        </Button>
        <Button onClick={signIn} basic color="blue" style={{ marginLeft: "0.5em" }}>
          <Icon name="sign-in" size="large" />
          Giriş Yap
        </Button>
      </Menu.Item>
    </div>
  );
}
