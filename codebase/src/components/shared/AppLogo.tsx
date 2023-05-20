import React from 'react'
import { AppLogoContainer } from 'styles/Card.styled'
import BaseImg from '../../assets/images/base_logo.jpg'


function AppLogo() {
  return (
    <AppLogoContainer>
       <img src={BaseImg} alt="base_img"/>
         <h3>Assign</h3>  
         <h4>IT</h4>   
    </AppLogoContainer>
  )
}

export default AppLogo
