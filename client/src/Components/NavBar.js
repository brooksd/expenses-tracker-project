import {Navbar, Container, Nav} from "react-bootstrap";

function NavBar({user}){
    return (
      <Navbar bg="info" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>Your's Expenses </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Navbar.Text>
            <h4>Signed in as {user.first_name}</h4>
          </Navbar.Text>
        </Container>
      </Navbar>
    );
}

export default NavBar