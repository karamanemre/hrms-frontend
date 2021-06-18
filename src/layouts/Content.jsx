import React from "react";
import { CardImg } from "react-bootstrap";
import "../Dashboard.css";
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
  Reveal,
} from "semantic-ui-react";

export default function Content() {
  return (
    <div>
      <div className="jobPostitionsCard">
        <Grid>
          <Grid.Row>
            <GridColumn width={4}>
              <Card
                color="blue"
                href="https://docs.microsoft.com/tr-tr/dotnet/csharp/"
                header="C#"
                meta="______________"
                description={[
                  "C#; Microsoft tarafından .NET Teknolojisi için geliştirilen modern bir programlama dilidir. Sözdizimi C-like bir deneyim sunar.",
                ].join("")}
              />
            </GridColumn>
            <GridColumn width={4}>
              <Card
                color="blue"
                href="#card-example-link-card"
                header="Python"
                meta="______________"
                description={[
                  "Girintilere dayalı basit söz dizimi, dilin öğrenilmesini ve akılda kalmasını kolaylaştırır.",
                ].join("")}
              />
            </GridColumn>
            <GridColumn width={4}>
              <Card
                color="blue"
                href="#card-example-link-card"
                header="Java"
                meta="______________"
                description={[
                  "Java'nın kullanım alanı gömülü aygıtlardan cep telefonlarına, kurumsal sunuculardan süper bilgisayarlara uzanmaktadır",
                ].join("")}
              />
            </GridColumn>
            <GridColumn width={4}>
              <Card
                color="blue"
                href="#card-example-link-card"
                header="Javascript"
                meta="______________"
                description={[
                  "JavaScript, yaygın olarak web tarayıcılarında kullanılmakta olan dinamik bir programlama dilidir.",
                ].join("")}
              />
            </GridColumn>
          </Grid.Row>
        </Grid>
      </div>

      <div
        className="contentBackGroundImage"
        style={{
          height: "40em",
          width: "100%",
          backgroundImage: "",
          textAlign: "center",
        }}
      >
        <div
          style={{
            paddingTop: "2em",
            fontSize: "3em",
            color: "black",
            fontFamily: "Brush Script MT",
          }}
        >
          <label>Kimler Ne Demiş?</label>
        </div>

        <Grid style={{ paddingTop: "10em" }}>
          <Grid.Row>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column width={5}>
              <Card color="blue" style={{ width: "35em" }}>
                <Card.Content style={{ padding: "3em" }}>
                  "'Nerd'lere iyi davranın. Kendinizi onun yanında çalışıyor
                  bulma ihtimaliniz var."
                </Card.Content>
                <Card.Meta>Bill Gates (Microsoft Kurucusu)</Card.Meta>
              </Card>
            </Grid.Column>
            <Grid.Column width={5}>
              <Card color="blue" style={{ width: "35em" }}>
                <Card.Content style={{ padding: "3em" }}>
                  “Azimli olun. Bir şeyi zorla bırakmanız gerekmiyorsa o şeyden
                  vazgeçmeyin.”
                </Card.Content>
                <Card.Meta>Elon Musk (Tesla Kurucusu)</Card.Meta>
              </Card>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

      <Segment placeholder style={{ marginBottom: "15em" }}>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Find Country
              </Header>

              <Search placeholder="Search countries..." />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="world" />
                Add New Country
              </Header>
              <Button primary>Create</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>



      <Grid>
        <Grid.Row style={{paddingBottom:"0em", paddingRight:"5em",paddingLeft:"5em"}}>
          <Grid.Column style={{padding:"0"}} width={8}>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image
                  src="./javadeveloper.png"
                  size="huge"
                  style={{height:"400px"}}
                  
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1402000/1403075.jpg"
                  size="huge"
                  style={{height:"400px"}}
                 
                />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>

          <Grid.Column style={{padding:"0"}} width={8}>

          <Reveal animated="fade">
              <Reveal.Content visible>
                <Image
                  src="./pythondeveloper.jpg"
                  size="huge"
                  style={{height:"400px"}}
                  
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1402000/1403075.jpg"
                  size="huge"
                  style={{height:"400px"}}
                />
              </Reveal.Content>
            </Reveal>


          </Grid.Column>
        </Grid.Row>



        <Grid.Row style={{paddingTop:"0em", paddingRight:"5em",paddingLeft:"5em"}}>
          
          <Grid.Column style={{padding:"0"}} width={4}>
          <Reveal animated="fade">
              <Reveal.Content visible>
                <Image
                  src="javascriptdeveloper.jpg"
                  size="huge"
                  style={{height:"215px"}}
                  
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1402000/1403075.jpg"
                  size="huge"
                  style={{height:"215px"}}
                />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>

          


          <Grid.Column style={{padding:"0"}} width={4}><Reveal animated="fade">
              <Reveal.Content visible>
                <Image
                  src="godeveloper.jpg"
                  size="huge"
                  style={{height:"215px"}}
                  
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1402000/1403075.jpg"
                  size="huge"
                  style={{height:"215px"}}
                />
              </Reveal.Content>
            </Reveal></Grid.Column>


          <Grid.Column style={{padding:"0"}} width={4}><Reveal animated="fade">
              <Reveal.Content visible>
                <Image
                  src="flutterdeveloper.png"
                  size="huge"
                  style={{height:"215px"}}
                  
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1402000/1403075.jpg"
                  size="huge"
                  style={{height:"215px"}}
                />
              </Reveal.Content>
            </Reveal></Grid.Column>

            <Grid.Column style={{padding:"0"}} width={4}><Reveal animated="fade">
              <Reveal.Content visible>
                <Image
                  src="./cdeveloper.jpg"
                  size="huge"
                  style={{height:"215px"}}
                  
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1402000/1403075.jpg"
                  size="huge"
                  style={{height:"215px"}}
                />
              </Reveal.Content>
            </Reveal></Grid.Column>


           
        </Grid.Row>
      </Grid>
    </div>
  );
}
