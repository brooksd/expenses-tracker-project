import {Navbar, Container, Nav} from "react-bootstrap";

function NavBar({user}){
    return (
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>Mashimoni Expenses</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
            <h4 className="me-auto text-light mt-1">Expenses </h4>
          <Navbar.Text>
            <h5 className="text-light mt-2">Signed in as : {user.first_name}</h5>
          </Navbar.Text>
        </Container>
      </Navbar>
    );
}

export default NavBar