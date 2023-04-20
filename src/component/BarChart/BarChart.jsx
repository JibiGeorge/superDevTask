import React, { useState } from 'react'
import Chart from "react-apexcharts";
import Header from './Header';

const BarChart = ({ chartData }) => {
  const categories = chartData?.map((item) => item?.day);
  const [chartType, setChartType] = useState('bar');
  const series = [{
    name: 'Project X',
    data: chartData.map((item) => item.data[0]?.project || 0)
  }, {
    name: 'Unbox',
    data: chartData.map((item) => item.data[0]?.unbox || 0)
  }];
  const barOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: false
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '20px',
              fontWeight: 900,
            }
          }
        }
      }
    },
    xaxis: {
      type: 'datetime',
      categories: categories,
      style: {
        colors: "#877C88",
        fontSize: '20px'
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          return value.toFixed(2);
        },
        style: {
          colors: "#877C88"
        },
      }
    },
    legend: {
      show: false
    },
    colors: ['#FFE4A9', '#A9D1FF']
  };

  var optlineions = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFE4A9', '#A9D1FF'],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: categories
    },
    yaxis: [
      {
        labels: {
          style: {
            colors: "#877C88"
          },
          formatter: (value) => {
            return value.toFixed(2);
          },
        },
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };
  return (
    <>
      <Header setChartType={setChartType} />
      <Chart
        options={chartType == 'bar' ? barOptions : optlineions}
        series={series}
        type={chartType}
        width="97%"
      />
      <div className='flex flex-row p-5'>
        <div className='flex flex-row items-center mr-[100px]  gap-3'>
          <div className='w-[16px] h-[16px] bg-[#FFE4A9] rounded-[2px]'></div>
          <h3 className='text-[#DBCCDC] text-[12px] intern-text'>Project X</h3>
        </div>
        <div className='flex flex-row items-center mr-[100px]  gap-3'>
          <div className='w-[16px] h-[16px] bg-[#A9D1FF] rounded-[2px]'></div>
          <h3 className='text-[#DBCCDC] text-[12px] intern-text'>Unbox</h3>
        </div>
      </div>
    </>
  )
}

export default BarChart