import React from 'react'
import Seekbox from './Seekbox'
import Post from "./Post"
import "./css/Feed.css"


function Feed() {
  return (
    <div className='feed'>
      <Seekbox/>
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Feed