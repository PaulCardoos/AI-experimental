import { Button, Image, Table, Container, Col, Row } from 'react-bootstrap'
import promisefile from 'promise-file-reader'
import Target from "./Target"
import Loader from './Loader'
import {useSelector, useDispatch} from 'react-redux'
import {cocoModelAction, cocoPredictionAction} from '../actions/modelActions'
import React, { useEffect, useRef, useState } from 'react'


const ObjectDetectionModel = () => {
  //local state for redux refactoring
  const [imageState, setImageState] = useState(null)
  const [imgSizeState, setImageSizeState] = useState({})
  const [currentRefState, setCurrentRefState] = useState(null)
 
  //prediction and model from redux
  const dispatch = useDispatch()

  const cocoSsdModel = useSelector(state => state.cocoSsdModel)
  const {loading, cocoModel} = cocoSsdModel

  const cocoPredictions = useSelector(state => state.cocoPredictions)
  const { generating, predictions } = cocoPredictions

  //useRef is great for obtaining sizes
  const imageRef = useRef()
  //in order to access our file picker
  const fileRef = useRef();

  useEffect(() => {

    if(!cocoModel){
      dispatch(cocoModelAction())
    }
 
    if (imageState) {
      const imgRef = {
        imgRefHeight: imageRef.current.height,
        imgRefWidth: imageRef.current.width
      }

      setCurrentRefState(imgRef)

    }
  }, [imageState, dispatch]);


  //image upload process
  const getFile = () => {
    if (fileRef.current) fileRef.current.click();
  }

  //read photo in base64 to upload to browser
  const readFileForMe = async (file) => {
    return promisefile.readAsDataURL(file)
      .then((newImage) => newImage)
      .catch(err => console.log(err))
  }

  const onSelectImage = async (e) => {
    try { 
      
          const file = e.target.files[0]
          const newImage = await readFileForMe(file)
          setImageState(newImage)

          const imgDiv = document.createElement('img')
          imgDiv.src = newImage
          imgDiv.onload = async () => {
            const imgSize = {
              imgWidth: imgDiv.width,
              imgHeight: imgDiv.height
            }
            setImageSizeState(imgSize)
            dispatch(cocoPredictionAction(imgDiv, cocoModel))
            
          }

    } catch (e) { 
          const newImage = null
          console.log(e)
          return 
    }
  }

    return (
        <div>
        <Container>
  
          <Row className="justify-content-center">
            <Col className="mt-3 text-center">
              <h1 >Object Detection with Tensorflow </h1>
            </Col>
          </Row>
          <Row className=" justify-content-md-center my-4">
            {loading && <Loader/>}
            {imageState && <Col className="col-md-auto" >
              <Image ref={imageRef} style={{
                display: "flex", flexDirection: "column", alignItems: "center", border: "solid", position: "relative",
                borderWidth: "2px", maxWidth: "700px",
              }} fluid src={imageState} />
              {predictions.map(pre => <Target reference={currentRefState} size={imgSizeState} prediction={pre} />)}
  
            </Col>}
          </Row>
          <Row>
            <Col className="col-md-12 text-center"><input type="file" style={{ display: "none" }} ref={fileRef} onChange={(e) => onSelectImage(e)} />
              <Button onClick={getFile} className="mt-3" variant="outline-dark">Select An Image</Button></Col>
          </Row>
          {generating && <Loader/>}
          {predictions.length === 0 ? <></> : 
          <>
          <h5 className='text-center mt-3 mb-4'>Results</h5>
          <Table className='mt-4' striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Predictions</th>
                  <th>Probability</th>
                </tr>
              </thead>
              <tbody>
              {predictions.map(pre =>
                      <tr>
                      <td>{pre.class}</td>
                      <td>{pre.score * 100}</td>
                    </tr>)}
              </tbody>
    
  
          </Table></>}
     </Container>
  
      </div>
  
    )
}

export default ObjectDetectionModel

