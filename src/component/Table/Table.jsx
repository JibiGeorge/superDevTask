import React from 'react'

const Table = ({ data }) => {
    return (
        <div>
            <table className='border-[1px] border-[#2D2A2E] border-solid text-[#DBCCDC] text-left w-full table-auto'>
                <thead>
                    <tr className='bg-[#1D171D] intern-text text-[14px] text-[#DBCCDC]'>
                        <th className='p-3'>Resource name</th>
                        <th className='p-3'>Memory</th>
                        <th className='p-3'>CPU</th>
                        <th className='p-3'>Storage</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data)?.map((elements) =>
                        <tr>
                            {/* <td>{product.cpu.toFixed(2)}</td> */}
                            <td className='p-3'>Master app - {elements}</td>
                            <td className='p-3'>${data[elements]?.memory.toFixed(2)}</td>
                            <td className='p-3'>${data[elements]?.cpu.toFixed(2)}</td>
                            <td className='p-3'>${data[elements]?.storage.toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table