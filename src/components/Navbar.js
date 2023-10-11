import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-ligh  ">
          <div className="container-fluid">
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link active text-light" aria-current="page" to="/">
                    Home
                  </Link>
                </li> */}
                <li className="nav-item ">
                  <Link className="nav-link text-light" to="Wealther">
                    WEALTHER
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-light"
                    to="Loader"
                    id="navbarDropdown"
                    role="button"
                    
                    aria-expanded="false"
                  >
                    LOADER
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="Recent"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    RECENT
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="Result"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    RESULT
                  </Link>
                </li> */}
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
