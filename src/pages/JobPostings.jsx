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

  // {city.map((result) => (
  //     { key: result.id, value:result.city, text: result.city }
  //   ))}
  //   console.log(result.key);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={5}
            style={{ paddingLeft: "8em", marginTop: "5em" }}
          >
            <Card>
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
                      <Checkbox label={result.city} />
                    </div>
                  ))}
                </div>
              </Card.Content>
            </Card>
            <br />
            <Card>
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

            <Card>
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

            <Card>
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
              <Card fluid style={{ marginTop: "5em", paddingRight: "1em" }}>
                <Card.Content>
                  <Card.Header>{result.companyName}</Card.Header>
                  <Card.Meta>{result.jobPosition}</Card.Meta>
                  <Card.Description>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={7}>
                          <label style={{ float: "left" }}>
                            Açıklama: {result.description}
                          </label>
                        </Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={7}>
                          <Card.Description style={{ float: "right" }}>
                            Açık Pozisyon Sayısı: {result.numberOfOpenPosition}
                            <br />
                            Son Başvuru Tarihi: {result.applicaitonDeadline}
                          </Card.Description>
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
