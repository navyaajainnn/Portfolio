import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import learnmate from "../../Assets/Projects/learnmate.png";
import bank from "../../Assets/Projects/bank.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Orange Bank"
              description="Crafted a responsive layout ensuring seamless navigation and engagement across devices, from desktops to mobilephones"
              ghLink="https://github.com/navyaajainnn/Orange-Bank"
              demoLink="https://orange-bank.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnmate}
              isBlog={false}
              title="Learnmate"
              description="Crafted pixel-perfect layouts for landing page, dashboards, testimonials, and flashcard sections using React, Tailwind CSS, and responsive design principles."
              ghLink="https://github.com/navyaajainnn/learnmate"
              demoLink="https://learnmate-steel.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
