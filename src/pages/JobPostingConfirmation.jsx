import React from "react";
import { useState, useEffect } from "react";
import * as Yup from "yup";
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
import { useFormik } from "formik";
import JobPostingsService from "../services/jobPostingsService";
import JobPostingService from "../services/jobPostingsService";
export default function JobPostingConfirmation() {
  const [jobPostings, setjobPostings] = useState([]);

  useEffect(() => {
    let jobPostingsService = new JobPostingsService();
    jobPostingsService
      .getAll()
      .then((result) => setjobPostings(result.data.data));
  }, []);


  let deger = {
    maxSalary: jobPostings.maxSalary,
    minSalary: jobPostings.minSalary,
    description: jobPostings.description,
    applicaitonDeadline: jobPostings.applicaitonDeadline,
    workplace: jobPostings.workplace,
    employerId: jobPostings.employerId,
    cityId: jobPostings.cityId,
    jobPositionId: jobPostings.jobPositionId,
    typeOfWork: jobPostings.typeOfWork, // backende put ekle
    isConfirmation: true,

  }

  console.log(jobPostings[0].companyName)


  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={5}
            style={{ paddingLeft: "8em", marginTop: "5em" }}
          >{jobPostings.length} Tane Onay Bekleyen İlan Var</Grid.Column>
          <Grid.Column width={9}>
            {jobPostings.map((result) => (
              <Card fluid style={{ marginTop: "5em"}}>
                <Card.Content>
                  <Card.Header>{result.companyName}</Card.Header>
                  <Card.Meta>{result.jobPosition}</Card.Meta>
                  <Card.Description>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={7}>
                          <div style={{ float: "left" }}>
                            Açıklama: {result.description}
                          </div>
                          <br />
                          <div style={{ float: "left" }}>
                            Açık Pozisyon Sayısı: {result.numberOfOpenPosition}
                          </div>
                          <br />
                          <div style={{ float: "left" }}>
                            Son Başvuru Tarihi: {result.applicaitonDeadline}
                          </div>
                          <br />
                          <div style={{ float: "left" }}>
                            Oluşturma Tarihi: {result.releaseDate}
                          </div>
                          <br />
                        </Grid.Column>
                        
                      </Grid.Row>
                    </Grid>
                  </Card.Description>
                </Card.Content>
                <Button  fluid positive >İş İlanını Onayla</Button>
              </Card>
            ))}
          </Grid.Column>
          <Grid.Column
            width={2}
            style={{ paddingLeft: "8em", marginTop: "5em" }}
          ></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
