import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <Container className="blog-container">
      <h3 className="text-center">There are some frequently asked Q & A</h3>
      <div>
        <h4>What is cors?</h4>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div>
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
        </p>
        <p>The other options to implement authentication are:</p>
        <ul>
          <li>Auth0</li>
          <li>MongoDB</li>
          <li>Passport</li>
          <li>Okta</li>
          <li>JSON Web Token</li>
          <li>Keycloak</li>
          <li>Amazon Cognito</li>
        </ul>
      </div>
      <div>
        <h4>How does the private route work?</h4>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div>
        <h4>What is Node? How does Node work?</h4>
        <p>
          Node.js (Node) is an open source development platform for executing
          JavaScript code server-side.
        </p>
        <p>
          Node.js accepts the request from the clients and sends the response,
          while working with the request node.js handles them with a single
          thread. To operate I/O operations or requests node.js use the concept
          of threads. Thread is a sequence of instructions that the server needs
          to perform. It runs parallel on the server to provide the information
          to multiple clients. Node.js is an event loop single-threaded
          language. It can handle concurrent requests with a single thread
          without blocking it for one request.
        </p>
      </div>
    </Container>
  );
};

export default Blog;
