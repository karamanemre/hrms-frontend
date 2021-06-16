import React from "react";
import { useState, useEffect } from "react";
import JobPostingsService from "../services/jobPostingsService";
import {
  Button,
  Card,
  Checkbox,
  Image,
  Icon,
  Grid,
  Feed,
  Input,
} from "semantic-ui-react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import { Dropdown } from "react-bootstrap";

export default function JobPostings() {
  const [jobPostings, setjobPostings] = useState([]);
  const [city, setCity] = useState([]);
  const [jobpositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPostingsService = new JobPostingsService();
    jobPostingsService
      .getAll()
      .then((result) => setjobPostings(result.data.data));
  }, []);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCity(result.data.data));
  }, []);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  // let tarih = new Date();
  // let d=tarih.getDay();
  // let m=tarih.getMonth();
  // let y=tarih.getFullYear();
  // let today = y+'/'+m+'/'+ d;
 
  // function setDay(releaseDate){
  //   fark  = new Date(new Date() - releaseDate),
  //   gun  = Math.floor(fark/1000/60/60/24);
    
  // }
  // setDay(new Date("2020-10-10"))
  
 
  
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={5}
            style={{ paddingLeft: "8em", marginTop: "5em" }}
          >
            <Card style={{backgroundColor:"#F9F9F9"}}>
              <Card.Content>
                <Card.Header style={{ textAlign: "left" }}>Şehir</Card.Header>
                
              </Card.Content>
              <Card.Content>
                <div style={{ textAlign: "left" }}>
                  <div>
                    <Input
                      icon="search"
                      iconPosition="left"
                      placeholder="Şehir Ara"
                    />
                  </div>
                  <br />
                  {city.map((result) => (
                    <div style={{ paddingBottom: "1em" }}>
                      <Dropdown>
                        <Dropdown.Item scroll>
                        <Checkbox label={result.city} />
                        </Dropdown.Item>
                      </Dropdown>
                      
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>
            <br />
            <Card style={{backgroundColor:"#F9F9F9"}}>
              <Card.Content>
                <Card.Header style={{ textAlign: "left" }}>
                  Pozisyon
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <div style={{ textAlign: "left" }}>
                  <div>
                    <Input
                      icon="search"
                      iconPosition="left"
                      placeholder="Pozisyon Ara"
                    />
                  </div>
                  <br />
                  {jobpositions.map((result) => (
                    <div style={{ paddingBottom: "1em" }}>
                      <Checkbox label={result.positionName} />
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>

            <br />

            <Card style={{backgroundColor:"#F9F9F9"}}>
              <Card.Content>
                <Card.Header style={{ textAlign: "left" }}>
                  Çalışma Türü
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <div style={{ textAlign: "left" }}>
                  <div>
                    <Checkbox label="Şirket Çalışanı" />
                  </div>
                  <br />
                  <div>
                    <Checkbox label="Uzaktan Çalışma" />
                  </div>
                  <br />
                  <div>
                    <Checkbox label="Freelance (Serbest Çalışma)" />
                  </div>
                </div>
              </Card.Content>
            </Card>
            <br />

            <Card style={{backgroundColor:"#F9F9F9"}}>
              <Card.Content>
                <Card.Header style={{ textAlign: "left" }}>
                  Çalışma Şekli
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <div style={{ textAlign: "left" }}>
                  <div>
                    <Checkbox label="Tam Zamanlı" />
                  </div>
                  <br />
                  <div>
                    <Checkbox label="Part Time (Yarı Zamanlı)" />
                  </div>
                  <br />
                  <div>
                    <Checkbox label="Staj" />
                  </div>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={11} style={{ paddingRight: "2em" }}>
            {jobPostings.map((result) => (
              
              <Card fluid style={{ marginTop: "5em", paddingRight: "1em",backgroundColor:"#F9F9F9" }}>
                
                <Card.Content>
                <Image src="./company.png" size="mini" style={{float:"left"}}></Image>
                  <Card.Header>{result.companyName}</Card.Header>
                  <Card.Meta style={{paddingBottom:"2em"}}>{result.jobPosition}</Card.Meta>
                  <Card.Description>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column>
                          
                          <label style={{ float: "left" }}>
                          <strong> Açıklama:</strong> {result.description}
                          </label>
                          <br/>
                          <label style={{ float: "left" }}>
                          <strong>Çalışma Yeri:</strong> {result.workplace}
                          </label>
                          <br/>
                          <label style={{ float: "left" }}>
                          <strong>Çalışma Zamanı:</strong> {result.typeOfWork}
                          </label>
                          <br/>
                          <label style={{ float: "left" }}>
                          <strong>Açık Pozisyon Sayısı:</strong> {result.numberOfOpenPosition}
                          </label>
                          <br/>
                          <label style={{ float: "left" }}>
                          <strong>Son Başvuru Tarihi:</strong> {result.applicaitonDeadline}
                          </label>
                          <label style={{ float: "right" }}>
                          
  
                         
                          <Icon name="clock outline" color="blue"></Icon>({result.applicaitonDeadline})
                          </label>
                        </Grid.Column>
                        
                        
                        
                      </Grid.Row>
                    </Grid>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      Başvur
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
  
  
    </div>
  );
}
