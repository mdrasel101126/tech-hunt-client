import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div className="m-5">
      <Card>
        <Card.Header as="h5">{course.name} For You</Card.Header>
        <Card.Img
          variant="top"
          style={{ height: "300px" }}
          className="img-fluid"
          src={course.picture}
        />
        <Card.Body>
          <Card.Title>{course.name} Course</Card.Title>
          <div>
            <Card.Text>{course.details}</Card.Text>
            <Card.Text>
              Rating: <FaStar className="text-warning"></FaStar> {course.rating}
            </Card.Text>
            <Card.Text>Duration: {course.duration} Month</Card.Text>
            <Card.Text>Instructor : {course.teacher}</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <div className="my-5 text-center">
        <Link to={`/checkout/${course.id}`}>
          <Button variant="primary">Get Premium Access</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
