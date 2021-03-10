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
        <Switch>

        <Route exact path="/" component={Home}/>
        <Route path="/detection" component={Detection}/>
        <Route path="/nlp" component={NlpDetection}/>
        <Route path="/overview" component={Overview}/>

        </Switch>
      </Router>
      </div>

    )
}

export default App
