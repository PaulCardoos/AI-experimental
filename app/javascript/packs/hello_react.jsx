// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './layouts/App'
import 'react-bootstrap'
import './side.css'
import store from './store.js'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}> 
      <App/>
    </Provider>
,
    document.body.appendChild(document.createElement('div')),
  )
})
