import React, { useState } from 'react'
import Nav from './component/Nav'
import Items from './component/Items'
import Resturants from './component/Resturants'
import Topresturants from './component/Topresturants'
import Cuisnies from './component/Cuisnies'
import Explore from './component/Explore'
import Footer from './component/Footer'

const App = () => {

  return (
    <>
    <Nav/>
    <Items/>
    <Topresturants/>
    <Resturants/>
    <Cuisnies/>
    <Explore/>
    <Footer/>
    </>
  )
}

export default App
