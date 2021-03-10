import React, {useState} from 'react'
import {Navbar, Button} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import Navigation from '../components/Navigation'
import NavigationOpen from '../components/NavigationOpen'
import NLP from '../components/NLP'
import '../side.css'


const nlpDetection = () => {
 
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
                      {isOpen ? <Navigation/> : <NavigationOpen/>}
                    </Navbar>
                    <div className="container-fluid">
                   <NLP/>
                </div>
                    
                  </div>
                </div>
            )
    
}


export default nlpDetection
