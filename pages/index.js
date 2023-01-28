import React, { useState, useEffect} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


export default function Home(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">YMDB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                <span className='px-2'><i className="fa-solid fa-bars text-dark"></i></span>
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className='px-2'><i className="fa-solid fa-bookmark text-dark"></i></span>
                  Watchlist
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}
