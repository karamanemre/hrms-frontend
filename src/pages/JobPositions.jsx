import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";
import { useState, useEffect } from "react";

export default function JobPositions() {

  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));//başarılı olursa then olmazsa catch
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPositions) => (
            <Table.Row>
              <Table.Cell>{jobPositions.positionName}</Table.Cell>
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
