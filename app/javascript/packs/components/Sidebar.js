import React from 'react'
import "../side.css"

const Sidebar = () => {
  return (
    <>
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">See Trains </div>
          <div className="list-group list-group-flush">
            <a href="" className="list-group-item list-group-item-action bg-light">How It Works</a>
            <a href="/detection" className="list-group-item list-group-item-action bg-light">Detection</a>
            <a href="/nlp" className="list-group-item list-group-item-action bg-light">NLP</a>
            <a href="/overview" className="list-group-item list-group-item-action bg-light">Overview</a>
          </div>
        </div>
    </>

  )
}

export default Sidebar
