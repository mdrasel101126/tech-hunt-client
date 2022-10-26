import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 my-5 mx-auto g-4 g-md-3 gy-sm-4">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
