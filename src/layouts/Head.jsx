import React from "react";
import _ from 'lodash'
import faker from 'faker'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Grid,
  GridColumn,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Segment,Search,
  Dropdown,
  Menu,
  Button,
} from "semantic-ui-react";
import "../Header.css";
import JobPostings from "../pages/JobPostings";
import Navi from "./Navi";
import JobPostingsService from "../services/jobPostingsService"

let jobPostingsService = new JobPostingsService();

const initialState = {
  loading: false,
  results: [],
  value: "",
};


export default function Head() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const [jobPostings, setjobPostings] = useState([])
useEffect(() => {
  jobPostingsService
      .getAll()
      .then((result) => setjobPostings(result.data.data));
}, [])

let count=3;
const source = _.times(jobPostings.length, () => ({
  
  title: "s",
  description: "ttt",
 
  
 
}));

function exampleReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

  return (
    <header>
      <div className="dropDownHeader">
        <div className="dropDownMenuDiv">
          <Dropdown pointing className="link item " text="Adaylar İçin">
            <Dropdown.Menu className="dropDownMenu">
              <Dropdown.Item icon="caret right">
                <Link to="/jobpostings">İş Başvurusu Yap</Link>
              </Dropdown.Item>
              <Dropdown.Item icon="caret right" text="Şirketler">
                <Link to="/employers">Şirketler</Link>
              </Dropdown.Item>
              <Dropdown.Item icon="caret right" text="Şirketler">
                <Link to="/candidatecvadd">Cv Ekle</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            pointing
            className="link item "
            style={{ paddingLeft: "3em" }}
            text="İşveren İçin"
          >
            <Dropdown.Menu className="dropDownMenu">
              <Dropdown.Item icon="caret right">
                <Link to="/jobpostings">İlan Yayınla</Link>
              </Dropdown.Item>
              <Dropdown.Item icon="caret right" text="Şirketler">
                <Link to="/employers">Açık Cv Havuzunu Gör</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="headDiv">
        <Header as="h2" icon textAlign="center" className="usersLogo">
          <Icon name="users" circular />
          <Header.Content>HRMS</Header.Content>
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header textAlign="center">
                <Header.Content className="search">
                  <label style={{ fontSize: "1.5em"}}>
                    {" "}
                    Kariyeriniz için iş aramaya başlayın...
                  </label>
                </Header.Content>
               
                  <Search style={{marginTop:"2em",width:"100%"}}
                    inverted
                    fluid
                    size="huge"
                    placeholder="Search..."
                    loading={loading}
                    onResultSelect={(e, data) =>
                      dispatch({
                        type: "UPDATE_SELECTION",
                        selection: data.result.title,
                      })
                    }
                    onSearchChange={handleSearchChange}
                    results={results}
                    value={value}
                  />
               
              
              </Header>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image
                className="headImage"
                centered
                size="large"
                src="/head.png"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </header>
  );
}
