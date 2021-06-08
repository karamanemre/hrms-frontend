import React from "react";
import { Button, Container, Menu, Image, Icon } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer";

export default function Navi() {
  return (
    <div>
      <Menu fixed="top" className="naviBar">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="building outline" size="large" />
            HRMS
          </Menu.Item>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="building outline">
            <Icon name="search" size="large" />
            İş Ara
          </Menu.Item>
          <Menu.Menu className="signButton" position="right">
            <Button >Üye Girişi</Button>
            <Button primary>Giriş Yap</Button>
            <Button primary>İşveren Girişi</Button>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
