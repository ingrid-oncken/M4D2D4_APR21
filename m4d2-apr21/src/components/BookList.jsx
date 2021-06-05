import SingleBook from "./SingleBook"
import React from "react"
import { Book } from "react-bootstrap-icons"
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap"

class BookList extends React.Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <Container>
        <Row>
          <Form inline>
            {this.props.books.filter((index) =>
              index.title.toLowerCase().includes(this.state.searchQuery)
            )}
            <Button variant="link">
              <Book color="white" size={30} />
            </Button>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
          </Form>
        </Row>
        <Row className="d-flex flex-wrap">
          {this.props.books
            .filter((index) =>
              index.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((index) => (
              <Col xs={3} className="my-2">
                <SingleBook book={index} />
              </Col>
            ))}
        </Row>
      </Container>
    )
  }
}
export default BookList
