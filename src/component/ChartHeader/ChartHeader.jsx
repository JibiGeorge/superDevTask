import React from 'react'
import Items from './Items'

const ChartHeader = ({ spendAmount }) => {
    return (
        <div className='p-5 grid grid-cols-2 border-b-[1px] border-[#3A2E3C]'>
            {spendAmount?.map((data) =>
                <Items
                    title={data.totalAmount
                        ? 'Total Spends'
                        : 'Average Cost per Day'
                    }
                    amount_spends={data?.totalAmount || data?.averagePerDay}
                    description={data.totalAmount
                        ? 'Up by 12% ($2.23) from last month'
                        : 'Down by 1.56% from last day'
                    }
                />
            )}
        </div>
    )
}

export default ChartHeader