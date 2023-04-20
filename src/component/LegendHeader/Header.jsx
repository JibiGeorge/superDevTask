import React from 'react'

const Header = ({ title, total_amount, desc, color }) => {
  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-row items-center gap-3'>
        <div className={`w-[16px] h-[16px] bg-[#${color}] rounded-[2px]`}></div>
        <h2 className='clash-text text-[24px] text-[#DBCCDC]'>{title}</h2>
      </div>
      <div className='text-right'>
        <h2 className='clash-text text-[24px] text-[#DBCCDC]'>${total_amount}</h2>
        <h2 className='clash-text text-[12px] text-[#7EB866]'>${desc}</h2>
      </div>
    </div>
  )
}

export default Header