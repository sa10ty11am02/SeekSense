import React from 'react'
import "./css/Sidebar.css"
import "./SidebarOptions"
import SidebarOptions from './SidebarOptions'

function sidebar() {
  return (
    <div className='sidebar'>
        <SidebarOptions  />
    </div>
  )
}

export default sidebar