import React from 'react'
import "../side.css"

const Sidebar = () => {
  return (
    <>
        <div className="bg-dark border-right" id="sidebar-wrapper">
          <div className="text-warning sidebar-heading">Recognize</div>
          <div className="list-group list-group-flush">
            <a href="/" className="text-white list-group-item list-group-item-action bg-dark">How It Works</a>
            <a href="/detection" className="text-white list-group-item list-group-item-action bg-dark">Detection</a>
            <a href="/nlp" className="text-white list-group-item list-group-item-action bg-dark">NLP</a>
            <a href="/overview" className="text-white list-group-item list-group-item-action bg-dark">Overview</a>
          </div>
        </div>
    </>

  )
}

export default Sidebar
