import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div className="w-75 bg-primary text-white m-5 p-5 rounded">
      <h1>{course.name} Course</h1>
      <p>Welcome to {course.name} Course</p>
    </div>
  );
};

export default CheckOut;
