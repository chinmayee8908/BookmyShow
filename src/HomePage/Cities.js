import React, { useState,useEffect } from 'react'
import "../HomePage/HomePage.css"
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
const Cities = ({isModalOpen,handleModalClose,setModalOpen,setSelectedCity,selectedCity}) => {
     const handleLocationClick = (city) => {    
          setSelectedCity(city);
          localStorage.setItem('selectedCity', city);
          setModalOpen(false)
        };  
  return (
    <>
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
  </>
  )
}

export default Cities