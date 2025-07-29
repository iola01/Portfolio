import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
           LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>

      <p className="home-about-body">
      I fell in love with technology and the challenge of protecting and improving digital systems and I’ve been learning and building ever since
      <br />
      <br />
      I hold the <b className="purple">CompTIA A+ certification</b> and I’m currently completing the 
      <b className="purple"> Google Cybersecurity Certificate</b> while preparing for Security+.  
      <br />
      <br />
       My interests include <b className="purple">IT systems, cybersecurity labs, and network security</b>.  
       I’ve built projects like <b className="purple">Pfsense, Pi-hole ad blocker</b>, 
       a VMware home lab with Active Directory, Group Policies, RDP setups, and many more.
       <br />
       <br />
      I enjoy solving problems, automating tasks with 
    <b className="purple"> PowerShell</b>, and experimenting with 
    <b className="purple"> modern IT and security tools.</b>
  </p>
</Col>
<Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/iola01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/share/1GvaF5mgwU/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/artiola-s-037712333/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/askourtis17/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
