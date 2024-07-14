import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  const projects = [
    {
      title: "Student Cloud Website",
      url: "https://github.com/udaykiranhub/MyStudentCLoud.git",
      description: "A comprehensive portfolio platform for students to showcase their skills and thoughts. Built using the MERN stack, this project features a robust backend with Express.js and Node.js, and a dynamic frontend with React.js. The application includes user authentication, profile management, and an interactive interface for students to share their projects and collaborate. MongoDB is used to handle the data storage, ensuring scalability and flexibility."
    },
    {
      title: "Voting with Ethereum Blockchain",
      url: "https://github.com/udaykiranhub/VotingWithBlockChain.git",
      description: "A secure and transparent voting system leveraging Ethereum blockchain technology. Developed using Solidity for smart contract implementation, this project ensures that votes are immutable and tamper-proof. Web3.js is utilized to interact with the Ethereum network, providing a seamless user experience. This decentralized application (dApp) demonstrates the power of blockchain in creating trustless environments for critical applications."
    },
    {
      title: "Simple HTML Game",
      url: "https://github.com/udaykiranhub/gaming.git",
      description: "An engaging game created with HTML, CSS, and JavaScript, highlighting fundamental web development skills. The game includes interactive features, basic animations, and user input handling to provide an enjoyable experience. This project showcases the ability to build fun and interactive applications using core web technologies, emphasizing creativity and problem-solving skills."
    },
    {
      title: "Portfolio Website (Without React)",
      url: "https://github.com/udaykiranhub/studentCloud.git",
      description: "A fully functional and responsive portfolio website developed without using the React framework. This project demonstrates proficiency in using HTML, CSS, and JavaScript to create a professional online presence. The website features various projects, skills, and contact information, presented in a clean and organized manner. It highlights the ability to build modern and responsive web applications from scratch."
    }
  ];

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4">My Projects</h1>
        </Col>
      </Row>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center mb-3">{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button 
                  variant="primary" 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-auto align-self-center"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
