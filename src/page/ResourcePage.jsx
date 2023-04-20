import React, { useState } from 'react'
import Chart from "../component/Chart/Chart"
import Project from "../component/Project/Project"
import Resource from "../component/Resource/Resource"
import Unbox from "../component/Unbox/Unbox"
import { useEffect } from 'react'
import jsonData from '../dummyData.json'
import FadeLoader from 'react-spinners/FadeLoader'

const ResourcePage = () => {
    const [projectData, setProjectData] = useState('')
    const [unboxData, setunboxData] = useState('')
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [chartData, setChartData] = useState([])
    const [loading, setLoading] = useState(false);
    const [monthlyData, setMonthlyData] = useState({});

    const SpinnderCSS = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const handlePrevMonth = () => {
        const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
        setCurrentMonth(prevMonth);
    }

    const handleNextvMonth = () => {
        const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1);
        setCurrentMonth(nextMonth);
    }

    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    const startDateString = startOfMonth.toLocaleDateString('en-Us', { month: 'short', day: 'numeric' });
    const endDateString = endOfMonth.toLocaleDateString('en-Us', { month: 'short', day: 'numeric' });

    const groupingCategory = (data) => {
        let groupedData = {
            amount: [
                { totalAmount: 0 },
                { averagePerDay: 0 }
            ]
        };

        data.forEach((element) => {
            const category = element.category;
            const resource = element.resource;
            if (!groupedData[category]) {
                groupedData[category] = {};
            }

            if (!groupedData[category][resource]) {
                groupedData[category][resource] = { memory: 0, cpu: 0, storage: 0 };
            }

            groupedData[category][resource].memory += element.memory;
            groupedData[category][resource].cpu += element.cpu;
            groupedData[category][resource].storage += element.storage;
            groupedData.amount[0].totalAmount += element.memory + element.cpu + element.storage;
        })
        return groupedData;
    }

    const filterWithMonth = async (currentMonth, year) => {
        const response = await jsonData.filter(item => {
            const itemDate = new Date(item?.date);
            return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === year;
        })
        return response;
    }

    const groupingChartData = (data) => {
        const currentDate = currentMonth;
        const groupedData = data.reduce((acc, item) => {
            const date = item.date;
            const category = item.category;
            const memory = item.memory;
            const cpu = item.cpu;
            const storage = item.storage;

            if (!acc[date]) {
                acc[date] = {};
            }

            if (!acc[date][category]) {
                acc[date][category] = 0
            }

            acc[date][category] += memory + cpu + storage;

            return acc;

        }, {});

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const daysInMonth = new Date(year, month, 0).getDate();


        const chartData = Array.from({ length: daysInMonth }, (_, i) => ({
            day: `${year}-${month}-${i + 1}`,
            data: [],
        }));

        const insertingData = chartData.map((element) => {
            const day = element.day;
            Object.keys(groupedData)?.map((item) => {
                if (new Date(item).toDateString() == new Date(day).toDateString()) {
                    element?.data.push(groupedData[item])
                }
            })
            return element;
        });

        return insertingData
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            const month = currentMonth.getMonth();
            const year = currentMonth.getFullYear();

            const data = await filterWithMonth(month, year);

            const resultForChart = await groupingChartData(data);
            setChartData(resultForChart);

            if (data) {
                const response = await groupingCategory(data);
                setMonthlyData(response);
                setProjectData(response?.project)
                setunboxData(response?.unbox)
            }
        })()
        setLoading(false)
    }, [currentMonth])
    return (
        <div className='mb-[30px] flex flex-col gap-5'>
            <Resource
                startDateString={startDateString}
                endDateString={endDateString}
                handlePrevMonth={handlePrevMonth}
                handleNextvMonth={handleNextvMonth}
            />
            {loading && <FadeLoader
                color='#FFFF'
                loading={loading}
                cssOverride={SpinnderCSS}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />}
            {!loading &&
                <>
                    {chartData.length ? <Chart chartData={chartData} amount={monthlyData?.amount} /> : null}
                    <Project projectData={projectData} />
                    <Unbox unboxData={unboxData} />
                </>
            }
        </div>
    )
}

export default ResourcePage