import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory} from "react-router-dom";

const LoginForm = ({onLogin, user}) => {

    const history = useHistory()
    
    const[ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errors, setErrors ] = useState([])

    useEffect(()=>{
        if(user){
     history.push("/home")}
    })


    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }

        ).then((res) => {
            if (res.ok) {
             res.json().then((user) => onLogin(user));
             }
             else{
                 res.json().then((error)=> setErrors(errors.error))
             }
        })

    }

    return(
        <Container>
      <h1 className=" text-info mt-5 p-3 text-center rounded"> Login</h1>
      <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="email" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)} />
                  </Form.Group>
            
                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                  </Form.Group>
                  <Row className="mt-3">
                  <Button as={Col} className="mx-2" variant="info" type="submit" onClick={handleSubmit}>
                      Login
                  </Button>
                  <p className="text-center rounded" style={{ color: "red" }}>{errors}</p>
                  <p className="text-info mt-5 p-3 text-center rounded">If you dont have an account</p>
                  <Link to='/sign' className="btn btn-info">
                    Sign up
                   </Link>
                  </Row>
              </Form>
          </Col>
      </Row>
  </Container>
    )
}

export default LoginForm;