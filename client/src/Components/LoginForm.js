import React, {useState, useEffect} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link, useHistory} from "react-router-dom";

const LoginForm = ({onLogin, user}) => {

    const history = useHistory()
    
    const[uName, setUname] = useState("")
    const [pass, setPass] = useState("")
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        if(user){
     history.push("/home")}
    }, [])


    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username: uName,
            password: pass
        }
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }

        ).then((r) => {
            if (r.ok) {
             r.json().then((user) => onLogin(user));
             }
             else{
                 r.json().then((error)=> setErrors(error.error))
             }
            })

    }

    return (
      <Container className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 mt-5">
            <h2 className=" mt-3 p-2 text-center rounded"> Mashimoni Expense Tracker </h2>
            <img
              src="https://img.freepik.com/free-vector/man-with-tablet-little-schoolgirl_107791-1187.jpg?w=826&t=st=1665665333~exp=1665665933~hmac=388f7fde69cbdf3c602834bacd39140040fd493540e101398e4ce9684cb75a13"
                 height={350} width={650}
              alt="login_image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h1 className=" text-info mt-5 p-3 text-center rounded"> Login Here</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter username"
                  onChange={(e) => setUname(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </Form.Group>
              <Row className="mt-3">
                <Button
                  as={Col}
                  className="mx-2"
                  variant="info"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <p className="text-center rounded" style={{ color: "red" }}>
                  {errors}
                </p>
                <p className="text-info mt-3 p-3 text-center rounded">
                  If you dont have an account:
                    <Link to="/sign">
                     Sign up
                    </Link>
                </p>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    );
    }

export default LoginForm

