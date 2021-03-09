import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navigation from '../components/Navigation'
import {Navbar, Button} from 'react-bootstrap'
import 'react-bootstrap'
import '../side.css'

const Home = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    
    const menuHandler = () => {
      
        return isOpen ? setIsOpen(false) : setIsOpen(true)
    }

        return (
            <div className="d-flex" id="wrapper">
            {isOpen ? <Sidebar/> : <></>}
            <div id="page-content-wrapper">
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                  <Button className="btn" onClick={() => menuHandler()} id="menu-toggle">{isOpen ? <span>&#x2190;</span> : <span>&#x2192;</span>} </Button>
                  <Navigation />
                </Navbar>
                <div className="container-fluid">
                <h1 className="mt-4">Home</h1>
              <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the Button below, the menu will change.</p>
              <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
            </div>
                
              </div>
            </div>
        )

}

export default Home
