import React from 'react'
import "../side.css"


const NavigationOpen = () => {


    return (
     
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">How It Works</a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Detection</a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="#">NLP</a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Overview</a>
          </li>
          </ul>
        </div>
       

  
    )
}

export default NavigationOpen