import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./SeatSelection.css"
import screen from "../Asset/screen.jpg"
const SeatSelection = () => {
  const navigate=useNavigate()
    
    const location = useLocation();
    // const {numSeats} = location.state;
      
    const { numSeats: previousNumSeats } = location.state;

    const [selectedSeats, setSelectedSeats] = useState([]);
  
    const handleSeatClick = (startSeat) => {
      const endSeat = startSeat + previousNumSeats - 1;
      const newSelectedSeats = Array.from({ length: previousNumSeats }, (_, index) => startSeat + index);
      setSelectedSeats(newSelectedSeats);
      
    };

   

const handlePayment=()=>{
  const numSeats = selectedSeats
    const ticketPrice = 180 * numSeats.length;
    navigate("/payment", { state: { ticketPrice } })
}

  return (
    <>
    <div className='SeatSelection_Container'>
     <div className='SeatSelection-Table'> 
     <div className="seat-grid">
        {Array.from({ length: 90 }, (_, index) => (
          <button
           className={`Seat_button ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
                onClick={() => handleSeatClick(index + 1)}
                disabled={selectedSeats.length >= previousNumSeats}
           
          >
            {index + 1}
          </button>
        ))}
      </div>
     
     
      </div> 
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"100px"}}><img src={screen} style={{width:"300px",height:"40px"}}/>
      <p style={{fontSize:"13px"}}>All Eyes This Way Please </p> </div>  
        <button style={{backgroundColor:"#f84464",borderRadius:"5px",width:"200px"}} onClick={handlePayment}  disabled={selectedSeats.length < previousNumSeats}> Pay  Rs.{180 * (selectedSeats.length )}</button></div>
        </>
  )
}

export default SeatSelection