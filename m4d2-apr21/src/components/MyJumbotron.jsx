import { Jumbotron } from "react-bootstrap"

const MyJumbotron = (props) => (
  <Jumbotron className="text-center mt-5">
    <div>
      <p>
        <h1>{props.title}</h1>
        “There is more treasure in books than in all the pirate’s loot on
        Treasure Island.” -Walt Disney
      </p>
      <p>{/* <Button variant="primary">Learn more</Button> */}</p>
    </div>
  </Jumbotron>
)

export default MyJumbotron
