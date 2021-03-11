import React from 'react'
import { Row , Col, Container} from 'react-bootstrap'


const Loader = () => {
    return (
      <Container>
        <Row>
        <Col >
        
        <div className="mt-5 d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Model is Loading</span>
         </div>
      </div>

            <h2 className='text-center mt-3'>Model is Loading ... </h2>
        </Col>  
        </Row>
      </Container>
            
    )
}

export default Loader
