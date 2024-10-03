import React from 'react'
import Seekheader from './Seekheader';
import "./css/Seeksense.css";
import Sidebar from "./SidebarOptions.js";
import Widget from "./Widget";
import Feed from "./Feed";

function Seeksense() {
  return (
    <div className='seek'>
        <Seekheader />
        <div className='seek__contents'>
        <div className="seek__content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
        </div>
    </div>
  )
}

export default Seeksense