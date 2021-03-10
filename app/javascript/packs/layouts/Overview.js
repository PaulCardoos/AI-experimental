import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Navigation from '../components/Navigation'
import Sample from '../components/Sample'
import NavigationOpen from '../components/NavigationOpen'
import {Navbar, Button} from 'react-bootstrap'
import 'react-bootstrap'
import '../side.css'


const Overview = () => {
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
   
    }, [])
    
    const menuHandler = () => {
        return isOpen ? setIsOpen(false) : setIsOpen(true)
    }

        return (
            <div className="d-flex" id="wrapper">
            {isOpen ? <Sidebar/> : <></>}
            <div id="page-content-wrapper">
                
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                <Button className='btn' style={{backgroundColor:'transparent', border:'0px'}} onClick={() => menuHandler()} id="menu-toggle">{isOpen ? <span className='text-white'>&#x2190;</span> : <span className='text-white'>&#x2192;</span>} </Button>
                  {isOpen ? <Navigation/> : <NavigationOpen/>}
                </Navbar>
                <div className="container-fluid">
                    <h1 className='mt-3 text-center'>Some Fake Sample Data</h1>
               <Sample/>
            </div>
                
              </div>
            </div>
        )

}

export default Overview
