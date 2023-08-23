import React ,{useState}from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "../Movies/BookTicket.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {MdOutlineFavoriteBorder} from "react-icons/md"
import scooty from "../Asset/scooter.jpg"
const BookTicket = () => {
  const Navigate=useNavigate()
  const location = useLocation();
  const bookticket = location.state
   console.log(bookticket)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }; 
    const showtimes = [
      {
        "date": "21Aug",
        "halls": [
          {
            "name": "cinepolis",
            "times": ["10:00 AM", "2:00 PM", "7:00 PM"]
          },
          {
            "name": "maharaja",
            "times": ["11:00 AM", "4:00 PM"]
          },
          {
            "name": "symphony",
            "times": ["10:00 AM", "2:00 PM", "7:00 PM"]
          },
          {
            "name": "Inox",
            "times": ["11:00 AM", "4:00 PM"]
          }
        ]
      },
      {
        "date": "22Aug",
        "halls": [
          {
            "name": "Cinepolis",
            "times": ["1:00 PM", "5:00 PM"]
          },
          {
            "name": "symphony",
            "times": ["3:00 PM", "8:00 PM"]
          }
        ]
      },
      {
        "date": "23Aug",
        "halls": [
          {
            "name": "Cinepolis",
            "times": ["1:00 PM", "5:00 PM"]
          },
          {
            "name": "symphony",
            "times": ["3:00 PM", "8:00 PM"]
          }
        ]
      },
      {
        "date": "24Aug",
        "halls": [
          {
            "name": "Cinepolis",
            "times": ["1:00 PM", "5:00 PM"]
          },
          {
            "name": "symphony",
            "times": ["3:00 PM", "8:00 PM"]
          }
        ]
      }
    ];
    const[selectedDate,setSelectedDate]=useState(showtimes[0]?.date)
    const handleDateClick = (date) => {
      setSelectedDate(date);
      setSelectedTime(null);
    };
const filteredHalls = showtimes.filter((showtime) => showtime.date === selectedDate);
const [selectedTime, setSelectedTime] = useState('');
  const [isSeatSelectionOpen, setIsSeatSelectionOpen] = useState(false);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    console.log("time selected",time)
    setIsSeatSelectionOpen(true);
  };


  
  // seat 
  const [numSeats, setNumSeats] = useState(1);
  const ticketPrice = 180 * numSeats;
 let numSeat=numSeats-1
  const handleSeatClick = (selectedSeats) => {
    setNumSeats(selectedSeats);
    console.log("seat choosen",selectedSeats)
  };
 const handleSeatSelect=()=>{
  Navigate("/SeatSelection" ,{state:{numSeats}})
 }
