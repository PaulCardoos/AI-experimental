import { Button, Image, Container, Col, Row } from 'react-bootstrap'
import '../side.css'
import promisefile from 'promise-file-reader'
import Target from "./Target"
import "@tensorflow/tfjs-backend-cpu"
import "@tensorflow/tfjs-backend-webgl"
import React, { useEffect, useRef, useState } from 'react'

const ObjectDetectionModel = () => {
  const [imageState, setImageState] = useState(null)
  const [imgSizeState, setImageSizeState] = useState({})
  const [currentRefState, setCurrentRefState] = useState(null)
  const [predictionState, setPredictionState] = useState([])

  const imageRef = useRef()

  console.log("image ref ")

  useEffect(() => {
    if(predictionState){
      console.log(predictionState)
    }

    if (imageState) {
      const imgRef = {
        imgRefHeight: imageRef.current.height,
        imgRefWidth: imageRef.current.width
      }

      setCurrentRefState(imgRef)

    }
  }, [imageState, predictionState]);

  //in order to access our file picker
  const fileRef = useRef();

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

  const objectDetection = async (imgDiv) => {
    await tf.setBackend('cpu')
    const model = await cocoSsd.load({});
    const predictions = await model.detect(imgDiv, 8);
    return predictions
  }
  const onSelectImage = async (e) => {
    try { 
      
          const file = e.target.files[0]
          console.log(file)
          const newImage = await readFileForMe(file)
          setImageState(newImage)

          const imgDiv = document.createElement('img')
          imgDiv.src = newImage
          imgDiv.onload = async (imageRef) => {
            const imgSize = {
              imgWidth: imgDiv.width,
              imgHeight: imgDiv.height
            }
            //returns a callback
            return objectDetection(imgDiv)
              .then((prediction) => {
                setPredictionState(prediction)
                setImageSizeState(imgSize)
              })
              .catch(err => err)
              
        
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
            <Col className="text-center">
              <h1 >Object Detection with Tensorflow </h1>
            </Col>
          </Row>
          <Row className=" justify-content-md-center my-4">
            {imageState && <Col className="col-md-auto" >
              <Image ref={imageRef} style={{
                display: "flex", flexDirection: "column", alignItems: "center", border: "solid", position: "relative",
                borderWidth: "2px", maxWidth: "700px",
              }} fluid src={imageState} />
              {predictionState.map(pre => <Target reference={currentRefState} size={imgSizeState} prediction={pre} />)}
  
            </Col>}
          </Row>
          <Row>
            <Col className="col-md-12 text-center"><input type="file" style={{ display: "none" }} ref={fileRef} onChange={(e) => onSelectImage(e)} />
              <Button onClick={getFile} className="mt-3" rounded variant="outline-dark">Select An Image</Button></Col>
          </Row>
     </Container>
  
  
      </div>
  
    )
}

export default ObjectDetectionModel

