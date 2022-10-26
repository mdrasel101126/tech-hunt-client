import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";

const CourseContent = () => {
  return (
    <div className="row w-100">
      <div className="col-lg-3 col-md-4 ps-5 d-none d-sm-none d-md-block d-lg-block">
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="col-lg-9 ps-5 col-md-8 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CourseContent;
