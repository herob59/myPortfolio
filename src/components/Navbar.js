import React from "react"
import hit from "../logo/hit.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
    
    <a className="navbar-brand" href="hit"><img className="hit" src={hit} alt="hit"/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <FontAwesomeIcon icon={faBars} style={{color:'#fff'}} /> 
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
    <li className="nav-item active">
    <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/about">about me</a>
    </li> 
          <li className="nav-item">
          <a className="nav-link" href="/about">services</a>
          </li> 
          <li className="nav-item">
          <a className="nav-link" href="/about">experiences</a>
          </li> 
          <li className="nav-item">
          <a className="nav-link" href="/about">portfolio</a>
          </li> 
          <li className="nav-item">
          <a className="nav-link" href="/about">contacts</a>
          </li> 
        </ul>
      </div>
    
    </div>
    </nav>
    )
  }

export default Navbar