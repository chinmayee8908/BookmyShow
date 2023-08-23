import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserProfile from './Profile/UserProfile'
import Movies from './Movies/Movies'
import initialMovies from './Movies/MovieJson'
import Content from './HomePage/Content'
import MovieDetail from './Movies/MovieDetail'
import BookTicket from './Movies/BookTicket'
import SeatSelection from './Movies/SeatSelection'
import Payment from './Payment/Payment'
import PaymentDetails from './Payment/PaymentDetails'
import PaymentSuccess from './Payment/PaymentSuccess'
import { MdArrowRight } from 'react-icons/md'
const App = () => {
// sigin 
const [loggedIn, setLoggedIn] = useState(false);
const [username, setUsername] = useState('Guest');
const [image, setImage] = useState(null);

const [firstName, setFirstName] = useState('');
const [lastName, setlastName] = useState('');
const [birth, setbirth] = useState('');
const [identity, setidenty] = useState('');
const [married, setmarried] = useState('');
const [mobileNumber, setMobileNumber] = useState('');
useEffect(() => {
  const storedUsername = localStorage.getItem('username',[]);
  const storedMobileNumber = localStorage.getItem('mobileNumber');
  if (storedUsername) {
    setUsername(storedUsername);
    setFirstName(storedUsername);
    setLoggedIn(true);
  }

  if (storedMobileNumber) {
    setMobileNumber(storedMobileNumber);
  }
}, []);

const handleSignIn = () => {
  setLoggedIn(true);
  setUsername('guest'); 
  
  localStorage.setItem('username',username);
  localStorage.setItem('mobileNumber', mobileNumber);
};

  const handlechange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    setUsername(newFirstName);
  };
  const handlelastName=(e)=>{
    setlastName(e.target.value)
  }
  const handlebirth=(e)=>{
    setbirth(e.target.value)
  }
  const handleidenty=(e)=>{
    setidenty(e.target.value)
  }
  const handlemarried=(e)=>{
    setmarried(e.target.value)
  }


  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0]; 
    setImage(selectedImage);
  };

const handleProfileSave = (e) => {
  e.preventDefault();
  // console.log("Saving profile data...");
  // console.log("Username:", firstName);
  setUsername(firstName);
  localStorage.setItem('username', firstName);
  setFirstName(firstName);
 
  setlastName(lastName);
  
  setbirth(birth);

  setidenty(identity);
  
  setmarried(married)
  

  alert("successfully added")
};

const handleLogout = () => {
  setLoggedIn(false);
  setUsername('Guest');
  setMobileNumber('');
  localStorage.removeItem('username');
  localStorage.removeItem('mobileNumber');
};

//city modal
const [isModalOpen, setModalOpen] = useState(false);
useEffect(() => {
  setModalOpen(true);
}, []);
const handleModalClose = () => {
  setModalOpen(false);
};
const handleModalOpen = () => {
   setModalOpen(true);
 };
 //city set
const [selectedCity, setSelectedCity] = useState('');
// console.log("Selected city ----- ",selectedCity)
useEffect(() => {
  const storedCity = localStorage.getItem('selectedCity');
  if (storedCity) {
    setSelectedCity(storedCity);
    setModalOpen(false)
  }
}, []);
const handleLocationClick = (city) => {    
   setSelectedCity(city);
   localStorage.setItem('selectedCity', city);
   setModalOpen(false)
 }; 
 
 useEffect(() => {
   const storedCity = localStorage.getItem('selectedCity'); 
     if (storedCity) {
     setSelectedCity(storedCity);
   }
 }, []);
// movies
const [filteredMovies, setFilteredMovies] = useState(initialMovies); 
   const [showAllMovies, setShowAllMovies] = useState(false);
  
     const filterMoviesBySelectedCity = () => {
     if (selectedCity) {
     const moviesForCity = initialMovies.filter(movie => movie.city .includes(selectedCity));
     setFilteredMovies(moviesForCity);
     localStorage.setItem("movies",moviesForCity)
  
     } 
     else {
     
     setFilteredMovies(initialMovies);
   }
 }
   useEffect(() => {
     filterMoviesBySelectedCity()
     }, [selectedCity]); 
     console.log("filterd -- ",filteredMovies)

     

return (
<BrowserRouter>
          <Routes>
          <Route path="/" element={<Layout isModalOpen={isModalOpen} selectedCity={selectedCity} setModalOpen={setModalOpen} setSelectedCity={setSelectedCity} handleModalClose={handleModalClose} handleLocationClick={handleLocationClick} handleModalOpen={handleModalOpen} loggedIn={loggedIn} username={username} handleSignIn ={handleSignIn } setMobileNumber={setMobileNumber} mobileNumber={mobileNumber} handleLogout={handleLogout} />} >


<Route index element={<Content filteredMovies={filteredMovies} showAllMovies={showAllMovies}  isModalOpen={isModalOpen} selectedCity={selectedCity} setModalOpen={setModalOpen}  setShowAllMovies={setShowAllMovies}  />}/>


          <Route path='/AllMovies' element={<Movies filteredMovies={filteredMovies}showAllMovies={showAllMovies}  setShowAllMovies={setShowAllMovies}  />}/>


        <Route path='/MovieDetails' element={<MovieDetail />}/>

       {/* {loggedIn && <Route path='/Profile' element={<UserProfile/>} firstName={firstName} handleProfileSave={handleProfileSave} handlechange={handlechange} username={username} />} */}
       {loggedIn &&   <Route path='/Profile' element={<UserProfile username={username} firstName={firstName} handleProfileSave={handleProfileSave} handlechange={handlechange}  lastName={lastName} birth={birth} identity={identity} handlebirth={handlebirth} handlelastName={handlelastName} handleidenty={handleidenty}  handlemarried={handlemarried} handleImageChange={handleImageChange} married={married} />}/>}

          <Route path='/BookTickets' element={<BookTicket/>}/>
          <Route path='/SeatSelection' element={<SeatSelection/>}/>
          <Route path='/Payment' element={<Payment selectedCity={selectedCity}/>}/>
          <Route path='/PaymentDetails' element={<PaymentDetails/>}/>
          <Route path='/success' element={<PaymentSuccess/>}/>
                 </Route>
              
              </Routes>
    </BrowserRouter>


   
  )
}

export default App