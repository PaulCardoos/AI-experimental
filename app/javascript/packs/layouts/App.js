import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './Home'
import Detection from './Detection'
import NlpDetection from './nlpDetection'
import Overview from './Overview'
import 'react-bootstrap'
import '../side.css'




const App = () => {

    return (
      <div>


      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detection" component={Detection}/>
        <Route exact path="/nlp" component={NlpDetection}/>
        <Route exact path="/overview" component={Overview}/>
      </Router>
      </div>

    )
}

export default App
