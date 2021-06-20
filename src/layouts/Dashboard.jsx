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
import CandidateCvAdd from "../pages/CandidateCvAdd";
import CoverLatterAdd from "../pages/cvAdd/CoverLatterAdd";
import SchoolAdd from "../pages/cvAdd/SchoolAdd";
import ProgrammingLanguageAdd from "../pages/cvAdd/ProgrammingLanguageAdd";
import LanguageAdd from "../pages/cvAdd/LanguageAdd";
import TechnologyAdd from "../pages/cvAdd/TechnologyAdd";
import JobExperienceAdd from "../pages/cvAdd/JobExperienceAdd";
import SocialMediaAdd from "../pages/cvAdd/SocialMediaAdd";


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
     <Route exact path="/candidatecvadd" component={CandidateCvAdd}/>
     <Route exact path="/candidatecvadd/coverletteradd" component={CoverLatterAdd}/>
     <Route exact path="/candidatecvadd/schooladd" component={SchoolAdd}/>
     <Route exact path="/candidatecvadd/programminglanguageadd" component={ProgrammingLanguageAdd}/>
     <Route exact path="/candidatecvadd/languageadd" component={LanguageAdd}/>
     <Route exact path="/candidatecvadd/technologyadd" component={TechnologyAdd}/>
     <Route exact path="/candidatecvadd/jobexperienceadd" component={JobExperienceAdd}/>
     <Route exact path="/candidatecvadd/socialmediaadd" component={SocialMediaAdd}/>

    </div>
  );
}
