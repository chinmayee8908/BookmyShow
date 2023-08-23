import React from 'react'
import Modal from 'react-bootstrap/Modal';
import {FcGoogle} from "react-icons/fc";
import {MdOutlineEmail} from "react-icons/md"
import {AiFillApple} from "react-icons/ai"
import {IoIosPhonePortrait} from "react-icons/io"
import "./SignInModal.css"
const SignInModal = ({handleClose,showModal,handleSignIn,mobileNumber,setMobileNumber}) => {
 
  return (


    <>
    <Modal show={showModal} onHide={handleClose}>
     <div className='signinModal'>
         <div style={{display:"flex",justifyContent:"center",height:"50px",textAlign:"center",alignItems:"center",}}>
           <h6>Get Started</h6>
           {/* <span><AiOutlineClose/></span>  */}
           </div>
        
         <div style={{display:'flex',flexDirection:"column",height:"300px",justifyContent:'space-between',padding:"30px" ,textAlign:"center",alignItems:"center"}}>
       <div id='signinButton'>
        < FcGoogle/>
         <p>Continue with Google</p>
         </div>
       <div id='signinButton'>
         <MdOutlineEmail/>
         <p>Continue with Email</p></div>
       <div id='signinButton'>
         <AiFillApple/>
         <p>Continue with Apple</p>
         </div>
       </div>
       <p style={{marginLeft:"50%"}}>OR</p>
     <div style={{marginLeft:"10%"}}>  
     <IoIosPhonePortrait/>
     <input  className="mobileNumber" type='tel' value={mobileNumber}
                                 onChange={(e) => setMobileNumber(e.target.value)} placeholder='Continue With Number'/></div>
     <div className='loginButton'><button onClick={handleSignIn}>Continue</button></div>
     <div style={{marginTop:"10%",fontSize:"12px",display:'flex',justifyContent:"center"}}>I Agree To The Terms and Condition & Privacy Policies</div>
       </div>
       </Modal>
   </>

  )
}

export default SignInModal