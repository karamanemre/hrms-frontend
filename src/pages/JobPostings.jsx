import React from "react";
import { useState, useEffect } from "react";
import JobPostingsService from "../services/jobPostingsService";
import {
  Button,
  Card,
  Pagination,
  Checkbox,
  Image,
  Icon,
  Grid,
  Feed,
  Input,
  Dropdown,
  Menu,
} from "semantic-ui-react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import JobPostingService from "../services/jobPostingsService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../store/actions/favoriteActions";
import { favoriteItems } from "../store/initialValues/favoriteItem";
import { number } from "yup";
import { render } from "@testing-library/react";

export default function JobPostings() {
  const [jobPostings, setjobPostings] = useState([]);
  const [getAll, setgetAll] = useState([]);
  const [city, setCity] = useState([]);
  const [jobpositions, setJobPositions] = useState([]);
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);

  const handleAddToFavorite = (posting) => {
    dispatch(addToFavorite(posting));
  };

  const pagingOptions = {
    totalCount: getAll.length,
    pageSize: 2,
    pageNo: 1,
  };

  function setPageNo(params) {
    let jobPostingsService = new JobPostingsService();
    jobPostingsService
      .getAllPageSize(params, pagingOptions.pageSize)
      .then((result) => setjobPostings(result.data.data));
    console.log(pagingOptions);
    return;
  }

  useEffect(() => {
    let jobPostingsService = new JobPostingsService();
    jobPostingsService
      .getAllPageSize(pagingOptions.pageNo, pagingOptions.pageSize)
      .then((result) => setjobPostings(result.data.data));
  }, []);

  useEffect(() => {
    let jobPostingsService = new JobPostingsService();
    jobPostingsService.getAll().then((result) => setgetAll(result.data.data));
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

  function filterFunction(params) {
    if (params == 0) {
      let jobPostingsService = new JobPostingsService();
      jobPostingsService
        .filterWorkplace(0)
        .then((result) => setPageSize(result.data.data));
    }
    if (params == 1) {
      let jobPostingsService = new JobPostingsService();
      jobPostingsService
        .filterWorkplace(1)
        .then((result) => setjobPostings(result.data.data));
    }
    if (params == 2) {
      let jobPostingsService = new JobPostingsService();
      jobPostingsService
        .filterTypeOfWork(2)
        .then((result) => setjobPostings(result.data.data));
    }
    if (params == 3) {
      let jobPostingsService = new JobPostingsService();
      jobPostingsService
        .filterTypeOfWork(3)
        .then((result) => setjobPostings(result.data.data));
    }
  }

  const workplace = [
    {
      key: 0,
      text: "İş Yerinde",
      value: 0,
      label: { color: "red", empty: true, circular: true },
    },
    {
      key: 1,
      text: "Uzaktan",
      value: 1,
      label: { color: "red", empty: true, circular: true },
    },
  ];

  const typeOfWork = [
    {
      key: 2,
      text: "Tam Zamanlı",
      value: 2,
      label: { color: "red", empty: true, circular: true },
    },
    {
      key: 3,
      text: "Yarı Zamanlı",
      value: 3,
      label: { color: "red", empty: true, circular: true },
    },
  ];

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <div>
      <Grid style={{ paddingTop: "1em" }}>
        <div style={{ width: "93%" }}>
          <Dropdown
            style={{
              float: "right",
              marginTop: "5em",
              backgroundColor: "black",
              color: "white",
              marginBottom: "2em",
              paddingBottom: "1em",
            }}
            text="Filtrele"
            icon="filter"
            floating
            labeled
            button
            className="icon"
          >
            <Dropdown.Menu style={{}}>
              <Dropdown.Divider />
              <Dropdown.Header icon="tags" content="Filtrele" />
              <Dropdown.Menu scrolling>
                {typeOfWork.map((option) => (
                  <Dropdown.Item
                    key={option.value}
                    {...option}
                    onClick={() => filterFunction(option.value)}
                    // onClick={()=>filterEmptyChange(option) }
                  />
                ))}
              </Dropdown.Menu>
              <Dropdown.Menu scrolling>
                {workplace.map((option) => (
                  <Dropdown.Item
                    key={option.value}
                    {...option}
                    onClick={() => filterFunction(option.value)}
                    // onClick={()=>filterEmptyChange(option) }
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
          <div></div>
        </div>

        <Grid.Row>
          <Grid.Column width={5} style={{ paddingLeft: "3em" }}>
            <Card style={{ backgroundColor: "#FFFFFF", borderStyle: "hidden" }}>
              <Card.Content style={{ height: "auto" }}>
                <div style={{ textAlign: "left" }}>
                  <div style={{ paddingBottom: "1em" }}>
                    <Formik
                      initialValues={{
                        toggle: false,
                        checked: [],
                        position:[],
                        
                      }}
                      onSubmit={async (values) => {
                        await sleep(300);
                        JSON.stringify(values, null, 2);
                        
                        let jobPostingsService = new JobPostingService();
                        let a;
                        if (values.checked.length > 1) {
                          for (let z = 0; z < values.checked.length; z++) {
                            a += "cities=" + values.checked[z] + "&";
                          }
                          a = a.replace("undefined", "");
                          
                        }
                        if (values.checked.length === 1 && values.position.length === 0) {
                          a = "cities=" + values.checked+"&";
                          for (let z = 0; z < jobpositions.length; z++) {
                           a += "positions="+jobpositions[z].id+"&"
                          }
                          
                        }
                        if (values.checked.length === 0 && values.position.length === 1) {
                          for (let z = 0; z < city.length; z++) {
                           a += "cities="+city[z].id+"&"
                           
                          }
                          a = a.replace("undefined", "");
                          a += "positions=" + values.position;
                        }
                        if (values.checked.length === 1 && values.position.length === 1) {
                          a = "cities="+values.checked+"&"
                          a += "positions=" + values.position;
                          a = a.replace("undefined", "");
                         
                        }
                        // if (values.checked.length === 1 && values.position.length > 1 || values.checked.length > 1 && values.position.length === 1) {
                        //   a = "cities="+values.checked+"&"
                        //   a += "positions=" + values.position;
                        //   a = a.replace("undefined", "");
                         
                        // }
                        if (values.checked.length === 0 && values.position.length === 0) {
                          return;
                        }
                        if (values.position.length > 1) {
                          for (let z = 0; z < values.position.length; z++) {
                            a += "positions=" + values.position[z] + "&";
                          }
                          a = a.replace("undefined", "");
                          a = a.substring(0, a.length - 1);
                        }
                       
                        console.log(a);
                        jobPostingsService
                          .filterCityAndPosition(a)
                          .then((result) => setjobPostings(result.data.data));
                      }}
                    >
                      {({ values }) => (
                       
                        <Form>
                           {console.log(values)}
                          <Card style={{ backgroundColor: "#F9F9F9" }}>
                            <Card.Content>
                              <Card.Header style={{ textAlign: "left" }}>
                                Şehir
                              </Card.Header>
                            </Card.Content>
                            <Card.Content>
                              <Card.Content
                                style={{ overflowY: "scroll", height: "300px" }}
                              >
                                <div>
                                  <Input
                                    icon="search"
                                    iconPosition="left"
                                    placeholder="Şehir Ara"
                                  />
                                </div>
                                <br />
                                <div
                                  role="group"
                                  aria-labelledby="checkbox-group"
                                >
                                  {city.map((result) => (
                                    <div style={{ paddingBottom: "0.5em" }}>
                                      <Field
                                        key={result.id}
                                        type="checkbox"
                                        name="checked"
                                        value={result.id}
                                      />

                                      {result.city}

                                      <br />
                                    </div>
                                  ))}
                                </div>
                              </Card.Content>
                            </Card.Content>
                          </Card>

                          <Card style={{ backgroundColor: "#F9F9F9" }}>
                            <Card.Content>
                              <Card.Header style={{ textAlign: "left" }}>
                                Pozisyon
                              </Card.Header>
                            </Card.Content>
                            <Card.Content
                              style={{ overflowY: "scroll", height: "300px" }}
                            >
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
                                  <div role="group" aria-labelledby="checkbox-group" style={{ paddingBottom: "1em" }}>
                                    <Field
                                        key={result.id}
                                        type="checkbox"
                                        name="position"
                                        value={result.id}
                                      />
                                       {result.positionName}
                                  </div>
                                ))}
                              </div>
                            </Card.Content>
                          </Card>

                          <Button fluid type="submit" color='green'>Filtrele</Button>
                          
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </Card.Content>
            </Card>

            <br />
          </Grid.Column>

          <Grid.Column width={10} style={{ paddingRight: "2em" }}>
            {jobPostings.map((result) => (
              <Card
                fluid
                style={{
                  paddingRight: "1em",
                  backgroundColor: "#F9F9F9",
                  marginBottom: "3em",
                }}
              >
                <Card.Content>
                  <Image
                    src="./company.png"
                    size="mini"
                    style={{ float: "left" }}
                  ></Image>

                  <Button
                    animated
                    style={{ float: "right", backgroundColor: "#F9F9F9" }}
                    onClick={() => handleAddToFavorite(result)}
                  >
                    <Button.Content visible>
                      <Icon className="starIcon" name="star" />
                    </Button.Content>
                    <Button.Content hidden>Ekle</Button.Content>
                  </Button>

                  <Card.Header>{result.companyName}</Card.Header>
                  <Card.Meta style={{ paddingBottom: "2em" }}>
                    {result.jobPosition}
                  </Card.Meta>
                  <Card.Description>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column>
                          <label style={{ float: "left" }}>
                            <strong> Açıklama:</strong> {result.description}
                          </label>
                          <br />
                          <label style={{ float: "left" }}>
                            <strong>Çalışma Yeri:</strong>{" "}
                            {result.workplace == 0
                              ? "İş Yerinde"
                              : result.workplace || result.workplace == 1
                              ? "Uzaktan"
                              : result.workplace || result.workplace == null
                              ? alert("Bulunamadı")
                              : result.workplace}
                          </label>
                          <br />
                          <label style={{ float: "left" }}>
                            <strong>Çalışma Zamanı:</strong>{" "}
                            {result.typeOfWork == 2
                              ? "Tam Zamanlı "
                              : result.typeOfWork || result.typeOfWork == 3
                              ? "Yarı Zamanlı"
                              : result.typeOfWork || result.typeOfWork == null
                              ? alert("Bulunamadı")
                              : result.typeOfWork}
                          </label>
                          <br />
                          <label style={{ float: "left" }}>
                            <strong>Açık Pozisyon Sayısı:</strong>{" "}
                            {result.numberOfOpenPosition}
                          </label>
                          <br />
                          <label style={{ float: "left" }}>
                            <strong>Son Başvuru Tarihi:</strong>{" "}
                            {result.applicaitonDeadline}
                          </label>
                          <label style={{ float: "right" }}>
                             <Icon name="clock outline" color="blue"></Icon>(
                            {result.applicaitonDeadline})
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

            <Pagination
              defaultActivePage={1}
              totalPages={Math.ceil(
                pagingOptions.totalCount / pagingOptions.pageSize
              )}
              onPageChange={(event, data) => (
                data.activePage, pageSize, setPageNo(data.activePage)
              )}
            />
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
