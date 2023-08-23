import React, { useState } from 'react'
import "../Payment/PaymentDetails.css"
import mobile from "../Asset/mobile.png"
import Upi from "../Asset/upi.png"
import { useLocation, useNavigate } from 'react-router-dom'
const PaymentDetails = () => {
const Navigate=useNavigate()
  const location = useLocation();
  const { totalAmount, ticketPrice, convinienceFee } = location.state || {};

  const [debitCard, setdebitCard] = useState(false);

  const toggleDiv1 = () => {
    setdebitCard(!debitCard);
    setupi(false)
    setNetBanking(false)
  };
  const [NetBanking, setNetBanking] = useState(false);

  const toggleDiv2 = () => {
    setdebitCard(false)
    setNetBanking(!NetBanking);
    setupi(false)
  };
  const [Mobile, setMobile] = useState(false);

  const toggleDiv3 = () => {
    setMobile(!Mobile);
    setupi(false)
    setNetBanking(false)
  };
  const [upi, setupi] = useState(false);

  const toggleDiv4 = () => {
    setupi(!upi);
    setNetBanking(false)
    setdebitCard(false)
  };
   
//debit card
const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

 const handlemakePayment=()=>{
  
  Navigate("/success")
// alert("payment successful")
 }
  return (
    <>
    <div style={{display:'flex',height:"100vh",width:"100vw"}}>
      <div style={{display:"flex",justifyContent:"center",marginLeft:"50px",marginTop:"20px"}}>
    <div className='paymentDetails-Container-1'>
       <div><button className='paymentDetails-Header'>
         Payment options    
        </button>
        <div className='payment-Option-Container'>
            <div className='payment-Option'>
            <button  onClick={toggleDiv1}style={{border:"none",height:"50px",background:"white",borderBottom:"1px solid grey"}}>Debit/CreditCard</button>
            <button   onClick={toggleDiv2}style={{border:"none",height:"50px",background:"white",borderBottom:"1px solid grey"}}>Net Banking</button>
            <button  onClick={toggleDiv3}style={{border:"none",height:"50px",background:"white",borderBottom:"1px solid grey"}}>Mobile Wallets</button>
            <button  onClick={toggleDiv4}style={{border:"none",height:"50px",background:"white",borderBottom:"1px solid grey"}}>UPI</button>
            </div>
            <div className='payment-option-Field'>
            {debitCard && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>Enter Your Card Details</div>
          <div
            style={{
              backgroundColor: 'grey',
              height: '270px',
              width: '400px',
              marginLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ padding: '20px' }}>
              <div>Card Number</div>
              <input type='text' value={cardNumber} onChange={handleCardNumberChange} />
              <div>Name of the Card</div>
              <input type='text' value={cardName} onChange={handleCardNameChange} />
              <div style={{ width: '70px' }}>CVV</div>
              <input type='text' value={cvv} style={{ width: '50px' }} onChange={handleCvvChange} />
            </div>
            <button
              onClick={handlemakePayment}
              style={{ width: '300px', backgroundColor: '#f84464', marginLeft: '20px' }}
            >
            Make Payment:{totalAmount}</button>
              </div>
             
              </div>)  }
              
              
              
              {NetBanking&& <div><img src={mobile}/></div> }
              {Mobile&& <div></div> }
              {upi&& <div><img src={Upi}/></div> }
            </div>
        </div>
        </div> 
    </div>
    <div className='container-2'>
    <div className='Payment-Conatiner-2'>
        <h4> Booking Summary</h4>
        <div style={{display:'flex',width:"300px",height:"40px",justifyContent:"space-between",padding:"20px"}}> <p>sofa(Executive)</p>
        <p> Rs:{ticketPrice}</p>
        </div>
        
        <div style={{display:'flex',width:"300px",height:"40px",justifyContent:"space-between",padding:"20px"}}> <p>Convinience fee</p>
        <p> Rs.100</p>
        </div>
        <hr/>
        
        <div style={{display:'flex',width:"370px",height:"60px",justifyContent:"space-between",padding:"20px"}}> 
         <div style={{display:"flex",justifyContent:"center" ,width:"320px",backgroundColor:"rgba(188,184,172)",height:"70px",justifyContent:"space-between",}}>
            <div style={{display:"flex",flexDirection:'column'
            ,marginLeft:"10px"}}><h6>Contribution to BookSmile</h6>
            <p>(1Rs per Ticket is Added )</p>
            
            </div>
        <p style={{marginRight:"10px"}}>Rs:2</p>
        </div>
        
        </div>
        <button style={{height:"40px",width:"370px",backgroundColor:"#f84464",marginTop:"100px",display:"flex",justifyContent:"space-between"}} 
       
        ><p style={{margin:"10px"}}>Amount To pay:</p>
        <p style={{margin:"10px"}}> {totalAmount}</p></button>
    </div>
  
    </div>
    </div>
    </div>
    </>
  )
}

export default PaymentDetails