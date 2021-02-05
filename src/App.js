import React from "react";
import {Navbar, Nav, InputGroup, FormControl, Card, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Navbar
      bg="light"
      expand="lg"
    >
      <Navbar.Brand href="#home">WiseTime</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto header__list">
          <Navbar.Text style={{color: '#008295'}}>
            <span> Need Help? </span>
            contact@wisetime.com
            <span style={{color: '#003C6E'}}> or </span>
            +1877-774-8005
          </Navbar.Text>
          <a className="header__back" href="#link">Back to main site</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <div style={{display: 'flex', justifyContent: 'space-around', margin: '70px 20px'}}>

      <div>
      <Card.Title>Let’s get started.</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Step 1 of 5</Card.Subtitle>
          <InputGroup size="lg" className="input__group">
            <FormControl
              placeholder="Enter your email address"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              id="input__logo"
              style={{
                width: '410px',
                height: '81px',
                marginBottom: '20px',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#003C6E'
              }}/>
              <FormControl
                placeholder="Verify your email address"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                style={{
                  width: 'inherit',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}/>
              <FormControl
                placeholder="Complete your profile"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                style={{
                  width: 'inherit',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}/>
              <FormControl
                placeholder="Add Team"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                style={{
                  width: 'inherit',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}/>
              <FormControl
                placeholder="Download WiseTime"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                style={{
                  width: 'inherit',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  fontSize: '16px'
                }}/>

          </InputGroup>
      </div>

      <Card>
        <Card.Body>
          <Card.Title style={{color: '#008295'}}>Outsource and optimise your timekeeping with WiseTime</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">It only takes a few short steps before you can transform the way you track time.</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">To start off, please enter your business email.</Card.Subtitle>
          <Form>
            <InputGroup size="lg" className="input__group">
              <FormControl
                placeholder="Enter your email address"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                id="input__logo"
                style={{
                  width: '410px',
                  height: '81px',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#003C6E'
                }}/>
            </InputGroup>
            <Form.Check type="checkbox" label="I confirm I have read and accepted the WiseTime Licence Agreement and Privacy Policy" />
            <Form.Check type="checkbox" label="I’d like to get news and updates about WiseTime sent to me" />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Button variant="danger">Get started</Button>
              <Form.Text>Already have an account? Log in now</Form.Text>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default App;
