'use client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

const Nav = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
    </BrowserRouter>
    </>
  )
}

export default Nav