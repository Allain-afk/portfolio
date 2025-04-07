import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import persoWebsite from "../../Assets/Projects/perso-website.png";
import LIMS from "../../Assets/Projects/LIMS.png";  // Add this import

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
              imgPath={LIMS}
              isBlog={false}
              title="Library Information Management System"
              description="A Library Information Management System (LIMS) is software that helps manage library resources, track loans, and organize user accounts efficiently."
              ghLink="https://github.com/Allain-afk/LIMS-A-v1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={persoWebsite}
              isBlog={false}
              title="Personal Website"
              description="Personal Website built using HTML, CSS, and JavaScript. It showcases my skills, projects, and provides a way for visitors to get in touch with me."
              ghLink="https://github.com/Allain-afk/AllainAutobiography"
              demoLink="https://allain-afk.github.io/AllainAutobiography/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perso_website}
              isBlog={false}
              title="Personal Website"
              description="Personal Website built using HTML, CSS, and JavaScript. It showcases my skills, projects, and provides a way for visitors to get in touch with me."
              ghLink="https://github.com/Allain-afk/AllainAutobiography"
              demoLink="https://allain-afk.github.io/AllainAutobiography/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
