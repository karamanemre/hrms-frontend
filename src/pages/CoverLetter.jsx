import React from "react";
import { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import CoverLetterService from "../services/coverLetterService";

export default function CoverLetter() {
  
  const [coverLetters, setcoverLetters] = useState([]);

  useEffect(() => {
    let coverLetterService = new CoverLetterService();
    coverLetterService
      .getAll()
      .then((result) => setcoverLetters(result.data.data)); //başarılı olursa then olmazsa catch
  }, []);


  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Ön Yazı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {coverLetters.map((coverLetters) => (
            <Table.Row>
              <Table.Cell>{coverLetters.candidateNumber}</Table.Cell>
              <Table.Cell>{coverLetters.coverLetter}</Table.Cell>
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
