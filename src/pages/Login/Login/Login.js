import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { FaGithub, FaGoogle } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="mx-auto mb-5 form-container">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      {error && <p className="text-danger">{error}</p>}
      <p className="mt-1">
        <small>
          No Accournt? Please <Link to="/register">Register</Link>
        </small>{" "}
      </p>
      <div className="d-flex justify-content-center">
        <hr className="w-25" />
        <small>OR</small>
        <hr className="w-25" />
      </div>
      <Button
        onClick={handleGoogleSignIn}
        variant="primary"
        className="w-100 mt-3"
      >
        {" "}
        <FaGoogle></FaGoogle> Sign in with Google
      </Button>
      <Button
        onClick={handleGithubSignIn}
        variant="primary"
        className="w-100 mt-3"
      >
        <FaGithub></FaGithub> Sign in with Github
      </Button>
    </div>
  );
};

export default Login;
