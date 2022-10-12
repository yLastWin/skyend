import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rocketlogo from "./rocketlogo.png";
import { Outlet, Link } from "react-router-dom";
import litepaper from "../../../assets/files/litepaper.pdf";
import whitepaper from "../../../assets/files/whitepaper.pdf";
function NavbarBs() {
  return (
    <Navbar
      className="nav-color main-nav"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container className="navContainer">
        <Navbar.Brand className="navLogo" as={Link} to="/">
          <img
            alt=""
            src={Rocketlogo}
            width="18"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SKYEND
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Network" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/networkstatus">
                Network Stauts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tokenomics">
                Tokenomics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/distribution">
                Distribution
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Inspect</NavDropdown.Header>

              <NavDropdown.Item href="https://etherscan.io/">
                {" "}
                Etherscan
              </NavDropdown.Item>
              <NavDropdown.Item href="https://solscan.io/">
                Solscan
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Developers" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/team">
                Team
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/parteners">
                Parteners
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Comunity" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/calendar">
                Calendar
              </NavDropdown.Item>
              <NavDropdown.Header>Social</NavDropdown.Header>
              <NavDropdown.Item href="https://twitter.com/">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href="https://web.telegram.org/z/">
                Telegram
              </NavDropdown.Item>
              <NavDropdown.Item href="https://discord.com/">
                Discrod
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.reddit.com/">
                Reddit
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Docs" id="collasible-nav-dropdown">
              <NavDropdown.Item href={whitepaper} target="_blank">
                Whitepaper
              </NavDropdown.Item>
              <NavDropdown.Item href={litepaper} target="_blank">
                Litepaper
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Outlet />
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBs;
