import React from 'react'
import './Mainstyle.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  // const navStyles = {
  //   image: './image/Logo.png',

  // };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark stroke">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./icons/Frame20.png" className="img-fluid" alt="Way to Turf" />
            {/* <h2>Way to Turf</h2> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-lg-center  " id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active px-3 home-menu" aria-current="page" href="#">
                <i className="fa-solid fa-house ii "></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#">
                <i className="fa-solid fa-user ii"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#">
                <i className="fa-solid fa-briefcase ii"></i> Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#">
                <i className="fa-solid fa-baseball ii"></i> Sports
                </a>
              </li>
              {/* <li className="nav-item dropdown">
          <a
            className="nav-link active dropdown-toggle text-black"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Spot
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li> */}
              <li className="nav-item">
                <a
                  className="nav-link active px-3"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                 <i className="fa-solid fa-address-book ii"></i>  Contact
                </a>
              </li>
            </ul>

            <button className="btn  text-white login-btn" type="submit">
              Login
            </button>

          </div>
        </div>
      </nav>
    </>


  )
}

export default Navbar