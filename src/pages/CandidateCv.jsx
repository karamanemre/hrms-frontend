import React from "react";
import { Card, Icon, Image, Grid, Input } from "semantic-ui-react";
import { useState, useEffect } from "react";
import CandidateService from "../services/candidateService";
import SchoolService from "../services/schoolService";
import ProgrammingLanguage from "../services/programmingLanguageService";
import ProgrammingLanguageNameList from "../services/programmingLanguageNameListService";
import TechnologyService from "../services/technologyService";
import LanguageService from "../services/languageService";
import JobExperienceService from "../services/jobExperienceService";
import SocialMediaService from "../services/socialMediaService";

export default function CandidateCv() {
  const [candidate, setcandidate] = useState([]);
  const [photo, setphoto] = useState([]);
  const [candidateLanguage, setcandidateLanguage] = useState([]);
  const [candidateSchool, setcandidateSchool] = useState([]);
  const [programmingLanguage, setprogrammingLanguage] = useState([]);
  const [programmingLanguageNameList, setprogrammingLanguageNameList] =
    useState([]);
  const [technology, settechnology] = useState([]);
  const [language, setlanguage] = useState([]);
  const [jobExperience, setjobExperience] = useState([]);
  const [socialMedia, setsocialMedia] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    let schoolService = new SchoolService();
    let programmingLanguageService = new ProgrammingLanguage();
    let programmingLanguageNameListService = new ProgrammingLanguageNameList();
    let technologyService = new TechnologyService();
    let languageService = new LanguageService();
    let jobExperienceService = new JobExperienceService();
    let socialMediaService = new SocialMediaService();

    candidateService
      .findById(42)
      .then((result) => setcandidate(result.data.data));

    schoolService
      .findById(42)
      .then((result) => setcandidateSchool(result.data.data));

    programmingLanguageService
      .findByCandidateNumberDto(42)
      .then((result) => setprogrammingLanguage(result.data.data));

    technologyService
      .findByCandidateNumberDto(42)
      .then((result) => settechnology(result.data.data));

    languageService
      .findByCandidateNumberDto(42)
      .then((result) => setlanguage(result.data.data));

    jobExperienceService
      .findByCandidateNumber(42)
      .then((result) => setjobExperience(result.data.data));

    socialMediaService
      .findByCandidateNumber(42)
      .then((result) => setsocialMedia(result.data.data));
  }, []);


  

  return (
    <div style={{ marginTop: "5em", padding: "1em 0" }}>
      
      <h2 >Özgeçmiş</h2>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <Card fluid>
              <Card.Header></Card.Header>

              <Card.Content style={{ backgroundColor: "#F9F9F9" }}>
                <div
                  style={{
                    float: "left",
                    paddingTop: "1em",
                    fontSize: "1.4em",
                  }}
                >
                  {" "}
                  <h2 style={{color:"#1087EB"}} >Kişisel Bilgiler</h2>
                </div>
                <br />
                <br />
                <br />
                <br />
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      {candidate.map((result) => (
                        <div>
                          <div style={{ float: "left" }}>
                            {" "}
                            İsim: {result.firstName} {result.lastName}{" "}
                          </div>
                          <br />
                          <div style={{ float: "left" }}>
                            {" "}
                            Doğum tarihi: {result.dateOfBirth}{" "}
                          </div>
                        </div>
                      ))}
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Image src="./logo.png"></Image>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>

              <Card.Content style={{ backgroundColor: "#F9F9F9" }}>
                <div
                  style={{
                    float: "left",
                    paddingTop: "1em",
                    fontSize: "1.4em",
                  }}
                >
                  {" "}
                 <h2 style={{color:"#1087EB"}}> Eğitim Bilgileri</h2>
                </div>
                <br />
                <br />
                <br />
                <br />
                {candidateSchool.map((result) => (
                  <div>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={5}>
                          <div style={{ float: "left" }}> Okul İsmi</div>
                          <br />
                          <br />
                          <div style={{ float: "left" }}>Başlangıç Yılı</div>
                          <br />
                          <br />
                          <div style={{ float: "left" }}>Bitiş Yılı</div>
                        </Grid.Column>
                        <Grid.Column width={11}>
                          <div style={{ float: "left" }}>
                            {" "}
                            {result.schoolNameList.schoolName}
                          </div>
                          <br />
                          <br />
                          <div style={{ float: "left" }}>
                            {result.startingYear}
                          </div>
                          <br />
                          <br />
                          <div style={{ float: "left" }}>
                            {" "}
                            {result.finishYear === null
                              ? "Devam Ediyor"
                              : result.finishYear}
                          </div>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                ))}
                {candidateSchool.map((result) => (
                  <div>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={5}>
                          <div style={{ float: "left" }}> Bölüm</div>
                          <br />
                        </Grid.Column>
                        <Grid.Column width={11}>
                          <div style={{ float: "left" }}>
                            {" "}
                            {result.schoollSection.section}
                          </div>
                          <br />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                ))}
                <br />
              </Card.Content>

              <Card.Content style={{ backgroundColor: "#F9F9F9" }}>
                <div
                  style={{
                    float: "left",
                    paddingTop: "1em",
                    fontSize: "1.4em",
                  }}
                >
                  {" "}
                 <h2 style={{color:"#1087EB"}}>Programlama Dilleri Ve Teknolojiler</h2> 
                </div>
                <br />
                <br />
                <br />
                <br />
                {programmingLanguage.map((result) => (
                  <div>
                    <div style={{ float: "left" }}>
                      {" "}
                      - {result.programminglanguage}{" "}
                    </div>
                    <br />
                  </div>
                ))}
                
                {technology.map((result) => (
                  <div>
                     <div style={{ float: "left" }}> - {result.technology}</div>
                    <br />
                  </div>
                ))}
              </Card.Content>

              <Card.Content style={{ backgroundColor: "#F9F9F9" }}>
                <div
                  style={{
                    float: "left",
                    paddingTop: "1em",
                    fontSize: "1.4em",
                  }}
                >
                  {" "}
                  <h2 style={{color:"#1087EB"}}>Yabancı Diller</h2>
                </div>
                <br />
                <br />
                <br />
                <br />
                {language.map((result) => (
                  <div>
                    <div style={{ float: "left" }}> - {result.language} </div>
                    <br />
                  </div>
                ))}
              </Card.Content>

              <Card.Content style={{ backgroundColor: "#F9F9F9" }}>
                <div
                  style={{
                    float: "left",
                    paddingTop: "1em",
                    fontSize: "1.4em",
                  }}
                >
                  {" "}
                  <h2 style={{color:"#1087EB"}}>Deneyimler</h2> 
                </div>
                <br />
                <br />
                <br />
                <br />
                {jobExperience.map((result) => (
                  <div>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={5}>
                          <div style={{ float: "left" }}> Şirket İsmi:</div>
                          <br />

                          <div style={{ float: "left" }}> Pozisyon:</div>
                          <br />
                          <div style={{ float: "left" }}> Başlangıç Yılı:</div>
                          <br />
                          <div style={{ float: "left" }}> Bitiş Yılı:</div>
                          <br />
                          <br />
                        </Grid.Column>
                        <Grid.Column width={11}>
                          <div style={{ float: "left" }}>
                            {" "}
                            {result.companyName}{" "}
                          </div>
                          <br />

                          <div style={{ float: "left" }}>
                            {" "}
                            {result.positionName}{" "}
                          </div>
                          <br />
                          <div style={{ float: "left" }}>
                            {" "}
                            {result.startingYear}{" "}
                          </div>
                          <br />
                          <div style={{ float: "left" }}>
                            {" "}
                            {result.finishYear === null
                              ? "Devam Ediyor"
                              : result.finishYear}{" "}
                          </div>
                          <br />
                          <br />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                ))}
              </Card.Content>

              <Card.Content style={{ backgroundColor: "#F9F9F9" }}>
                <div
                  style={{
                    float: "left",
                    paddingTop: "1em",
                    fontSize: "1.4em",
                  }}
                >
                  {" "}
                  <h2 style={{color:"#1087EB"}}>Sosyal Medya</h2>
                </div>
                <br />
                <br />
                <br />
                <br />
                {socialMedia.map((result) => (
                  <div>
                    <div style={{ float: "left" }}>
                      <a href={result.linkedin} target="_blank">
                        <Icon name="linkedin" color="blue" /> {result.linkedin}
                      </a>{" "}
                    </div>
                    <br />
                    <br />
                    <div style={{ float: "left" }}>
                      <a href={result.github} target="_blank">
                        <Icon name="github" color="blue" /> {result.github}
                      </a>{" "}
                    </div>
                    <br />
                  </div>
                ))}
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
