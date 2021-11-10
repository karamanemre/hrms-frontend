import React from "react";
import { Route } from "react-router";
import { Grid, GridColumn,List } from "semantic-ui-react";

export default function Profile() {
  return (
    <div style={{ marginTop: "1.8em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <div style={{ height: "50em", backgroundColor: "#F7F7F7" }}>
              <List>
                {/* <Route exact path="/" component={}><List.Item >Profil Düzenle</List.Item></Route>  */}
                <List.Item >Şifre Değiştir</List.Item>
                <List.Item >Hesap Dondur</List.Item>
              </List>
            </div>
          </Grid.Column>
          <Grid.Column width={12}>

          </Grid.Column>
          
        </Grid.Row>
      </Grid>
    </div>
  );
}
