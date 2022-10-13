import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Error from "./Error";

const SignUpForm = ({ onLogin }) => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleClick = () => {
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      password: password,
      password_confirmation: confirmPassword,
    };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newUser) => onLogin(newUser));
      } else {
        res.json().then((error) => setErrors(error.errors));
      }
    });

    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5 mt-5">
          <img
            src="https://img.freepik.com/free-vector/analysis-financial-activities-business-character-reviewing-company-s-financial-operation-marketing-recommendation-budgeting-isolated-flat-vector-illustration_613284-774.jpg?w=740&t=st=1665671448~exp=1665672048~hmac=7c17ffcf79228ed4fd0eeb4a38840645a4b9f7d8e33bdd9aaef3420a05993a1d"
            height={350}
            width={500}
            alt="signup_image"
          />
          <h3 className=" mt-1 p-2 text-center rounded"> Join the <span className="text-primary">"Mashimz"</span> Movement </h3>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <h1 className=" text-primary mt-5 p-2 text-center rounded"> Sign up</h1>
          <Form>
            <Form.Group controlId="formfirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstname"
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formlastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Enter last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formusername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            {errors.map((err) => (
              <Error key={err} err={err} />
            ))}
            <Row className="mt-3">
              <Button
                onClick={handleSubmit}
                as={Col}
                className="mx-2"
                variant="primary"
                type="submit"
              >
                Sign up
              </Button>
              <Button
                onClick={handleClick}
                as={Col}
                className="mx-2"
                variant="primary"
                type="submit"
              >
                Back
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default SignUpForm;
