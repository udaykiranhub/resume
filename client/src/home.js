// src/Home.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './home.css';

const Home = () => {
  return (
    <Container className="homepage" style={{backgroundColor:"green"}}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-light p-5">
            <Card.Body>
              <Card.Title className="display-4"><strong>Please Welcome !</strong></Card.Title>
              <Card.Text className="lead">
             
              </Card.Text>
              <Card.Text className="note">
                <strong>Knowledge</strong> empowers you to make informed decisions and solve complex problems,
                while <strong>imagination</strong> fuels innovation and creativity, driving you towards a brighter future.
              </Card.Text>
              <hr className="my-4" />
        
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
