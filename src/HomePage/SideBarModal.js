import React from 'react'
import "../HomePage/HomePage.css"
import {AiOutlineClose} from "react-icons/ai"
import{IoIosArrowForward} from "react-icons/io"
import reward from "../Asset/rewards_login.avif"
import{BsFillBellFill} from "react-icons/bs"
import {TbBrandBooking} from "react-icons/tb"
import{GiWantedReward} from "react-icons/gi"
import {FiSettings} from "react-icons/fi"
import{AiOutlineMessage} from "react-icons/ai"
import {FaCcAmazonPay} from "react-icons/fa6"
import{PiTelevisionDuotone} from "react-icons/pi"
import{BiShoppingBag} from "react-icons/bi"
import {FaRegCircleUser} from "react-icons/fa6"
import {FaUserCircle} from "react-icons/fa"
import "./SideBarModal.css"
import { useNavigate } from 'react-router-dom'
const SideBarModal = ({sideBarModal,handleCloseSideBar,loggedIn,handleShowSignIn,handleLogout}) => {
  const navigate=useNavigate()
  const handleProfile=()=>{
    navigate("/Profile")
  }
  return (
    <>
   { sideBarModal&&( <div className='SideBar-Container'>
   <div className='sidebarHeader'>
   <h5 style={{margin:"10px"}}>Hey!</h5>
    <div style={{width:"70px",display:'flex',justifyContent:'space-between'}}><span style={{display:"flex",alignItems:"center"}}><FaUserCircle style={{height:"50px",width:"50px"
  }}/></span><span onClick={handleCloseSideBar}><AiOutlineClose/></span></div></div>
  {loggedIn?(<div className='subContainer' onClick={handleProfile}>
<FaRegCircleUser style={{height:"30px",width:"20px"}}/>
<p>Profile</p>
<IoIosArrowForward/>
</div>):( <div style={{display:'flex',justifyContent:"space-evenly",alignItems:'center',boxShadow:"0 4px 8px rgba(0, 0, 0, 2px)",padding:"5px"}}>
    <img src={reward} style={{height:"50px"}}/>
    <p>Unlock Special Offer & Great Benefits </p>
   <button style={{height:"40px",width:"auto",border:"1px solid red",borderRadius:"5px",background:"transparent",color:"red"}} onClick={handleShowSignIn}>Login/Register</button>
   </div>)}
<div className='subContainer'>
<BsFillBellFill style={{height:"30px",width:"20px"}}/>
<p>Notification</p>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<BiShoppingBag style={{height:"30px",width:"20px"}}/>
<p>Your Orders</p>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<PiTelevisionDuotone style={{height:"30px",width:"20px"}}/>
<p>Stream Library</p>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<FaCcAmazonPay style={{height:"30px",width:"20px"}}/>
<p>Play Credit Card</p>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<AiOutlineMessage style={{height:"30px",width:"20px"}}/>
<p>Help & Support</p>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<FiSettings style={{height:"30px",width:"20px"}}/>
<p>Account & Settings</p>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<GiWantedReward style={{height:"30px",width:"20px"}}/>
<p>Rewards</p>
<IoIosArrowForward/>
</div>
<div className='subContainer'>
<TbBrandBooking style={{height:"30px",width:"20px"}}/>
<p>Book A Smile </p>
<IoIosArrowForward/>
</div>
{loggedIn &&<div className='LogoutContainer'><button onClick={handleLogout}>LogOut</button></div>}
    </div>)}
    </>
  )
}

export default SideBarModal