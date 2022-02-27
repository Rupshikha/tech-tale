import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef=useRef();
  const { signup, update } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password donot match");
    }
    try {
      setLoading(true);
      await signup( emailRef.current.value, passwordRef.current.value);
      await update(nameRef.current.value);
      navigate("/home");
    } catch {
      setError("Failed to create an account");
    } 
    


    setLoading(false);
  }
  return (
    <Container
      className=" d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center my-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>


            <Form.Group id="name">
                
                <Form.Control
                  className="my-4 p-2"
                  placeholder="Name"
                  type="name"
                  ref={nameRef}
                  required
                />
              </Form.Group>

              <Form.Group id="email">
                
                <Form.Control
                  className="my-4 p-2"
                  placeholder="Email"
                  type="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>

              <Form.Group id="password">
               
                <Form.Control
                  className="my-4 p-2"
                  placeholder="Password"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>

              <Form.Group id="passwordConfirm">
                
                <Form.Control
                  className="my-4 p-2"
                  placeholder="PasswordConfirm"
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>

            

              <Button disabled={loading} className="my-4 .p-5, w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </Container>
  );
}
