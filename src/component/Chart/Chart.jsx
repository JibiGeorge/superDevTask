import React from 'react'
import ChartHeader from '../ChartHeader/ChartHeader'
import BarChart from '../BarChart/BarChart'

const Chart = ({ chartData, amount }) => {
  return (
    <div className='rounded-[15px] pb-3 bg-[#1D171D]'>
      <ChartHeader spendAmount={amount} />
      <BarChart chartData={chartData} />
    </div>
  )
}

export default Chart