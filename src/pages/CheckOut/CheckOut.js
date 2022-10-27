import React from "react";
import { useLoaderData } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const CheckOut = () => {
  const course = useLoaderData();
  return (
    <div>
      {course ? (
        <>
          <div className="w-75 bg-primary text-white m-5 p-5 rounded mx-auto">
            <h1>{course.name} Course</h1>
            <p>Welcome to {course.name} Course</p>
          </div>
        </>
      ) : (
        <div>
          <NotFoundPage></NotFoundPage>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
