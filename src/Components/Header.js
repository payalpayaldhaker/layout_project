import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function Header() {
 

  return (
    
      <> 
         <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className="mx-5">Home</Link>
      <Link to="/login" className="mx-5 ">Login</Link>
      <Link to="/register" className="mx-5">Register</Link>
    </Nav>
    </Container>
  </Navbar>
      
      </>
      
   
  )
}
