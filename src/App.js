import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Grid, Header, Icon, Search, Segment, Button, Dimmer, Image, List, Table, Label, Container, Menu, Placeholder } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Segment placeholder>
          <Grid columns={2} stactable textAlign="center">
            <Divider vertical>OR</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari document
                </Header>
                <Search placeholder="Search document.." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline" />
            Tambah Document Baru
          </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Dimmer>Loading</Dimmer>
          <Image src="https://semantic-ui.com/examples/assets/images/wireframe/short-paragraph.png" />
        </Segment>
        <br />

        <Grid columns="equal">
          <Grid.Column>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} >
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header as="h5">
              Website Terkait
            </Header>
            <List>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://google.com" >Google</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://facebook.com" >Facebook</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://semantic-ui.com" >Semantic UI</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://niomic.com" >Niomic</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content><a href="https://reactjs.org" >React</a></List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
        <br /> <br />

        <Container>
          <Table celled textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="right" colSpan="2">
                  <Search placeholder="Search.." />
                </Table.HeaderCell>
              </Table.Row>

              <Table.Row>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign="left" >
                  <Label ribbon>Panduan Belajar JavaScript</Label>
                </Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="left">Panduan Belajar CSS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign="left">Panduan Belajar React JS</Table.Cell>
                <Table.Cell>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="2">
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
        <br />





      </div >
    );
  }
}

export default App;