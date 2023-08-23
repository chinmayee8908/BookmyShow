import React, { useState,useEffect } from 'react'
import "./Movies.css"
import{BsFillArrowRightCircleFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const Movies=( {filteredMovies,showAllMovies,setShowAllMovies})=>{
 const navigate=useNavigate();
  const handelSeeAll = () => {
  
    navigate("/AllMovies" ,{state: filteredMovies}  )
setShowAllMovies(true);
}
const handleMovieClick=(e)=>{
  const temp = e.target.getAttribute("id");
  console.log( e.target.getAttribute("id"));
   navigate('/MovieDetails',{state:{id:temp}});
 }

return(
<>
  {!showAllMovies?(<div  className='movies-Container'>
 <div className='movieContainer-Header'>
 <div style={{display:'flex'}}> <h4 style={{marginLeft:"50px"}}>Recommended Movies</h4>
 <h6 style={{marginLeft:"1000px" , cursor:"pointer"}} onClick={() => {handelSeeAll()}} >See All</h6>
 </div>

  <div className='moviesListed'>
           {filteredMovies.slice(0,5).map(movie => (
             <div key={movie.id} className='movie-Container'>
            <img src={movie.image}  id={movie.id} onClick={handleMovieClick} className='movie-Image'/>
            <h5>{movie.title}</h5>
            <h6>{movie.type}</h6>
            </div>
           ))}
            <span style={{marginTop:"150px"}}><BsFillArrowRightCircleFill style={{height:"50px",width:"40px"}}/></span>
           </div>
           </div>
         </div>):(<div  className='AllMovies-Container'>
    {filteredMovies.map((id ,movie)=>{
      return(
      <div key={id} className='movie-Container2'>
      <img src={movie.image} id={movie.id} onClick={handleMovieClick} className='movie-Image'/>
      <h5>{movie.title}</h5>
      <h6>{movie.type}</h6>
      </div>
     )})}
     </div>)}
         </>

)
}


export default Movies