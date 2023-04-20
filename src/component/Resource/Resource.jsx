import React, { useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { SlArrowLeft } from 'react-icons/sl'

const Resource = ({
    startDateString,
    endDateString,
    handlePrevMonth,
    handleNextvMonth
}) => {
    return (
        <div className='text-[32px] text-[#FFFFFF] font-clash font-medium h-[60px] flex items-center justify-between'>
            <h3 className='clash-text'>Resource usage</h3>
            <div className='flex gap-2 text-[16px] items-center intern-text'>
                <SlArrowLeft className='cursor-pointer' onClick={handlePrevMonth} />
                <span>{startDateString}</span>
                -
                <span>{endDateString}</span>
                <SlArrowRight className='cursor-pointer' onClick={handleNextvMonth} />
            </div>
        </div>
    )
}

export default Resource