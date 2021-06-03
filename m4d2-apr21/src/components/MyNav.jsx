import { Button, Form, FormControl, Navbar, Nav } from "react-bootstrap"

const MyNav = () => (
  <Navbar className="text-white" bg="success" expand="lg">
    <Navbar.Brand className="text-white" href="#home">
      Weenie Bookshop
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="text-white" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="text-white" href="#link">
          About
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Browse</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)
export default MyNav
