import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  GridColumn,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Segment,
  Dropdown,
  Menu,
  Button,
} from "semantic-ui-react";
import "../Header.css";
import JobPostings from "../pages/JobPostings";
import Navi from "./Navi";

export default function Head() {
  return (
    <header>
      <div className="dropDownHeader">
        <div  className="dropDownMenuDiv">
        <Dropdown pointing className='link item ' text="Adaylar İçin" >
          <Dropdown.Menu className="dropDownMenu">
            <Dropdown.Item icon="caret right" ><Link  to="/jobpostings">İş Başvurusu Yap</Link></Dropdown.Item>
            <Dropdown.Item icon="caret right" text="Şirketler"><Link  to="/employers">Şirketler</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown pointing className='link item ' style={{paddingLeft:"3em"}} text="İşveren İçin">
          <Dropdown.Menu className="dropDownMenu" >
            <Dropdown.Item  icon="caret right" ><Link  to="/jobpostings">İlan Yayınla</Link></Dropdown.Item>
            <Dropdown.Item icon="caret right" text="Şirketler"><Link  to="/employers">Açık Cv Havuzunu Gör</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>

      <div className="headDiv">
        <Header as="h2" icon textAlign="center" className="usersLogo">
          <Icon name="users" circular />
          <Header.Content>HRMS</Header.Content>
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header textAlign="center">
                <Header.Content className="search">
                  {"Kariyeriniz için iş aramaya başlayın..."}
                </Header.Content>
                <Segment inverted>
                  <Input inverted fluid size="huge" placeholder="Search..." />
                </Segment>
              </Header>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image
                className="headImage"
                centered
                size="large"
                src="/head.png"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </header>
  );
}
