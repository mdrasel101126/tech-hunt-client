import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, picture, rating, duration } = course;
  return (
    <div>
      <Card className="shadow">
        <Card.Img
          variant="top"
          style={{ height: "150px" }}
          className="img-fluid"
          src={picture}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <>
            <p className="my-0">
              Rating:<FaStar className="text-warning"></FaStar> {rating}
            </p>
            <p>Duration: {duration} month</p>
          </>
          <Link to={`/course/${id}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
