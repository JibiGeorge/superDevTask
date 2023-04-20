import React, { useState } from 'react'
import { BsFillBarChartFill } from 'react-icons/bs'
import { IoTrendingUpOutline } from 'react-icons/io5'

const Header = ({ setChartType }) => {
  const [activeButton, setActiveButton] = useState('bar')
  const handleBarClick = () => {
    setActiveButton('bar')
    setChartType('bar');
  };

  const handleLineClick = () => {
    setActiveButton('line')
    setChartType('line');
  };

  return (
    <div className='flex flex-row justify-between p-5 intern-text text-[#DBCCDC]'>
      <h2>Trends</h2>
      <div className='flex flex-row gap-5'>
        <div className='text-[12px] rounded-[2px]'>
          <button className='rounded-[2px] bg-[#DBCCDC] text-[#3A2E3C] border-[1px] w-[64px] h-[20px]'>Days</button>
          <button className='w-[64px] h-[20px] border border-solid border-gray-800'>Hours</button>
          <button className='w-[64px] h-[20px] border border-solid border-gray-800'>minutes</button>
        </div>
        <div className='text-[12px] flex flex-row'>
          <button className={`border-[1px] w-[24px] h-[20px] flex justify-center items-center ${activeButton === 'bar' ? 'bg-[#DBCCDC] text-[#3A2E3C] rounded-[2px]' : 'border-gray-800'}`} onClick={handleBarClick}><BsFillBarChartFill /></button>
          <button className={`w-[24px] h-[20px] border border-solid border-gray-800 flex justify-center items-center ${activeButton === 'line' ? 'bg-[#DBCCDC] text-[#3A2E3C] rounded-[2px]' : 'border-gray-800'}`} onClick={handleLineClick}><IoTrendingUpOutline /></button>
        </div>
      </div>
    </div>
  )
}

export default Header