import React from "react";
import { useState, useEffect } from "react";
import JobPostingsService from "../services/jobPostingsService";
import { Button, Card, Image,Icon } from "semantic-ui-react";

export default function JobPostings() {
  const [jobPostings, setjobPostings] = useState([]);

  useEffect(() => {
    let jobPostingsService = new JobPostingsService();
    jobPostingsService
      .getAll()
      .then((result) => setjobPostings(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        {jobPostings.map((jobPostings) => (
          <Card fluid
          className="jobAdvertCard"
          floated="right"
          link
          >
          <Card.Content>
            <Card.Header textAlign="center">{jobPostings.companyName} - {jobPostings.jobPosition}</Card.Header>
            <Card.Header textAlign="center"></Card.Header>
            {/* <Card.Meta textAlign="right">Açık Pozisyon Sayısı : {jobPostings.numberOfOpenPosition}</Card.Meta> */}
            <Card.Meta textAlign="right">Son başvuru : {jobPostings.applicaitonDeadline}</Card.Meta>
            {/* <Card.Meta textAlign="right">Yayın Tarihi: {jobPostings.releaseDate}</Card.Meta> */}
          </Card.Content>
          <Card.Content extra>
            <div className="ui three buttons" >
              <Button basic color="green">
                Başvur
              </Button>
              <Button basic color="blue">
                İlan Detayı
              </Button>
            </div>
          </Card.Content>
        </Card>
        ))}
      </Card.Group>
    </div>
  );
}
