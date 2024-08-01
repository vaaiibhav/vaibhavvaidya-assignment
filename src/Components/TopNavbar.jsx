import { Navbar, Container, Nav, Image } from "react-bootstrap";
import React from "react";
import aerchain_logo from "../assets/images/aerchain_logo.png";
import gmail_logo from "../assets/images/gmail_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const TopNavbar = () => {
  return (
    <Container fluid className="sticky-top">
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image width="120px" src={aerchain_logo}></Image>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Module</Nav.Link>
            <Nav.Link className="dropdown-toggle" href="#features">
              Purchase order
            </Nav.Link>
            <Nav.Link href="#pricing">Invoices</Nav.Link>
            <Nav.Link className="dropdown-toggle" href="#pricing">
              Budgets
            </Nav.Link>
          </Nav>
          <Nav className="text-right">
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faCircleQuestion} color="blue" />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faBell} color="blue" />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FontAwesomeIcon icon={faGear} color="blue" />
            </Nav.Link>
            <Nav.Link className="dropdown-toggle" href="#pricing">
              <Image width={95} src={gmail_logo}></Image>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default TopNavbar;
