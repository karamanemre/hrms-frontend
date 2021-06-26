import React from 'react'
import { useParams } from 'react-router';
import { Grid, Card, Button, Icon } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobPostingsService from '../services/jobPostingsService';

export default function FavoriteDetail() {

    let { id } = useParams();

    const [jobPosting, setjobPosting] = useState([])

    useEffect(() => {
        let jobPostingsService = new JobPostingsService();
        jobPostingsService.getByIdDto(id)
        .then((result) => setjobPosting(result.data.data));
      
    }, [])

    return (
        <div style={{marginTop:"5em"}}>
             {jobPosting.map((result) => (
           <Card
                fluid
                style={{ backgroundColor: "#F9F9F9", marginBottom: "2.5em" }}
              >
                <Card.Content header={result.jobPosition} />
                <div style={{ padding: "2em" }}>
                  <div style={{ paddingBottom: "1em", float: "left" }}>
                    <strong>Açıklama: </strong>
                    {result.description}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Açık Pozisyon Sayısı: </strong>
                    {result.numberOfOpenPosition}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Çalışma Yeri: </strong>
                    {result.workplace == 0
                              ? "İş Yerinde"
                              : result.workplace || result.workplace == 1
                              ? "Uzaktan"
                              : result.workplace || result.workplace == null
                              ? alert("Bulunamadı")
                              : result.workplace}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Çalışma Zamanı: </strong>
                    {result.typeOfWork == 2
                              ? "Tam Zamanlı "
                              : result.typeOfWork || result.typeOfWork == 3
                              ? "Yarı Zamanlı"
                              : result.typeOfWork || result.typeOfWork == null
                              ? alert("Bulunamadı")
                              : result.typeOfWork}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Son Başvuru Tarihi: </strong>
                    {result.numberOfOpenPosition}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Min.Maaş: </strong>
                    {result.minSalary}
                  </div>
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <strong>Maks.Maaş: </strong>
                    {result.maxSalary}
                  </div>
                </div>
                <Card.Content extra>
                  <Link to={"/"}>
                <Button  color="green" fluid>
                    Başvur
                  </Button></Link>
                </Card.Content>
                
              </Card>
               ))}
        </div>
    )
}
