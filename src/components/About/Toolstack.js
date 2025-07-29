import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVmware,
  SiMacos,
  SiMicrosoft,
  SiPfsense,
  SiCisco,
  SiMicrosoftazure,
} from "react-icons/si";
import { DiLinux } from "react-icons/di";

import virtualboxImg from "../../Assets/VirtualBox.png"; // Add your image in your project folder
import ProxMoxImage from "../../Assets/ProxMox.png"; // Add your image in your project folder

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPfsense />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Custom image for VirtualBox */}
        <img
          src={virtualboxImg}
          alt="VirtualBox"
          style={{ width: "50px", height: "50px" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Custom image for ProxMox */}
        <img
          src={ProxMoxImage}
          alt="ProxMox"
          style={{ width: "50px", height: "50px" }}
        />
      </Col>
    </Row>
  );
}

export default Toolstack;
