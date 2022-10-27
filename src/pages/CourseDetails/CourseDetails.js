import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const options = {
  orientation: "landscape",
};

const CourseDetails = () => {
  const course = useLoaderData();

  return (
    <div>
      {course ? (
        <>
          <div className="m-2 mt-5">
            <div className="pb-3 text-center">
              <Pdf
                targetRef={ref}
                filename="course-details.pdf"
                options={options}
              >
                {({ toPdf }) => (
                  <Button variant="primary" onClick={toPdf}>
                    <FaDownload></FaDownload> Download PDF
                  </Button>
                )}
              </Pdf>
            </div>
            <Card ref={ref}>
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
                    Rating: <FaStar className="text-warning"></FaStar>{" "}
                    {course.rating}
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
        </>
      ) : (
        <div className="text-danger d-flex justify-content-center mt-5">
          <div>
            <h3>No Course Found!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
