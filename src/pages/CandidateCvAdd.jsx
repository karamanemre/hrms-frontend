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




export default function CandidateCvAdd() {

    return (
      <div style={{marginTop:"5em"}}>

        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>

            </Grid.Column>
            <Grid.Column width={10}>
              <h3 style={{float:"left",fontSize:"2em"}}>Cv Ekle</h3>
                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvcoverletteradd.jpg"></Image>
                  <Card.Content><Link to="/candidatecvadd/coverletteradd"><Button color="green"  style={{position:"absolute",bottom:"18em",left:"0",width:"300px",height:"50px"}}>Ön Yazı Ekle </Button></Link></Card.Content>
                  <Card.Content><Link to="coverletteruptade"><Button color="green"  style={{position:"absolute",bottom:"13em",left:"0",width:"300px",height:"50px"}}>Güncelle </Button></Link></Card.Content>
                  <Card.Content><Link to=""><Button color="green"  style={{position:"absolute",bottom:"8em",left:"0",width:"300px",height:"50px"}}>Sil </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvuniversityadd.jpg"></Image>
                  <Card.Content><Link to="/candidatecvadd/schooladd"><Button color="green" size="big" style={{position:"absolute",bottom:"14em",left:"0",width:"300px",height:"50px"}}>Okul Ekle </Button></Link></Card.Content>
                  <Card.Content><Link to="schooluptade"><Button color="green"  style={{position:"absolute",bottom:"13em",left:"0",width:"300px",height:"50px"}}>Güncelle </Button></Link></Card.Content>
                  <Card.Content><Link to=""><Button color="green"  style={{position:"absolute",bottom:"8em",left:"0",width:"300px",height:"50px"}}>Sil </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./javadeveloper.png"></Image>
                  <Card.Content><Link to="/candidatecvadd/programminglanguageadd"><Button color="green" size="big" style={{position:"absolute",bottom:"14em",left:"0",width:"300px",height:"50px"}}>Programlama Dili Ekle </Button></Link></Card.Content>
                  <Card.Content><Link to="programminglanguageuptade"><Button color="green"  style={{position:"absolute",bottom:"13em",left:"0",width:"300px",height:"50px"}}>Güncelle </Button></Link></Card.Content>
                  <Card.Content><Link to=""><Button color="green"  style={{position:"absolute",bottom:"8em",left:"0",width:"300px",height:"50px"}}>Sil </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvlanguageadd.jpg"></Image>
                  <Card.Content><Link to="/candidatecvadd/languageadd"><Button color="green" size="big" style={{position:"absolute",bottom:"14em",left:"0",width:"300px",height:"50px"}}>Yabancı Dil Ekle </Button></Link></Card.Content>
                  <Card.Content><Link to="/languageuptade"><Button color="green"  style={{position:"absolute",bottom:"13em",left:"0",width:"300px",height:"50px"}}>Güncelle </Button></Link></Card.Content>
                  <Card.Content><Link to=""><Button color="green"  style={{position:"absolute",bottom:"8em",left:"0",width:"300px",height:"50px"}}>Sil </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvtechnologyadd.png"></Image>
                  <Card.Content><Link to="/candidatecvadd/technologyadd"><Button color="green" size="big" style={{position:"absolute",bottom:"14em",left:"0",width:"300px",height:"50px"}}>Teknoloji Ekle </Button></Link></Card.Content>
                  <Card.Content><Link to="/technologyuptade"><Button color="green"  style={{position:"absolute",bottom:"13em",left:"0",width:"300px",height:"50px"}}>Güncelle </Button></Link></Card.Content>
                  <Card.Content><Link to=""><Button color="green"  style={{position:"absolute",bottom:"8em",left:"0",width:"300px",height:"50px"}}>Sil </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvjobexperienceadd.jpg"></Image>
                  <Card.Content><Link to="/candidatecvadd/jobexperienceadd"><Button color="green" size="big" style={{position:"absolute",bottom:"14em",left:"0",width:"300px",height:"50px"}}>İş Tecrübesi Ekle </Button></Link></Card.Content>
                  <Card.Content><Link to="/jobexperienceuptade"><Button color="green"  style={{position:"absolute",bottom:"13em",left:"0",width:"300px",height:"50px"}}>Güncelle </Button></Link></Card.Content>
                  <Card.Content><Link to=""><Button color="green"  style={{position:"absolute",bottom:"8em",left:"0",width:"300px",height:"50px"}}>Sil </Button></Link></Card.Content>
                </Card>

                <Card fluid style={{position:"relative",height:"400px"}} >
                  <Image style={{height:"400px"}} src="./cvsocialmediaadd.png"></Image>
                  <Card.Content><Link to="/candidatecvadd/socialmediaadd"><Button color="green" size="big" style={{position:"absolute",bottom:"14em",left:"0",width:"300px",height:"50px"}}>Sosyal Medya Ekle </Button></Link></Card.Content>
                  <Card.Content><Link to="/socialmediauptade"><Button color="green"  style={{position:"absolute",bottom:"13em",left:"0",width:"300px",height:"50px"}}>Güncelle </Button></Link></Card.Content>
                  <Card.Content><Link to=""><Button color="green"  style={{position:"absolute",bottom:"8em",left:"0",width:"300px",height:"50px"}}>Sil </Button></Link></Card.Content>
                </Card>
                
            </Grid.Column>
            <Grid.Column width={3}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
       
        
      </div>
    );
}
  

