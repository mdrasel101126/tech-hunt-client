import React from "react";
import { Container } from "react-bootstrap";

const Faq = () => {
  return (
    <Container>
      <h3 className="text-center">Frequently Asked Questions</h3>
      <ol>
        <li>What is cors?</li>
        <li>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </li>
        <li>How does the private route work?</li>
        <li>What is Node? How does Node work?</li>
      </ol>
    </Container>
  );
};

export default Faq;
