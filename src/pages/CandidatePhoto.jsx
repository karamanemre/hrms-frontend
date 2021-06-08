import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import { useState, useEffect } from "react";
import CandidateService from "../services/candidateService";


export default function CandidatePhoto() {
  const [candidatePhoto, setcandidatePhoto] = useState([]);

  useEffect(() => {
    let candidatePhotoService = new CandidateService();
    candidatePhotoService
      .getAll()
      .then((result) => setcandidatePhoto(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Resim Url</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidatePhoto.map((jobPositions) => (
            <Table.Row>
              <Table.Cell>c</Table.Cell>
              <Table.Cell>c</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
