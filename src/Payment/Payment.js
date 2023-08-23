import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import payment from "../Asset/payment.avif"
import "../Payment/Payment.css"
const Payment = ({selectedCity}) => {
    const navigate=useNavigate()
    const location = useLocation();
    const { ticketPrice  } = location.state;
    const convinienceFee=ticketPrice+100;
    const totalAmount =convinienceFee+2;
const handlePaymentPage=()=>{
    navigate("/paymentDetails", { state: {
        totalAmount: totalAmount,
        ticketPrice: ticketPrice,
        convinienceFee: convinienceFee
      }})
}
    
  return (
    <div style={{display:"flex",marginTop:"10px", justifyContent:"center",justifyContent:'space-evenly',width:"1500px"}}>
    <div className='Payment-Conatiner-1'>
        <img src={payment}/></div>
    <div className='Payment-Conatiner-2'>
        <h4> Booking Summary</h4>
        <div style={{display:'flex',width:"300px",height:"40px",justifyContent:"space-between",padding:"20px"}}> <p>sofa(Executive)</p>
        <p> Rs. {ticketPrice}</p>
        </div>
        
        <div style={{display:'flex',width:"300px",height:"40px",justifyContent:"space-between",padding:"20px"}}> <p>Convinience fee</p>
        <p> Rs.100</p>
        </div>
        <hr/>
        <div style={{display:'flex',width:"300px",height:"40px",justifyContent:"space-between",padding:"20px"}}> <p>SubTotal :</p>
        <p>{convinienceFee} </p>
        </div>
        <div style={{display:'flex',width:"370px",height:"60px",justifyContent:"space-between",padding:"20px"}}> 
         <div style={{display:"flex",justifyContent:"center" ,width:"320px",backgroundColor:"rgba(188,184,172)",height:"70px",justifyContent:"space-between",}}>
            <div style={{display:"flex",flexDirection:'column'
            ,marginLeft:"10px"}}><h6>Contribution to BookSmile</h6>
            <p>(1Rs per Ticket is Added )</p>
            <p>Your Current city is :{selectedCity}</p>
            </div>
        <p style={{marginRight:"10px"}}>Rs:2</p>
        </div>
        
        </div>
        <button style={{height:"40px",width:"370px",backgroundColor:"#f84464",marginTop:"100px",display:"flex",justifyContent:"space-between"}} 
        onClick={handlePaymentPage}
        ><p style={{margin:"10px"}}>Amount To pay:</p>
        <p style={{margin:"10px"}}>{totalAmount}</p></button>
    </div>
  
    </div>
  )
}

export default Payment