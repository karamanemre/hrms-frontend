import React from "react";
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

export default function Content() {
  return (
    <div>
      <div className="jobPostitionsCard">
        <Grid>
          <Grid.Row>
            <GridColumn  width={4}>
              <Card color="blue"
                href="https://docs.microsoft.com/tr-tr/dotnet/csharp/"
                header="C#"
                meta="______________"
                description={[
                  "C#; Microsoft tarafından .NET Teknolojisi için geliştirilen modern bir programlama dilidir. Sözdizimi C-like bir deneyim sunar.",
                ].join("")}
              />
            </GridColumn>
            <GridColumn width={4}>
              <Card color="blue"
                href="#card-example-link-card"
                header="Python"
                meta="______________"
                description={[
                  "Girintilere dayalı basit söz dizimi, dilin öğrenilmesini ve akılda kalmasını kolaylaştırır.",
                ].join("")}
              />
            </GridColumn>
            <GridColumn width={4}>
              <Card color="blue"
                href="#card-example-link-card"
                header="Java"
                meta="______________"
                description={[
                  "Java'nın kullanım alanı gömülü aygıtlardan cep telefonlarına, kurumsal sunuculardan süper bilgisayarlara uzanmaktadır",
                ].join("")}
              />
            </GridColumn>
            <GridColumn width={4}>
              <Card color="blue"
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

      <Segment placeholder>
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
    </div>
  );
}
