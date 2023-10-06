import React from 'react'
import { useState } from "react";
import { Alert } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import Home from './Home';

function LoginPage1() {
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [flag, setFlag] = useState(false);
    const navigation = useNavigate();
    const [home, setHome] = useState(true);

    function SignedIn(e) {
      e.preventDefault();
      let pass = localStorage
        .getItem("Password")
        .replace(/"/g, "");
      let mail = localStorage.getItem("Email").replace(/"/g, "");
      
  
      if (!Email || !Password) {
        setFlag(true);
        console.log("EMPTY");
      } else if (Password !== pass || Email !== mail) {
        setFlag(true);
      } else {
        // navigation('/Home')
        setHome(!home);
        setFlag(false);
      }
    }
  
  
  return (
    <div className='container' style={{minHeight:'70vh'}}>
      {home ? (
         <Form onSubmit={SignedIn} className="bg-dark  text-white border border-5 mt-5 px-3 py-3"> 
        <h3 className=" text-center mb-2">
          Login
        </h3>
        <Row className="mb-4 mt-3">
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label className='mx-4'>E-mail</Form.Label>
            <Form.Control
              required
              className='rounded-pill'
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter Your Email"
            />
            <Form.Label className='mt-3 mx-4'>Password</Form.Label>
            <Form.Control
              required
              className='rounded-pill'
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Enter Your Password"
            />
        <Button
          className="mt-4 py-2 w-100 bg-success border-success rounded-pill"
          type="submit"
        >
          Submit
        </Button>
          </Form.Group>
          <p className='text-end mt-3'>
                <Link className='text-danger'>ForgotPassword?</Link>
                <Link to="/Register" className='ms-2 text-warning'>Register</Link>
            </p>

          </Row>
          {flag && (
            <Alert color="primary" variant="warning">
              Please Enter Valid Credentials !!
            </Alert>
          )}
          </Form>  
          ) : (
            <Home />
          )}      
    </div>
  )  
}

export default LoginPage1