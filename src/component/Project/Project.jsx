import React from 'react'
import Header from '../LegendHeader/Header'
import Table from '../Table/Table'

const Project = ({ projectData }) => {
    const grandTotal = Object.values(projectData).reduce((acc, item) => {
        const { cpu, memory, storage } = item;
        acc += cpu + memory + storage;
        return acc;
      },0);
    return (
        <>
            <Header
                title={'Project X'}
                total_amount={grandTotal}
                desc={`${grandTotal} Paid with credits`}
                color={'FFE4A9'}
            />
            <Table data={projectData} />
        </>
    )
}

export default Project