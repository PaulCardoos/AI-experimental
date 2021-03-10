import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navigation from '../components/Navigation'
import NavigationOpen from '../components/NavigationOpen'
import BERT from '../components/BERT'
import CocoSsd from '../components/CocoSsd'
import {Navbar, Container, Row,Col, Button} from 'react-bootstrap'
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
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
                <Button className='btn' style={{backgroundColor:'transparent', border:'0px'}} onClick={() => menuHandler()} id="menu-toggle">{isOpen ? <span className='text-white'>&#x2190;</span> : <span className='text-white'>&#x2192;</span>} </Button>
                  {isOpen ? <Navigation/> : <NavigationOpen/>}
                </Navbar>
                <div className="container-fluid">
                    <h1 className='text-center'>
                      How Our Models Work
                    </h1>
                <Container>
                  <Row>
                    <Col className='mt-3' sm={12} md={12} lg={6}>
                      <BERT/>
                      
                    </Col>
                    <Col className='mt-3' sm={12} md={12} lg={6}>
                      <CocoSsd/>
                      
                    </Col>
                  </Row>

                </Container>
                
              </div>
            </div>
            </div>
  
        )

}

export default Home
