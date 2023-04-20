import React from 'react'
import Header from '../LegendHeader/Header'
import Table from '../Table/Table'

const Unbox = ({ unboxData }) => {
  const grandTotal = Object.values(unboxData).reduce((acc, item) => {
    const { cpu, memory, storage } = item;
    acc += cpu + memory + storage;
    return acc;
  }, 0);
  return (
    <>
      <Header
        title={'Unbox'}
        total_amount={grandTotal}
        desc={`${grandTotal} Paid with credits`}
        color={'A9D1FF'}
      />
      <Table data={unboxData} />
    </>
  )
}

export default Unbox