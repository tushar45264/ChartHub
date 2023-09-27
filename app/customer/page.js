import React from 'react'
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import { data } from '../data/Data'
const page = () => {
  return (
    <div className='bg-gray-100 min-h-screen'> 
        <div className='flex justify-between p-4 ml-20'>
            <h2>Customer</h2>
            <h2>Welcome Back, Client</h2>
        </div>
        <div className=' ml-20 p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
            <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer font-bold'>
                <span>Name</span>
                <span className='sm:text-left text-right'>Email</span>
                <span className='hidden md:grid'>Last Order</span>
                <span className='hidden sm:grid'>Method</span>    
            </div>
            <ul>
                {data.map((order,id)=>(
                    <li key={id}>
                        <div className=' bg-gray-200 my-3 p-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer border rounded-lg'>
                        <div className='flex items-center'>
                        <div className='bg-purple-100 rounded-lg p-3'>
                     <BsPersonFill className='text-purple-800' />
                     </div>
                     <p className='p-4'>{order.name.first + ' ' + order.name.last}</p>
                        </div>
                        <span className='sm:text-left text-right'>{order.name.first}@gmail.com</span>
                        <span className='hidden md:grid'>{order.date}</span>
                        <span className='hidden sm:flex justify-between items-center'>{order.method}
                        <BsThreeDotsVertical />
                        </span>    
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    </div>
  )
}

export default page