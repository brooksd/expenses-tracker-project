import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Error from "./Error";

const SignUpForm = ( { onLogin } ) => {
  const history = useHistory()

  const [firstName, setFirstName ] = useState("")
  const [lastName, setLastName ] = useState("")
  const [userName, setUserName ] = useState("")
  const [password, setPassword ] = useState("")
  const [confirmPassword, setConfirmPassword ] = useState("")
  const [errors, setErrors ] = useState([])

  const handleClick = () => { history.push("/") }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      password: password,
      password_confirmation: confirmPassword
    }

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then((res) => {
      if(res.ok){
        res.json().then(newUser => onLogin(newUser))
      } else {
        res.json().then(error => setErrors(error.errors))
      }
    })

    setFirstName("")
    setLastName("")
    setUserName("")
    setPassword("")
    setConfirmPassword("")

  }
  
  return (
    <Container>
      <h1 className=" text-info mt-5 p-3 text-center rounded"> Sign up</h1>
      <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form>
                  <Form.Group controlId="formfirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="firstname" placeholder="Enter first name" onChange={(e)=>setFirstName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formlastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="lastname" placeholder="Enter last name" onChange={(e)=>setLastName(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formusername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="username" placeholder="Enter username" onChange ={(e)=>setUserName(e.target.value)}/>
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                  </Form.Group>
                  {errors.map((err)=>(<Error key={err} err={err} />))}
                  <Row className="mt-3">
                  <Button onClick={handleSubmit} as={Col} className="mx-2" variant="info" type="submit">
                      Sign up
                  </Button>
                  <Button onClick={handleClick} as={Col} className="mx-2" variant="info" type="submit">
                      Back
                  </Button>
                  </Row>
              </Form>
          </Col>
      </Row>
  </Container>
  )
}

export default SignUpForm

