import React from 'react'
import "./Hero.css"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
const Hero = () => {
  return (
    <Container fixed>
    <div className='hero'>
      <div className="left">
     
       <h1> We are monkey AI , We create AI images free of cost , Feel free to reach out to us </h1>
     
      </div>
      <div className="right">
      <img src="https://as1.ftcdn.net/v2/jpg/05/47/23/90/1000_F_547239017_qBvGIHSGkYei1i8rHcinAx1LnAP22rVW.jpg" alt="" />
      
      
      </div>
    </div>
    </Container>
  )
}

export default Hero
