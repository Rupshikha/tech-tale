import React, { useRef, useState }  from 'react';
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import GoogleButton from "react-google-button";
import { Container } from "react-bootstrap";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, googleSignIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


  async function handleSubmit(e) {
      e.preventDefault()

    try{
         setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          navigate("/home")
    } catch {
        setError('Failed to log in');
    } 

    setLoading(false)
  };


  const handleGoogeSignIn = async(e) =>{
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
return (
<Container
        className=" d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      > 
    <div className="w-100" style={{ maxWidth: "400px" }}>
    
  
    <Card>
      <Card.Body>
          <h2 className="text-center my-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
           <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                
                <Form.Control className=" p-2" placeholder="Email" type="email" ref={emailRef} required />
            </Form.Group>
               
            <Form.Group id="password">
                
                <Form.Control className="my-3 p-2" placeholder='Password' type="password" ref={passwordRef} required/>
            </Form.Group>

           

            <Button disabled={loading} className=" mt-4 p-2 w-100" type="submit">Login</Button>   

        </Form>

        <div className= "w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      <hr/>
      <div>
            <GoogleButton className="w-100 g-btn my-3" type="dark" onClick={handleGoogeSignIn}/>
     </div> 
     </Card.Body>
     </Card>
     <div className="w-100 text-center mt-2">
         Need an account? <Link to="/signup">Sign Up</Link>
     </div>
   
   </div>
  </Container>
  );
}