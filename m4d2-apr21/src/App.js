import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyJumbotron from "./components/MyJumbotron"
import MyFooter from "./components/MyFooter"
import MyCards from "./components/MyCards"
import { Container } from "react-bootstrap"
import LatestRelease from "./components/LatestRelease"
import WarningSign from "./components/WarningSign"

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <MyJumbotron title="Weenie Bookshop" />
        <WarningSign text="We assure to you, there is no better price than here!" />
        <LatestRelease />
        <MyCards />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
