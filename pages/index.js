import React, { useState, useEffect} from 'react';



export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <a className="navbar-brand my-primary-color" href="#">GOALPrime</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  EXPLORE
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">ABOUT US</a></li>
                  <li><a className="dropdown-item" href="#">TEAM</a></li>
                  <li><a className="dropdown-item" href="#">VOLUNTEER</a></li>
                  <li><a className="dropdown-item" href="#">EVENTS</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  WHAT WE DO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRESS CENTER
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">ABOUT US</a></li>
                  <li><a className="dropdown-item" href="#">TEAM</a></li>
                  <li><a className="dropdown-item" href="#">VOLUNTEER</a></li>
                  <li><a className="dropdown-item" href="#">EVENTS</a></li>
                </ul>
              </li>
            </ul>
            {/* <li className='nav-item'> */}
              <a className='ms-5 button rounded-pill d-flex align-items-center justify-content-center'>
                Donate Now 
                <span className='circle ms-3'><i className='fa-solid fa-heart my-primary-color'></i></span>
              </a>
            {/* </li> */}
          </div>
        </div>
      </nav>
    </>
  )
}
