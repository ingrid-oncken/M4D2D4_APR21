import React from "react"
import { Navbar } from "react-bootstrap"

const MyFooter = () => {
  return (
    <Navbar className="footer" bg="success">
      <footer className="container justify-content-center">
        <div className="row ">
          {/* column 1 */}
          <div className="col-sm-6 col-md-3">
            <h4>loren ipsum </h4>
            <ul className="list-unstyled">
              <li>Loren loren</li>
              <li>Loren loren</li>
              <li>Loren loren</li>
              <li>Loren loren</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col-sm-6 col-md-3">
            <h4>loren ipsum </h4>
            <ul className="list-unstyled">
              <li>Loren loren</li>
              <li>Loren loren</li>
              <li>Loren loren</li>
              <li>Loren loren</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col-sm-6 col-md-3">
            <h4>loren ipsum </h4>
            <ul className="list-unstyled">
              <li>Loren loren</li>
              <li>Loren loren</li>
              <li>Loren loren</li>
              <li>Loren loren</li>
            </ul>
          </div>
          {/* column 4 */}
          <div className="col-sm-6 col-md-3">
            <h4>loren ipsum </h4>
            <ul className="list-unstyled">
              <li>Loren loren</li>
              <li>Loren loren</li>
              <li>Loren loren</li>
              <li>Loren loren</li>
            </ul>
          </div>
          {/* Footer Botton */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} My First React App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </footer>
    </Navbar>
  )
}

export default MyFooter
