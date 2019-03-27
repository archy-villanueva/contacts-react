import React, { Component } from 'react'
import { Container, Card, CardHeader, CardBody } from 'reactstrap'
import ContactList from './components/ContactList'

const App = () => (
  <Container>
    <Card className="mt-5">
      <CardHeader>Contact List</CardHeader>
      <CardBody>
        <ContactList />
      </CardBody>
    </Card>
  </Container>
)

export default App
