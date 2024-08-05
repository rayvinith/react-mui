import { Container } from '@mui/material'
import React from 'react'
import "./Footer.css"
import Swiper from './Swiper'
const Footer = () => {
  return (
    <Container fixed>
         <Swiper/>
      <div className="footer">
      <Swiper/>
        <p>©️2024 My Website. All rights reserved.</p>
        <p>Powered by React and MUI</p>
      </div>
    </Container>
  )
}

export default Footer
