import React from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = ({ showSideBar, setShowSideBar }) => {
  const toggleSideBar = () => setShowSideBar(!showSideBar);
  return (
    <div className='bg-[#121212] fixed h-[96px] w-full flex items-center px-24 sm:px-5 md:px-5 justify-between z-50'>
      <div className='flex flex-row items-center gap-4'>
        <GiHamburgerMenu className='text-[#FFF] text-[25px] hidden md:block cursor-pointer' onClick={toggleSideBar} />
        <img className='w-[132px] h-[25px] cursor-pointer' src="/images/logo.webp" alt="logo" />
      </div>
      <div className='flex justify-end items-center gap-4'>
        <div className='flex gap-5'>
          <span className='text-lg font-[500] text-[#fff] intern-text cursor-pointer'>DOCS</span>
          <span className='text-lg font-[500] text-[#FFD95F] intern-text cursor-pointer'>DASHBOARD</span>
          <span className='text-lg font-[500] text-[#fff] intern-text cursor-pointer'>HELP</span>
        </div>
        <div className='h-[48px] w-[48px] flex'>
          <img src="/images/placeholder.jpg" className='rounded-full' alt="" />
        </div>
        <SlArrowDown className='text-[#fff]' />
      </div>
    </div>
  )
}

export default Header