import React, {useState} from 'react';
import 'react-responsive-modal/styles.css';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar , Button, Input } from '@mui/material';
import  "./css/Seekheader.css";
import  "./css/Seeksense.css";
import {Modal} from 'react-responsive-modal';
import { ExpandMore, PeopleAltOutlined } from '@mui/icons-material';


function Seekheader() {
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const close = () => setIsModalOpen(false);
  const [inputUrl, setInputUrl] = useState("");

  return (

   
    <div className="qHeader">
        <div className="qHeader__icons">
            <div className="qHeader__logo">
                <img  src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
          alt="logo"/>
          </div>
        <div className=" qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlinedIcon />
        </div>
        </div>
        <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search SeekSense" />
        </div>
        <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar />
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Add Questions</Button>
        <Modal
          open={IsmodalOpen}
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
          <div className='modal-whole'>
           <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar" />
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div 
            style={{
              display:"flex",
              flexDirection:"column",
            }}>
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={
                  {
                    margin:"10px 0",
                    border:"1px solid lightgrey",
                    padding:"10px",
                    outline:"2px solid #000",
                  }
                }
                placeholder="Optional: inclue a link that gives context"
              />
              </div>
              {
                inputUrl !== "" && (
                  <img style = {{
                   paddingTop:"10px",
                   height: "40vh",
                   objectFit:"contain",
                  }} src={inputUrl} alt='displayimg'/>
                )
              }
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              cancle
            </button>
            <button type="sumbit"  className="add">
              Add Question
            </button>
          </div>
          </div>
        </Modal>
        </div>  
    </div>
  )
}

export default Seekheader