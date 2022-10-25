import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import navLogo from "../../../Images/navbar-logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-background">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Link to="/" className="text-text-decoration-none">
            <img
              alt=""
              src={navLogo}
              width="40"
              height="30"
              className="d-inline-block align-top mt-1"
            />{" "}
            <span className="text-white fs-3 ms-2 text-text-decoration-none fw-bold">
              TechHunt
            </span>
          </Link>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="bg-dark"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-3">
              <Link
                className="text-decoration-none me-2 text-white fw-bold"
                to="/courses"
              >
                Courses
              </Link>
              <Link
                className="text-decoration-none me-2 text-white fw-bold"
                to="/faq"
              >
                FAQ
              </Link>
              <Link
                className="text-decoration-none me-2 text-white fw-bold"
                to="/blog"
              >
                Blog
              </Link>
            </Nav>
            <Nav>
              <Link to="/login">
                <Button variant="light" className="me-2 fw-bold">
                  Login
                </Button>
              </Link>
              <p>
                <Button variant="light" className="me-2 fw-bold">
                  Log Out
                </Button>
              </p>
              <p>
                <Button variant="light" className="me-2 fw-bold">
                  Dark Theme
                </Button>
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="w-75 m-5 pb-5 text-white ">
        <h1>Welcome to TechHunt</h1>
        <p>
          You can learn easily popular computer languages and web development
          tools here.
        </p>
        <p>Let's Explore...</p>
      </div>
    </div>
  );
};

export default Header;
