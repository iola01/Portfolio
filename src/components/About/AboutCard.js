import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Artiola Shkurtaj </span>
            and I'm based in <span className="purple"> Pittsburgh, Pennsylvania.</span>
            <br />
            I’m focused about advancing my knowledge in IT to build strong technical and troubleshooting skills as a technician.
            <br />
            Currently studying independently, gaining hands-on experience in networking, cybersecurity, and system administration, with a clear goal of becoming a SOC Analyst.
            <br />
            <br />
            Beyond my tech studies, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volunteering
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Driven by passion, determined to make a difference!"{" "}
          </p>
          <footer className="blockquote-footer"> Ola </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
