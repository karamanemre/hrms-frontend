import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Button,
  Container,
  Menu,
  Image,
  Icon,
  Divider,
  Input,
  Segment,
} from "semantic-ui-react";
import "../Navi.css";
import Footer from "./Footer";
import Head from "./Head";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div className="naviBarDiv">
      <Menu className="naviBar">
        <Container>
          <Menu.Item name="building outline">
            <Image src="/logo.png" size="tiny"></Image>
          </Menu.Item>
          <Menu.Item name="Ana Sayfa"></Menu.Item>
          <Menu.Item name="building outline">
            <Icon name="search" size="large" />
            İş Ara
          </Menu.Item>
          <Menu.Item position="right">
            {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}