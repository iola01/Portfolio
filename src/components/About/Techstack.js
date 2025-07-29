import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiRasberryPi,
  DiGithub,
} from "react-icons/di";
import { SiSolidity, SiPostgresql } from "react-icons/si";
import PShell from "../../Assets/PShell.png"; // Add your image in your project folder
import microsoft365 from "../../Assets/microsoft365.png"; // Add your image in your project folder
import ActiveD from "../../Assets/ActiveD.png"; // Add your image in your project folder
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <DiRasberryPi/>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
              {/* Custom image for ActiceD */}
              <img
                src={ActiveD}
                alt="ActiveD"
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
     {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col> }
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              {/* Custom image for PShell */}
              <img
                src={PShell}
                alt="Powershell"
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
      <Col xs={4} md={2} className="tech-icons">
              {/* Custom image for microsoft365 */}
              <img
                src={microsoft365}
                alt="microsoft365"
                style={{ width: "50px", height: "50px" }}
              />
            </Col>
    </Row>
  );
}

export default Techstack;
