import React from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="w-full flex flex-col pt-6">
      <Link to={'/'}>
        <img src={logo} alt="logo" className="w-[124px] h-[34px]  sm:px-[16px] px-[8px] m-4 cursor-pointer" />
      </Link> 
        <div className="border-b-[#E2E3E9] border-b-[1px] mt-2"></div>
    </nav>
  )
}

export default Navbar