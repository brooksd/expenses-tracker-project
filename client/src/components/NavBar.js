import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = ( {user} ) => {
  return (
    <Navbar bg="info" variant="dark" className="mb-4">
        <Container>
            <Navbar.Brand>Your's Expenses </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="/news">News</Nav.Link> */}
            </Nav>
            <Navbar.Text>
                <h4>Signed in as {user.first_name}</h4>
            </Navbar.Text>
        </Container>
    </Navbar>
  )
}

export default NavBar