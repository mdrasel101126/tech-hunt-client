import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  console.log(course);
  const { id, name, picture, rating, duration } = course;
  return (
    <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name} Course</Card.Title>
        <>
          <p>
            Rating:<FaStar className="text-warning"></FaStar> {rating}
          </p>
          <p>Duration: {duration} month</p>
        </>
        <Link to={`/course/${id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Course;
