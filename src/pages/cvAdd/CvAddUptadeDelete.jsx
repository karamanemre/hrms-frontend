import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Icon, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import JobExperienceService from "../../services/jobExperienceService";
import CoverLetterService from "../../services/coverLetterService";
import SocialMediaService from "../../services/socialMediaService";

export default function CvAddUptadeDelete() {

    const [jobExperienceDefault, setjobExperienceDefault] = useState([]);

  useEffect(() => {
    let jobExperienceService = new JobExperienceService();
    jobExperienceService
      .findByCandidateNumber(47)
      .then((result) => setjobExperienceDefault(result.data.data));
  }, []);

  const [coverLetterDefault, setcoverLetterDefault] = useState([]);
  

  useEffect(() => {
    let coverLetterService = new CoverLetterService();
    coverLetterService
      .getById(1)
      .then((result) => setcoverLetterDefault(result.data));
  }, []);

  const [socialMediaDefault, setsocialMediaDefault] = useState([]);

  useEffect(() => {
    let socialMediaservice = new SocialMediaService();
    socialMediaservice
      .findByCandidateNumber(50)
      .then((result) => setsocialMediaDefault(result.data.data));
  }, []);



  return (
    <div style={{ marginTop: "5em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>

          <Grid.Column width={4}>
            <Card>
              <Card.Header>
              <p style={{fontSize:"1.3em",float:"left",paddingLeft:"0.5em",paddingTop:"0.5em"}}>Açıklama</p> 
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/candidatecvadd/coverletteradd"><Icon style={{paddingLeft:"1em"}} name="add circle" size="big"></Icon></Link> </div>
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/"><Icon style={{paddingLeft:"1em"}} name="delete" size="big"></Icon></Link> </div>
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/coverletteruptade"><Icon style={{paddingLeft:"1em"}} name="edit" size="big"></Icon></Link> </div>
              </Card.Header>
              <Card.Content >{coverLetterDefault.coverLetter}</Card.Content>
              <Card.Description></Card.Description>
            </Card>
          </Grid.Column>

          <Grid.Column width={4}>
            <Card>
              <Card.Header>
              <p style={{fontSize:"1.3em",float:"left",paddingLeft:"0.5em",paddingTop:"0.5em"}}>Tecrübe</p> 
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/"><Icon style={{paddingLeft:"1em"}} name="add circle" size="big"></Icon></Link> </div>
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/"><Icon style={{paddingLeft:"1em"}} name="delete" size="big"></Icon></Link> </div>
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/"><Icon style={{paddingLeft:"1em"}} name="edit" size="big"></Icon></Link> </div>
                
              </Card.Header>
              {jobExperienceDefault.map((result)=>(
              <Card.Content >
                  Şirket İsmi : {result.companyName} <br/>
                  Pozisyon İsmi: {result.positionName} <br/>
                  Başlangıç Yılı: {result.startingYear} <br/>
                  Bitiş Yılı: {result.finishYear} <br/>
              
              </Card.Content>
              
              ))}
              <Card.Description></Card.Description>
            </Card>
          </Grid.Column>

          <Grid.Column width={4}>
            <Card>
              <Card.Header>
                <p style={{fontSize:"1.3em",float:"left",paddingLeft:"0.5em",paddingTop:"0.5em"}}>Sosyal Medya</p> 
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/"><Icon style={{paddingLeft:"1em"}} name="add circle" size="big"></Icon></Link> </div>
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/"><Icon style={{paddingLeft:"1em"}} name="delete" size="big"></Icon></Link> </div>
                <div style={{display:"inline-block",paddingTop:"0.5em"}}><Link to="/"><Icon style={{paddingLeft:"1em"}} name="edit" size="big"></Icon></Link> </div>
                
                
                
              </Card.Header>
              {socialMediaDefault.map((result)=>(
              <Card.Content >
                  <a  href={result.linkedin}>Linkedin</a><br/>
                  
                  <a href={result.github}>Github</a>
              
              
              </Card.Content>
              
              ))}
              <Card.Description></Card.Description>
            </Card>
          </Grid.Column>

          

          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>

        

        
      </Grid>
    </div>
  );
}
