import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
    const navigate=useNavigate()
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"80vh"}}>
        <div style={{height:"200px",width:"300px",backgroundColor:"white",border:"1px solid grey",display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <h3 style={{color:'green'}}>Payment successful</h3>
          <button onClick={()=>{navigate("/")}}>ok</button>
        </div>
    </div>
  )
}

export default PaymentSuccess