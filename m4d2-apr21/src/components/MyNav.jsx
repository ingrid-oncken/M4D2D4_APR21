import { Button, Form, FormControl, Navbar, Nav } from "react-bootstrap"
// import { Book } from "react-bootstrap-icons"
import React from "react"

class MyNav extends React.Component {
  state = {
    searchQuery: "",
  }
  render() {
    return (
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
          {/* <Form inline> */}
            {/* {this.props.books.filter((index) =>
              index.title.toLowerCase().includes(this.state.searchQuery)
            )} */}
            {/* <Button variant="link">
              <Book color="white" size={30} />
            </Button>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default MyNav

{
  /*     <Row>
          <Col>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
              <Button variant="link">
          <Book color="white" size={30} />
        </Button>
            </Form>
          </Col>
        </Row>                                                                */
}
