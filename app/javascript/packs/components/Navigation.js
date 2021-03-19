import React from 'react'
import "../side.css"

const Navigation = () => {
  //Our navbar when the side bar is out and displayed
    return (
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" disabled href="#">Sign in</a>
            </li> 
          </ul>
        </div> 
    )
}

export default Navigation
