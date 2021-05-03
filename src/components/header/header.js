import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./header.css";
export function Header() {
  const changeBackGroundColour = () => {
    console.log("bcc");
  };
  const menuItems = [
    "About",
    "Blogs",
    "Contact",
    "Projects",
    "Skills",
    "Download",
  ];
  const menu = menuItems.map((m) => (
    <Col
      onClick={() => alert(m + "clicked")}
      onFocus={() => changeBackGroundColour()}
    >
      {" "}
      {m}
    </Col>
  ));
  return (
    <div className="mainMenu">
      <Container fluid="sm">
        <Row>{menu}</Row>
      </Container>
    </div>
  );
}
