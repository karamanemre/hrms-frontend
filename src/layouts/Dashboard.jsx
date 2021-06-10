import React from "react";
import "../Dashboard.css";
import CandidatePhoto from "../pages/CandidatePhoto";
import City from "../pages/City";
import CoverLetter from "../pages/CoverLetter";
import JobPositions from "../pages/JobPositions";
import JobPostings from "../pages/JobPostings";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
  GridColumn,
  Card,
  Image,
  Feed,
} from "semantic-ui-react";
import Content from "./Content";
import { Route } from "react-router";
import Head from "./Head";
import Employers from "../pages/Employers";


export default function Dashboard() {
  return (
    <div className="dashboard">
      
      <Route exact path="/" component={Head}/>
      <Route exact path="/" component={Content}/>
      <Route exact path="/jobpostings" component={JobPostings} />
      <Route exact path="/employers" component={Employers} />

      
      
     
    </div>
  );
}
