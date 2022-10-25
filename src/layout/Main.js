import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="row">
        <div className="col-3 border-end border-3 ps-4">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-9 ps-5">
          <Outlet></Outlet>
        </div>
      </Container>
    </div>
  );
};

export default Main;