// button


  return (
    <>
    <div className='BookTicket-Container'>
      
      <div className='BookTicket-Header-Section'>
         <div className='Movie-Title'>{bookticket[0].title}:HINDI</div>
         <div style={{marginLeft:"100px"}} >{bookticket[0].type}</div>
      </div>
      <div className='BookTicket-SubHeader-Section'>
       <div className='SlickTrack'>
       <Slider {...settings} style={{width:"285px" ,height:"52px",display:"flex",justifyCenter:"center",alignItems:"center", color:"white",backgroundColor:"grey"}} >
       {showtimes.map((showtime, index) => (
          <div key={index} className="date-slide" onClick={() => handleDateClick(showtime.date)}>
            {showtime.date}
          </div>
        ))}
      </Slider>
      </div>
      <div className='Buttons'>
      <ButtonGroup aria-label="Basic example" style={{width:"640px",display:"flex",justifyContent:"space-between"}}>
      <div  style={{width:"160px" ,height:"64px",backgroundColor:"white",color:"black",borderRight:"1px solid #eceef1",borderLeft:"1px solid #eceef1",display:"flex",alignItems:"center",justifyContent:"center",}}>Hindi-2D</div>
      <div  style={{width:"160px",height:"64px",backgroundColor:"white",color:"black",borderRight:"1px solid #eceef1",display:"flex",alignItems:"center",justifyContent:"center"}}>Filter-Sub-Region</div>
      <div  style={{width:"160px",height:"64px",backgroundColor:"white",color:"black",borderRight:"1px solid #eceef1",display:"flex",alignItems:"center",justifyContent:"center"}} >Filter-Price-Range</div>
      <div  style={{width:"160px",height:"64px",backgroundColor:"white",color:"black",borderRight:"1px solid #eceef1",display:"flex",alignItems:"center",justifyContent:"center"}} >Filter-Show-Timing</div>
    </ButtonGroup>
      </div>
      </div>
      <div className='BookTicket-Content-Section'>
        <div className='Content-Section'>
          <div className='Content-Header' style={{width:"300px", justifyContent:"space-between"}}><p>Available </p> <p>FastFilling  </p> <p>Subtiltles Language </p></div>

      <div className="hall-list">
    {filteredHalls.map((showtime, index) => (
      <div key={index} >
        {showtime.halls.map((hall, hallIndex) => (
          <div key={hallIndex} className="hall-item">
            <div style={{display:"flex",flexDirection:"column", width:"400px"}}>
            <div style={{display:"flex",height:"50px",justifyContent:"space-evenly",fontWeight:"bold",marginRight:"30px"}}><MdOutlineFavoriteBorder/>
          {hall.name}
          </div>
         <div style={{display:"flex" ,justifyContent:"space-evenly",width:"300px",marginLeft:"100px"}}> <p>m-Tickets</p>
          <p>Food and beverages</p></div>
          </div>
           {hall.times.map((time, timeIndex) => (
             <div style={{width:"auto" ,display:"flex",marginLeft:"40px"}}> 
             <button  onClick={() => handleTimeClick(time)}key={timeIndex} style={{borderRadius:"10px",width:"90px" ,height:"40px",border:"1px solid green"}}>{time}</button></div>
            ))}
          </div>
         
        ))}
      </div>
    ))}
   
  </div>
  </div>
  </div>
    </div>
{/* seat selection modal  */}
    {isSeatSelectionOpen && ( <div className="centered-div-overlay" >
          <div className="centered-div">
            <div className='Seat-Selection-Header'> How Many Seats?</div>
            <div className='Seat-Selection-Image' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"30px"}} >
              <img src={scooty} style={{height:"91px",width:"128px"}}/>
              <div className="seat-container" style={{display:"flex",width:"450px",justifyContent:'space-evenly',marginTop:"70px"}}>
              {Array.from({ length: 10 }, (_, index) => (
          <button  key={index}
          onClick={() => handleSeatClick(index + 1)} 
          className='Buttons-Seat'
        >
          {index + 1}
          </button>
        ))}
      </div>
      <div style={{display:"flex",justifyContent:"center",height:"50px",width:"450px",justifyContent:"space-evenly"}}>
        <div style={{display:"flex",flexDirection:"column",height:"45px",width:"100px"}}>
          <p style={{height:"15px"}}>RoyalRecliner </p> 
        <p style={{height:"15px"}} >Rs:360</p>
        <p style={{color:'red',height:"15px"}}>UnAvailable</p>
        </div>
     <div style={{display:"flex",flexDirection:"column",height:"45px",width:"100px"}}>
       <p style={{height:"15px"}}>club</p>
     <p style={{height:"15px"}}>Rs:260</p>
     <p style={{height:"15px",color:'red'}}>UnAvailable</p>
     </div>
      <div style={{display:"flex",flexDirection:"column",height:"45px",width:"100px"}}>
        <p style={{height:"15px"}}>Executive</p>
      <p style={{height:"15px"}}>Rs:180</p>
      <p style={{color:'green',height:"15px"}}>Available</p>
      </div>
      
      
      </div>
      {/* <p>Total ticket price: ${ticketPrice}</p> */}
<button onClick={handleSeatSelect}
  style={{
    backgroundColor: "#f84464",
    color: "white",
    borderRadius: "5px",
    width: "450px",
    height: "30px",
    marginTop: "50px"
  }}
>
  Select seat{-numSeat} </button>
            </div>
    </div></div>
  
     )}
      


    </>
  )
}

export default BookTicket
