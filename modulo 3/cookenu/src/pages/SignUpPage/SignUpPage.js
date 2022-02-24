import React from 'react'
import logo from '../../assets/logo.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'


const SignUpPage = () => {
  useUnProtectedPage()
  
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm/>
    </ScreenContainer>
  )
}

export default SignUpPage