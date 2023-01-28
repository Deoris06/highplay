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
            <div className='d-md-flex justify-content-md-between w-100'>
              <ul className="navbar-nav ms-md-5 align-self-center mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active fw-bold" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                  <a className="nav-link fw-bold" href="#">
                    WHAT WE DO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">
                    PROJECTS
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            
                <a className='ms-md-auto button align-self-end rounded-pill d-flex align-items-center justify-content-center'>
                  Donate Now 
                  <span className='circle ms-3'><i className='fa-solid fa-heart my-primary-color'></i></span>
                </a>
              </div>
          </div>
        </div>
      </nav>
      <main>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators d-none">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/static/child.jpeg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-nonem d-md-blocmk">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="/static/child-2.jpeg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="/static/child.jpeg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
      </main>
    </>
  )
}
