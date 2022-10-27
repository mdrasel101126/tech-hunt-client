import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./Header.css";
import navLogo from "../../../Images/navbar-logo.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggleTheme, setToggleTheme] = useState(true);
  const [theme, setTheme] = useState("light");
  const [welcome, setWelcome] = useState(true);

  const handleLogOut = () => {
    logOut();
  };

  const handleToggleTheme = (toggleTheme) => {
    setToggleTheme(toggleTheme);
    if (toggleTheme) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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
            onClick={() => setWelcome(!welcome)}
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
              {user ? (
                <>
                  {user.photoURL ? (
                    <OverlayTrigger
                      key={"bottom"}
                      placement={"bottom"}
                      overlay={<Tooltip>{user.displayName}</Tooltip>}
                    >
                      <Image
                        roundedCircle
                        className="me-2"
                        style={{ height: "40px", width: "40px" }}
                        src={user.photoURL}
                      ></Image>
                    </OverlayTrigger>
                  ) : (
                    <FaUserAlt
                      className="me-2 text-white fs-3"
                      title={user.displayName}
                      style={{ height: "40px", width: "40px" }}
                    ></FaUserAlt>
                  )}
                  <p>
                    <Button
                      onClick={handleLogOut}
                      variant="light"
                      className="me-2 fw-bold "
                    >
                      Log Out
                    </Button>
                  </p>
                </>
              ) : (
                <Link to="/login" className="mb-sm-3 mb-2">
                  <Button variant="light" className="me-2 fw-bold ">
                    Login
                  </Button>
                </Link>
              )}

              <p>
                <Button
                  onClick={() => handleToggleTheme(!toggleTheme)}
                  variant={theme}
                  className="me-2 fw-bold"
                >
                  {theme} mode
                </Button>
              </p>
            </Nav>
            <div className="d-md-none d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`d-lg-block ${welcome ? "d-block" : "d-none"}`}>
        <div className="w-75 m-5 pb-5 text-white d-lg-block ">
          <h1>Welcome to TechHunt</h1>
          <p>
            You can learn easily popular computer languages and web development
            tools here.
          </p>
          <p>Let's Explore...</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
