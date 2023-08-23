import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Asset/logo1.jpeg"
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { AiOutlineMenu } from "react-icons/ai"
import { RiArrowDropDownFill } from "react-icons/ri"
import user from "../Asset/user.png"
import "./Header.css"
import SignInModal from './SignInModal';
import SideBarModal from './SideBarModal';
// cities
import Modal from 'react-bootstrap/Modal';
import {LiaSearchSolid} from "react-icons/lia"
import del from "../Asset/delhi.png"
import mum from "../Asset/mumbai.avif"
import chan from "../Asset/chandi.avif"
import pune from "../Asset/pune.avif"
import koch from "../Asset/koch.avif"
import kolk from "../Asset/kolk.avif"
import hyd from "../Asset/hyderabad.png"
import bang from"../Asset/banglore.png"
import ahm from "../Asset/ahmed.avif"
import "./Cities.css"
import initialMovies from '../Movies/MovieJson';
const Header = ({selectedCity,handleLocationClick,isModalOpen,handleModalClose ,handleModalOpen , loggedIn,username ,handleSignIn,mobileNumber,setMobileNumber,handleLogout}) => {
    const [showModal, setShowModal] = useState(false);
    const [sideBarModal, setSidebarModal] = useState(false);
    // const [LoggedIn, setLoggedIn] = useState(false);
    // const [phoneNumber, setPhoneNumber] = useState('');
    
    // for sidebar
    const handleCloseSideBar = () => {
      setSidebarModal(false)
    }
   
    // for signin
    const handleCloseSignIn = () => {
      setShowModal(false)
    }
    const handleShowSignIn = () => {
      setShowModal(true)
    }
    

   return (
    <div className='NavBar-Container'>
       <Navbar className='Header-Container'>
        <Container>
          <Navbar.Brand>
            <img className='logo' src={logo} alt="no image" />
          </Navbar.Brand>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className=" mr-sm-2"
            />
          </Col>
          <Navbar.Toggle />
          <Navbar.Collapse  >
            <div className='signinBar'>
              <div className='location' onClick={handleModalOpen}>
              {selectedCity ?selectedCity: "Location"}<RiArrowDropDownFill />

                  </div>
              
            {loggedIn ?(<div style={{display:"flex",justifyContent:'space-between'}} >
              <img src={user} className='user'/>
              <button style={{ borderRadius: "5px", color: "white",backgroundColor:'transparent',height:"30px",width:"80px"}}>Hii,{username}</button></div>):
            (<button style={{ borderRadius: "5px", color: "white", backgroundColor: "rgba(241,77,77" }} onClick={handleShowSignIn}>SignIn</button>)}
              <span className='menu' onClick={() => { setSidebarModal(true) }}><AiOutlineMenu /></span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* subHeader */}
      <nav className='subHeader'>
        <div style={{ width: "1250px", display: "flex", justifyContent: 'space-between' }}>
          <div className='buttons1'>
            <span >Movies</span>
            <span>Stream</span>
            <span>Events</span>
            <span>Plays</span>
            <span>Sports</span>
            <span>Activities</span>
            <span>Buzz</span>
          </div>
          <div className='buttons2'>
            <span>List your show</span>
            <span>Corporates</span>
            <span>Offers</span>
            <span>Gift Cards</span>
          </div>
        </div>
      </nav>
      {/* city */}
      <Modal
    show={isModalOpen}
    size="lg" onHide={handleModalClose}
    aria-labelledby="example-modal-sizes-title-lg" 
    style={{marginTop:"22px"}}
  >
    <Modal.Header>
     <div style={{display:'flex',position:'relative',width:"740px",border:"1px solid black"}}>  
     <span style={{alignItems:'center',position:"absolute"}}><LiaSearchSolid/></span>
     <span> <input type='text' className='SearchField'placeholder='Search Cities Here' /></span>
     </div> 
    </Modal.Header>
    <Modal.Body>
      <div className='content'>
        <h6 style={{display:'flex',justifyContent:'center'}}>Popular Cities</h6>
        <div style={{display:'flex',justifyContent:'space-between'}}>
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img  src={del} className='cityimg'selectedCity={selectedCity}
      onClick={() => handleLocationClick('Delhi')} />
           <p>Delhi</p>
           </span>
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img className='cityimg' src={mum} selectedCity={selectedCity}
      onClick={() => handleLocationClick('Mumbai')}/>
           <p>Mumbai</p>
           </span>
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img src={bang} className='cityimg' selectedCity={selectedCity}
      onClick={() => handleLocationClick('Bengaluru')}/>
           <p>Bengaluru</p>
           </span>
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img src={ahm} className='cityimg' selectedCity={selectedCity}
      onClick={() => handleLocationClick('Ahmedabad')}/>
           <p>Ahmedabad</p>
           </span>
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img src={pune} className='cityimg' selectedCity={selectedCity}
      onClick={() => handleLocationClick('Pune')}/>
           <p>Pune</p>
           </span>
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img src={hyd} className='cityimg' selectedCity={selectedCity}
      onClick={() => handleLocationClick('Hyderabad')}/>
           <p>Hyderabad</p>
           </span>
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img src={chan} className='cityimg' selectedCity={selectedCity}
      onClick={() => handleLocationClick('Chandigarh')}/>
           <p>Chandigarh</p>
           </span>
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img src={kolk} className='cityimg' selectedCity={selectedCity}
      onClick={() => handleLocationClick('Kolkata')}/>
           <p>Kolkata</p>
           </span>
           
           <span style={{display:"flex", flexDirection:"column",alignItems:"center"}}> <img src={koch} className='cityimg'selectedCity={selectedCity}
      onClick={() => handleLocationClick('Kochi')}/>
           <p>Kochi</p>
           </span>
        </div>
        </div> 
    </Modal.Body>
  </Modal>
  <SignInModal handleClose={handleCloseSignIn} showModal={showModal} handleSignIn ={handleSignIn } mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} loggedIn={loggedIn} />
      
      {/* <SignInModal handleClose={handleCloseSignIn} showModal={showModal} login={login} phoneNumber={phoneNumber}setPhoneNumber={setPhoneNumber}/> */}
 
      <SideBarModal sideBarModal={sideBarModal} handleCloseSideBar={handleCloseSideBar}  handleShowSignIn={handleShowSignIn} loggedIn={loggedIn}  handleLogout={handleLogout}/>

 </div>
  )
}

export default Header