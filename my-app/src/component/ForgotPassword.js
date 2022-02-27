
import React, { useRef, useState }  from 'react';
import { Card , Form , Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, } from "react-router-dom"



export default function ForgotPassword() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { resetPassword ,currentUser} = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    


  async function handleSubmit(e) {
      e.preventDefault()

    try{
         setMessage('')
         setLoading(true)
              await resetPassword(emailRef.current.value)
              setMessage('Check your inbox for further instructions')
    } catch {
        setError('Failed to reset password');
    } 

    setLoading(false)
  }
   return (
    
  <div>
    <Card>
      <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {currentUser && currentUser.email}
          {error && <Alert variant="danger">{error}</Alert>}
           <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control className="mb-4" type="email" ref={emailRef} required />
            </Form.Group>
               
             <Form.Group id="check">
                 <Form.Check className="mb-4" type="checkbox" label="check me out"/>   
            </Form.Group>

            <Button disabled={loading} className="mb-5" type="submit">Reset Password</Button>   

        </Form>

        <div className= "w-100 text-center mt-3">
            <Link to="/login">Login</Link>
        </div>
        
     </Card.Body>
     </Card>
     <div className="w-100 text-center mt-2">
         Need an account? <Link to="/signup">Sign Up</Link>
     </div>
  </div>
  );
}