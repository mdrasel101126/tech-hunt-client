import jsPDF from "jspdf";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const generatePDF = () => {
    const pdf = new jsPDF("landscape", "px", "a4", "false");
    pdf.addImage(course.picture, "PNG", 65, 20, 300, 200);
    pdf.text(60, 260, `Course Name : ${course.name}`);
    pdf.text(60, 280, `Course Instructor : ${course.teacher}`);
    pdf.text(60, 300, `Course Duration : ${course.duration} Months`);
    pdf.text(60, 320, `Course Description : ${course.details}`, {
      maxWidth: 300,
    });

    pdf.save("course-details.pdf");
  };
  return (
    <div className="m-2">
      <div className="pb-3 text-center">
        <Button onClick={generatePDF} variant="primary">
          {" "}
          <FaDownload></FaDownload> Download PDF
        </Button>
      </div>
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
