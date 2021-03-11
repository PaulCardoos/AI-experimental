import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nlpModelAction, nlpModelAnswersAction} from '../actions/modelActions'
import { Form, Container, Row, Col, ListGroup, Button} from 'react-bootstrap'
import Example from '../components/Example'
import Loader from './Loader'

const NLP = () => {
    //keep this as local state for when we refactor to redux 
    const [questionState, setQuestionState] = useState(null)
    const [passageState, setPassageState] = useState(null)

    const dispatch = useDispatch()
    
    const nlpModel = useSelector(state => state.nlpModel)
    const { loading, error, model } = nlpModel

    const nlpAnswers = useSelector(state => state.nlpAnswers)
    const { generating, e, answers } = nlpAnswers


    useEffect(() => {
        
        if(!model){
            dispatch(nlpModelAction())
        }

    }, [dispatch])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(nlpModelAnswersAction(passageState, questionState, model))
    }

    return (
        <Container>
            <h1 className='text-center'>Natural Language Question Answering using BERT </h1>
                {loading ? <Loader/> :
            <Row className='mt-3 mb-4'>
                <Col sm={12} md={12} lg={6}>

                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group controlId="passage">
                            <Form.Label>Enter a passage</Form.Label>
                            <Form.Control onChange={(e) => setPassageState(e.target.value)} as="textarea" rows={7} />
                        </Form.Group>

                        <Form.Group controlId="question">
                            <Form.Label>Ask your question</Form.Label>
                            <Form.Control onChange={(e) => setQuestionState(e.target.value)} as="textarea" rows={2} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                {generating ? <Loader/> :
                <Col sm={12} md={12} lg={6}>
                    {answers.length === 0 ? <Example/> :
                    <>
                    <h5>Results</h5>
                    <ListGroup variant="flush">
                        {answers && answers.map((ans) =>  <ListGroup.Item>{ans.text}</ListGroup.Item>) }
                    </ListGroup>
                    </>}

                </Col>}
            </Row> }

        </Container>

    )
}

export default NLP
