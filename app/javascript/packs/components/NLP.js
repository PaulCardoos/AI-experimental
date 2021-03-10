import React, { useState, useEffect } from 'react'
import { Form, Container, Row, Col, ListGroup, Button} from 'react-bootstrap'
import Example from '../components/Example'
import Loader from './Loader'
const NLP = () => {
    const [modelState, setModelState] = useState(null)
    const [answersState, setAnswersState] = useState(null)
    const [loadingState, setLoadingState] = useState(false)


    //keep this as local state for when we refactor to redux 
    const [questionState, setQuestionState] = useState(null)
    const [passageState, setPassageState] = useState(null)


    const loadModel = async () => {
        const model = await qna.load();
        setModelState(model)
        console.log("we made it here, model loaded")
    }

    useEffect(() => {
        loadModel()

        return () => { }
    }, [])

    const onSubmitHandler = async (e) => {
        setLoadingState(true)
        e.preventDefault()
        try {
            console.log(loadingState)
            console.log(questionState)
            console.log(passageState)
            const answer = await modelState.findAnswers(questionState, passageState)
            setAnswersState(answer)
            console.log(answer)
            
        } catch (e) {
            console.log('something went wrong')
          
        }
        setLoadingState(false)
    }

    return (
        <Container>
            <h1>Natural Language Question Answering using BERT </h1>
            {modelState === null ? <Loader/> :
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
                <Col sm={12} md={12} lg={6}>
                    {answersState === null ? <Example/> :
                    <ListGroup variant="flush">
                        {answersState && answersState.map((ans) =>  <ListGroup.Item>{ans.text}</ListGroup.Item>) }
                    </ListGroup>}

                </Col>
            </Row> }

        </Container>

    )
}

export default NLP
