import { Avatar } from '@mui/material'
import React from 'react'
import "./css/Seekbox.css"

function Seekbox() {
  return (
    <div className="quoraBox">
    <div className="quoraBox__info">
      <Avatar />
    </div>
    <div className="quoraBox__quora">
      <p>What is your question or link?</p>
    </div>
  </div>
  )
}

export default Seekbox