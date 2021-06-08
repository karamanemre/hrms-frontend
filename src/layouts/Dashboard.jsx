import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import CandidatePhoto from "../pages/CandidatePhoto";
import City from "../pages/City";
import CoverLetter from "../pages/CoverLetter";
import JobPositions from "../pages/JobPositions";
import JobPostings from "../pages/JobPostings";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <Grid>
        <Grid.Row>
          
          <Grid.Column width={4}>"Kategoriler"</Grid.Column>
          <Grid.Column width={12}>

            <JobPostings></JobPostings>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </div>
  );
}
