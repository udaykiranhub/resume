import React from "react";
import { Container, Row, Col, ListGroup, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  const skills = [
    {
      category: "Web Development",
      skills: [
        { name: "MERN Stack", details: "MongoDB, Express.js, React.js, Node.js" },
        { name: "Bootstrap", details: "Responsive design and UI components" },
        { name: "React.js", details: "Building dynamic user interfaces" },
        { name: "MongoDB", details: "NoSQL database for modern applications" },
        { name: "HTML", details: "Markup language for web development" },
        { name: "CSS", details: "Styling web pages with modern techniques" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", details: "Version control system" },
        { name: "GitHub", details: "Hosting for version control and collaboration" },
        { name: "Truffle", details: "Development framework for Ethereum" },
        { name: "Solidity", details: "Programming language for Ethereum smart contracts" },
        { name: "AWS Services", details: "Connecting websites to cloud services" },
        { name: "IPFS", details: "Decentralized storage solution" }
      ]
    },
    {
      category: "Blockchain",
      skills: [
        { name: "Ethereum Blockchain", details: "Building decentralized applications (dApps)" },
        { name: "Solidity", details: "Developing and deploying smart contracts" },
        { name: "Truffle", details: "Testing and deploying smart contracts" },
        { name: "Solidity Attacks Auditing", details: "Identifying and mitigating security vulnerabilities" },
        {name:"Defi",details:"i can develop Defi applications!"},
        {name:"Web3.js",details:"i can develop Dapps with Web3 library in javascript@!"}
    
    
    ]
    },
    {
      category: "Other",
      skills: [
        { name: "Data Structures", details: "Understanding of various data structures" },
        { name: "React.js Redux", details: "State management for React applications" }
      ]
    }
  ];

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">My Skills ...</h1>
        </Col>
      </Row>
      {skills.map((skillCategory, index) => (
        <Row key={index} className="mb-4">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary">{skillCategory.category}</Card.Title>
                <ListGroup variant="flush">
                  {skillCategory.skills.map((skill, idx) => (
                    <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5>{skill.name}</h5>
                        <small className="text-muted">{skill.details}</small>
                      </div>
                      <Badge bg="secondary" pill>
                        {skill.name.split(' ').length} Skills
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Skills;
