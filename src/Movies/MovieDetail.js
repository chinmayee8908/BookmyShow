import React from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import initialMovies from './MovieJson';
import "../Movies/MovieDetail.css"
const MovieDetail = () => {
  const navigate =useNavigate()
  const location = useLocation();
  // console.log("ll", location.state.id);
  const selectedMovie = JSON.parse(JSON.stringify(initialMovies.filter((movie) => movie.id === parseInt(location.state.id))));
  // console.log(selectedMovie)
  // selectedMovie.map((item) => console.log(item.id))

  const handleBook=()=>{
    navigate("/BookTickets",{state: selectedMovie})
  }
  return (
    <>

      {selectedMovie ? (
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className='Details-Container'>
          <div className='Details-Sub-Container'>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }} > <img src={selectedMovie[0].image} className='Image-Container' />
              <h6  style={{color:"white"}}>In Cinemas</h6>
            </div>
            <div className='Description-Container'>
             <div><h2>{selectedMovie[0].title}</h2></div> 
              <div style={{ display: "flex", backgroundColor: 'rgb(51, 51, 51)', borderRadius: "5px", height: "74px", width: "488px", justifyContent: "space-between", alignItems: "center",padding:"20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Add Your Ratings And Reviews</h5>
                  <h6>Your Ratings Matter</h6>
                </div>
                <button style={{ height: "40px", width: "100px", borderRadius: "10px" }}>Rate Now</button>
              </div>
<div style={{display:"flex",width:"100px",justifyContent:"space-between"}}><button style={{borderRadius:"5px",}}>2D</button>
<button style={{borderRadius:"5px",}}>Hindi</button></div>
<div > {selectedMovie[0].type}</div>
<button style={{height:"50px",width:"216px",backgroundColor:"rgba(248,68,100)",borderRadius:"10px"}} onClick={handleBook}>Book Ticket</button>
            </div>
                </div>
                </div>
              <div style={{display:"flex",marginLeft:'30px',flexDirection:"column"}}>  <h3 className="About-Container">About Movies  </h3>
              <div> {selectedMovie[0].description}</div>
            
              </div>
          </div>
          
      ) : (
        <p>Select a movie to see details</p>
      )}


    </>
  )
}

export default MovieDetail