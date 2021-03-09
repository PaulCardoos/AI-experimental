import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Detection from './Detection'
import 'react-bootstrap'
import '../side.css'




const App = () => {

    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detection" component={Detection}/>
      </Router>

    )
}

export default App
