import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
// import { MoreHorizOutlined, ShareOutlined } from "@mui/material";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {Modal} from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "./css/Post.css"
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';




function Post() {

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const close = () => setIsModalOpen(false);

  return (
    <div className="post" >
    <div className="post__info">
      <Avatar />
      <h4>Username</h4>
      <small>Timestamp</small>
    </div>
    <div className="post__body">
      <div className="post__question">
        <p>this is test question</p>
        <button onClick={() => setIsModalOpen(true)} className="post__btnAnswer" >
          Answer
        </button>
        <Modal open={IsmodalOpen}
          onClose={close}
          onRequestClose={() => setIsModalOpen(false)}
          closeOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
          >
             <div className="modal__question">
              <h1>question</h1>
              <p>
                asked by{" "}
                <span className="name">
                Username{" "} 
                </span>on {" "}
                <span className='name'>timestamp</span>
                </p>
                {/* <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span> */}
            </div>
            <div className='modal__answer'>
              <ReactQuill placeholder='enter your name'/>
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" className="add">
                Add Answer
              </button>
            </div>
          </Modal>
      </div>
      </div>
    <div className="post__footer">
      <div className="post__footerAction">
        <ArrowUpwardOutlinedIcon />
        <ArrowDownwardOutlinedIcon />
      </div>

      <RepeatOutlinedIcon />
      <ChatBubbleOutlineOutlinedIcon />
      <div className="post__footerLeft">
        <ShareOutlinedIcon />
        <MoreHorizOutlinedIcon />
      </div>
    </div>
    <p>1 answer</p>
    <div className='post__answer'></div>
    <div className='post-answer-container'></div>
    <div className='post-answered'>
        <Avatar />
        <div className='post-info'>
            <p>Username</p>
            <span>Timestamp</span>
        </div>
    </div>
    <div className='post-answer'>this is test</div>
  </div>
  )
}

export default Post