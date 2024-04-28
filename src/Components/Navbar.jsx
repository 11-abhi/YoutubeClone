import React from 'react'
import { Link } from 'react-router-dom'
import {  Hamberger } from '../assets/image/image'
import { logo } from '../Utils/Constant'
import { THEINPBARS } from '../Utils/Importing'


const Navbar = () => {
  return (
                <>
                    <header className='h-auto w-full bg-black flex flex-row items-center justify-between px-4 max-sm:flex-col max-sm:gap-3 sticky top-0 left-0 z-[9999] py-5 '>
                                <div className="flex  flex-row gap-3 items-center  bg-black">
                                    <Link to='/'><img src={Hamberger} alt="hamberger" /></Link> 
                                    <Link to = '/'><img className='max-md:h-[24px] md:h-[40px]' src={logo} alt="Logo" /></Link>
                                </div>
                                <THEINPBARS/>
                    </header>
                </>
  )
}

export default Navbar
