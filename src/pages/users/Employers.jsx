import React from "react";
import { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import EmployerService from "../services/employersService";

export default function Employers() {
  const [employers, setemployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getAll().then((result) => setemployers(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Web Site</Table.HeaderCell>
            <Table.HeaderCell>Telefon No</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employers) => (
            <Table.Row>
              <Table.Cell>{employers.email}</Table.Cell>
              <Table.Cell>{employers.companyName}</Table.Cell>
              <Table.Cell>{employers.webSite}</Table.Cell>
              <Table.Cell>{employers.phoneNumber}</Table.Cell>
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
