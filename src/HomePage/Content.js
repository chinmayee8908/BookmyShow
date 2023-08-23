import {React ,useState,useEffect }from 'react'
import "./Content.css"
import Carousel from 'react-bootstrap/Carousel';
import car1 from "../Asset/car1.avif"
import car2 from "../Asset/car2.avif"
import car3 from "../Asset/car3.avif"
import initialMovies from '../Movies/MovieJson'
import Movies from '../Movies/Movies'
import { useNavigate } from 'react-router-dom';
const Content = ({filteredMovies,showAllMovies,setShowAllMovies, onSelectMovie }) => {
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity'); 
    if (storedCity) {
      setSelectedCity(storedCity);
    }
  }, []);
 const navigate = useNavigate();

const handelImgClick =(e)=>{
 const temp = e.target.getAttribute("id");
 console.log( e.target.getAttribute("id"));
  navigate('/MovieDetails',{state:{id:temp}});
}
  return (
    <>
   <div className='Carousel-Container'>
    <Carousel>
      <Carousel.Item>
        <img className='carimg' src={car1} />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carimg' src={car2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carimg' src={car3} />
      </Carousel.Item>
    </Carousel>
  </div>
  <div className='ShowMovie-Container'>
  {!selectedCity?( <div  className='movies-Container'>
<div className='movieContainer-Header'>
<div style={{display:'flex'}}> <h4 style={{marginLeft:"50px"}}>Movies</h4>
</div>

<div className='moviesListed'>
        
         {initialMovies.slice(0,5).map(movie => (
          <div
            key={movie.id}
           
            className="movie-Container"
           
          >
         <img src={movie.image} className='movie-Image'  id={movie.id}  onClick={handelImgClick}/>
         <h5>{movie.title}</h5>
         <h6>{movie.type}</h6>
         </div>))}

  </div>
  </div>
  </div>
  
  ):(<Movies filteredMovies={filteredMovies} showAllMovies={showAllMovies} setShowAllMovies={setShowAllMovies} />)}
  </div>
  </>

   
  )
}

export default Content