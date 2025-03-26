import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Allain Legaspi </span>
            from <span className="purple"> Cebu City, Philippines.</span>
            <br />
            I am currently a second year BSIT student at the University of Southern Philippines Foundation - Lahug Campus.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Allain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
