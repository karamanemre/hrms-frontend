import React from "react";
import { useState, useEffect } from "react";
import { Icon, Menu, Table, Label } from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function Candidate() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getAll().then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidates) => (
            <Table.Row>
              <Table.Cell>{candidates.email}</Table.Cell>
              <Table.Cell>{candidates.firstName}</Table.Cell>
              <Table.Cell>{candidates.lastName}</Table.Cell>
              <Table.Cell>{candidates.dateOfBirth}</Table.Cell>
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
