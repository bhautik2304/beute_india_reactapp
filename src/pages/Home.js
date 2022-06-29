import React from 'react'
import { Banner, Footer, Navbar,Productsection } from '../components'
import { CheckLogin } from '../util'
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate=useNavigate()
  CheckLogin(Navigate)

  return (
    <>
    <Navbar/>
       <Banner/>
       <Productsection/>
    <Footer/>
    </>
  )
}

export default Home