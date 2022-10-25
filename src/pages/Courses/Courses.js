import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="row row-cols-lg-3 g-lg-4">
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
