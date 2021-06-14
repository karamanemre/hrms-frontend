import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
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
import EmployerRegister from "./Auth/EmployerRegister";
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
      <Menu className="naviBar" >
        <Container>
          <Menu.Item style={{padding:"0 2em"}} name="building outline">
           <Link to="/"><Image src="/logo.png" size="tiny"></Image></Link> 
          </Menu.Item>
          <Menu.Item style={{padding:"0 3em"}} ><Link to="/" style={{color:"black"}}>Ana Sayfa</Link></Menu.Item>
          <Menu.Item style={{padding:"0 3em"}} name="building outline">
            <Link to="jobpostings" style={{color:"black"}}> İş Ara</Link>
           
          </Menu.Item>
          <Menu.Item style={{padding:"0 3em"}} name="building outline">
           Profil
          </Menu.Item>
          <Menu.Item style={{padding:"0 3em"}} name="building outline">
           Özgeçmiş
          </Menu.Item>
         
        </Container>
        <div style={{marginRight:"5em"}}>
            {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn} />}
          </div>
      </Menu>
    </div>
  );
}
