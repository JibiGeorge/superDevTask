import React from 'react'

const Items = ({ title, amount_spends, description }) => {
  return (
    <div className='flex flex-col col-span-1'>
      <span className='intern-text text-[16px] text-[#DBCCDC] font-semibold'>{title}</span>
      <h3 className='clash-text text-[32px] font-semibold text-[#FFFFFF]'>${amount_spends.toFixed(2)}</h3>
      <p className='intern-text text-[12px] text-[#877C88]'>{description}</p>
    </div>
  )
}

export default Items