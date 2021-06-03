import React from "react"
import fantasy from "../data/fantasy.json"
import { Card, Button } from "react-bootstrap"

const LatestRelease = () => {
  console.log(fantasy)

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {fantasy.map((book) => {
        return (
          <Card style={{ width: "10rem" }}>
            <Card.Img className="card-img" variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>
                {book.title.length > 50
                  ? book.title.substr(0, 50) + "..."
                  : book.title}
              </Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              <Button variant="success">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default LatestRelease
