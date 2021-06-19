import React from "react";
import "../Dashboard.css";
import CandidatePhoto from "../pages/CandidatePhoto";
import City from "../pages/City";
import CoverLetter from "../pages/CoverLetter";
import JobPositions from "../pages/JobPositions";
import JobPostings from "../pages/JobPostings";
import EmployerJobPostingsPages from "../pages/EmployerJobPostingsPages";

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
import EmployerRegister from "./Auth/EmployerRegister";
import Register from "./Auth/Register";
import CandidateRegister from "./Auth/CandidateRegister";
import JobPostingsAdd from "../pages/JobPostingsAdd";
import JobPostingConfirmation from "../pages/JobPostingConfirmation";
import { ToastContainer } from "react-toastify";
import EmployerDetail from "../pages/EmployerDetail";
import CandidateCv from "../pages/CandidateCv";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <ToastContainer position="bottom-right"/>
      
      <Route exact path="/" component={Head}/>
      <Route exact path="/" component={Content}/>
      <Route exact path="/jobpostings" component={JobPostings} />
      <Route exact path="/employers" component={Employers} />
      <Route exact path="/employerregister" component={EmployerRegister} />
      <Route exact path="/candidateregister" component={CandidateRegister} />
      <Route exact path="/register" component={Register} />
     <Route exact path="/jobpostingsadd" component={JobPostingsAdd} />
     <Route exact path="/jobpostingconfirmation" component={JobPostingConfirmation} />
     <Route exact path="/employerdetail/:id" component={EmployerDetail}/>
     <Route exact path="/candidatecv" component={CandidateCv}/>
    </div>
  );
}
