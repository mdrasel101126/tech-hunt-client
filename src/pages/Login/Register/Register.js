import React, { useState } from "react";
import { useContext } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setSpinner(true);
    const form = e.target;
    const name = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        setSpinner(false);
        const user = userCredential.user;
        handleUpdateUserProfile(name, photoURL);
        navigate("/");
        form.reset();
        toast.success("You are successfully registered");
        setError("");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setSpinner(false);
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        // Profile updated!
        // ...
        window.location.reload();
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  return (
    <div className="mx-auto mb-5 form-container">
      {spinner && (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter Photo URL"
          />
        </Form.Group>
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
          Register
        </Button>
      </Form>
      {error && <p className="text-danger">{error}</p>}
      <p className="mt-1">
        <small>
          Already Have an Accournt? Please <Link to="/login">Login</Link>
        </small>{" "}
      </p>
    </div>
  );
};

export default Register;
