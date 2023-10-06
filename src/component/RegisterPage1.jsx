import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from 'react-bootstrap';

function RegisterPage1() {
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [PhoneNumber,setPhoneNumber] = useState("");
    const [Password,setPassword] = useState("");
    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();    
    
    const Register = (e) =>{
      e.preventDefault();

      if (!Name || !Email || !Password || !PhoneNumber) {
        setFlag(true);
      } else {
        setFlag(false);
        localStorage.setItem("Email", JSON.stringify(Email));
        localStorage.setItem(
          "Password",
          JSON.stringify(Password)
        );
        console.log("Saved in Local Storage");
        navigate("/")
    }
  }
  return (
    <div>
       <div className='container mt-5' style={{minHeight: "80vh"}} >
         <Form onSubmit={Register} className="bg-dark  text-white border border-5 mb-5 px-3 pt-3"> 
        <h4 className=" text-center mb-2">
          Register
        </h4>
        <Row className="mb-4 mt-3">
          <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label className='mx-4'>FullName</Form.Label>
            <Form.Control
              
              value={Name}
              onChange={(event) => setName(event.target.value)}
              className='rounded-pill'
              type="text"
              placeholder="Enter Your Full Name"
            />
            <Form.Label className=' mt-2 mx-4'>E-mail</Form.Label>
            <Form.Control
              
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
              className='rounded-pill'
              type="email"
              placeholder="Enter Your Email"
            />
            <Form.Label className=' mt-2 mx-4'>Phone Number</Form.Label>
            <Form.Control
              value={PhoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className='rounded-pill'
              type="tel"
              placeholder="Enter Your Phone Number"
            />
            <Form.Label className='mt-3 mx-4'>Password</Form.Label>
            <Form.Control
              
              value={Password}
              onChange={(event) => setPassword(event.target.value)}
              className='rounded-pill'
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
                Already Registerd<Link to="/" className='ms-2 text-warning'>Login</Link>
            </p>
          </Row>
          { flag && (
                <Alert color="primary" variant="danger">
                  OOPS!! You Missing Some/All Fields, Please Fill All The Above Fields 
                </Alert>
              )}
          </Form>        
    </div>
    </div>
  )
}

export default RegisterPage1