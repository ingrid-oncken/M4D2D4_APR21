import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyJumbotron from "./components/MyJumbotron"
import MyFooter from "./components/MyFooter"
// import MyCards from "./components/MyCards"
import { Container } from "react-bootstrap"
import SingleBook from "./components/SingleBook"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import fantasy from "./data/fantasy.json"
import BookList from "./components/BookList"

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <MyJumbotron title="Weenie Bookshop" />
        <WarningSign text="The best price!" />
        <MyBadge text="New" color="success" />
        <SingleBook book={fantasy[0]} />
        {/* <MyCards /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
