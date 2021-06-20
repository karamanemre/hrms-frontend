import React, { Component } from "react";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Popup,
  Form,
  Image,Modal,Card,Grid
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LanguageService from "../services/languageService";

import TechnologyService from "../services/technologyService";
import { CardGroup } from "react-bootstrap";



export default function CandidateCvAdd() {

    return (
      <div style={{marginTop:"5em"}}>

        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>

            </Grid.Column>
            <Grid.Column width={11}>
              <h3 style={{float:"left",fontSize:"2em"}}>Cv Ekle</h3>
                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvcoverletteradd.jpg"></Image>
                  <Card.Content><Link to="/candidatecvadd/coverletteradd"><Button color="green"  style={{position:"absolute",bottom:"10em",left:"0",width:"300px",height:"50px"}}>Ön Yazı Ekle </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvuniversityadd.jpg"></Image>
                  <Card.Content><Link to="/candidatecvadd/schooladd"><Button color="green" size="big" style={{position:"absolute",bottom:"10em",left:"0",width:"300px",height:"50px"}}>Okul Ekle </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./javadeveloper.png"></Image>
                  <Card.Content><Link to="/candidatecvadd/programminglanguageadd"><Button color="green" size="big" style={{position:"absolute",bottom:"10em",left:"0",width:"300px",height:"50px"}}>Programlama Dili Ekle </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvlanguageadd.jpg"></Image>
                  <Card.Content><Link to="/candidatecvadd/languageadd"><Button color="green" size="big" style={{position:"absolute",bottom:"10em",left:"0",width:"300px",height:"50px"}}>Yabancı Dil Ekle </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvtechnologyadd.png"></Image>
                  <Card.Content><Link to="/candidatecvadd/technologyadd"><Button color="green" size="big" style={{position:"absolute",bottom:"10em",left:"0",width:"300px",height:"50px"}}>Teknoloji Ekle </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvjobexperienceadd.jpg"></Image>
                  <Card.Content><Link to="/candidatecvadd/jobexperienceadd"><Button color="green" size="big" style={{position:"absolute",bottom:"10em",left:"0",width:"300px",height:"50px"}}>İş Tecrübesi Ekle </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvsocialmediaadd.png"></Image>
                  <Card.Content><Link to="/candidatecvadd/socialmediaadd"><Button color="green" size="big" style={{position:"absolute",bottom:"10em",left:"0",width:"300px",height:"50px"}}>Sosyal Medya Ekle </Button></Link></Card.Content>
                </Card>

                

               



               

                
            </Grid.Column>
            <Grid.Column width={1}>

</Grid.Column>
          </Grid.Row>
        </Grid>
       
        
       
        
        
        
       
        
      </div>
    );
}
  

