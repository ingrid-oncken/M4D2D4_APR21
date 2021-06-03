import React from "react"
import fantasy from "../data/fantasy.json"
import { Card, Button } from "react-bootstrap"

const SingleBook = ({ book }) => {
  // console.log(fantasy)

  return (
    <Card>
      <Card.Img className="card-img" variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>
          {book.title.length > 50
            ? book.title.substr(0, 50) + "..."
            : book.title}
        </Card.Title>
        <Button variant="success">Buy</Button>
      </Card.Body>
    </Card>
  )
}
export default SingleBook

// const SingleBook = (props) => {
//   // console.log(fantasy)

//   return (
//     <div className="d-flex flex-wrap justify-content-center">
//       {fantasy.map((book) => {
//         return (
//           <Card style={{ width: "10rem" }}>
//             <Card.Img className="card-img" variant="top" src={props.book.img} />
//             <Card.Body>
//               <Card.Title>
//                 {props.book.title.length > 50
//                   ? props.book.title.substr(0, 50) + "..."
//                   : props.book.title}
//               </Card.Title>

//               <Button variant="success">Buy</Button>
//             </Card.Body>
//           </Card>
//         )
//       })}
//     </div>
//   )
// }

// export default SingleBook
