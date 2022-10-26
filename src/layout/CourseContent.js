import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";

const CourseContent = () => {
  return (
    <div className="row w-100">
      <div className=" col-sm-12 col-lg-3 col-md-12 ps-5">
        <LeftSideNav></LeftSideNav>
      </div>
      <div className="col-lg-9 ps-5 col-sm-12 col-md-12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CourseContent;
