import SingleBook from "./SingleBook"
import React from "react"
import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap"

class BookList extends React.Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <Container>
        <Row className="d-flex flex-wrap">
          {
          this.props.books
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
