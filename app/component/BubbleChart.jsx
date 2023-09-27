'use client'
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const BubbleChart = ()=>{
    const [chartData, setchartData] =useState({
        datasets:[]
    })
    useEffect(()=>{
        setchartData({
            datasets: [
                {
                  label: 'Red dataset',
                  data: Array.from({ length: 50 }, () => ({
                    x: faker.datatype.number({ min: -100, max: 100 }),
                    y: faker.datatype.number({ min: -100, max: 100 }),
                    r: faker.datatype.number({ min: 5, max: 20 }),
                  })),
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },{
                    label: 'Blue dataset',
                    data: Array.from({ length: 50 }, () => ({
                      x: faker.datatype.number({ min: -100, max: 100 }),
                      y: faker.datatype.number({ min: -100, max: 100 }),
                      r: faker.datatype.number({ min: 5, max: 20 }),
                    })),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
                ],
        }) 
        // setChartOptions({
        //     plugins: {
        //         legend: {
        //             position: 'top',
        //         },
        //         title: {
        //             display: true,
        //             text: 'Daily Revenue'
        //         }
        //     },
        //     maintainAspectRatio: false,
        //     responsive: true
        // })
    },[])
    return (
        <>
        <div className='w-full pt-24 md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bubble data={chartData} />
        </div>
        </>
      )
}

export default BubbleChart