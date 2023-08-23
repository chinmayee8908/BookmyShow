import React from 'react'
import Header from './HomePage/Header'
import { Outlet } from 'react-router-dom'
 import "../src/HomePage/HomePage.css"
const Layout = ({isModalOpen ,selectedCity, setModalOpen, setSelectedCity, handleModalClose ,handleLocationClick ,handleModalOpen ,loggedIn,username ,handleSignIn,mobileNumber,setMobileNumber ,handleLogout}) => {

return (
< div Whole-Container>
<Header isModalOpen={isModalOpen} selectedCity={selectedCity} setModalOpen={setModalOpen} setSelectedCity={setSelectedCity} handleModalClose={handleModalClose} handleLocationClick={handleLocationClick} handleModalOpen={handleModalOpen} loggedIn={loggedIn}username={username} handleSignIn ={handleSignIn } mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} handleLogout={handleLogout}/>
<Outlet/>

</div>
  )
  
}

export default Layout