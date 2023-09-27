import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'

const SideBar = ({children}) => {
  return (
    <div className='flex'>
    <div className='fixed w-20 h-screen p-4 bg-gray-400 border-r-[1px] flex flex-col justify-between'>
    <div className='flex flex-col items-center'>
      <Link href='/'>
      <div className='rounded-lg bg-purple-900 p-3 text-white inline-block'>
        <RxSketchLogo size={25} />
      </div>
      </Link>
      <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
      <Link href='/'>
      <div className='rounded-lg bg-gray-100 my-4 hover:bg-gray-200 p-3 inline-block'>
        <RxDashboard size={25} />
      </div>
      </Link>
      <Link href='/customer'>
      <div className='rounded-lg bg-gray-100 my-4 hover:bg-gray-200 p-3 inline-block'>
        <RxPerson size={25} />
      </div>
      </Link>
      <Link href='/orders'>
      <div className='rounded-lg bg-gray-100 my-4 hover:bg-gray-200 p-3 inline-block'>
        <HiOutlineShoppingBag size={25} />
      </div>
      </Link>
      <Link href='/'>
      <div className='rounded-lg bg-gray-100 my-4 hover:bg-gray-200 p-3 inline-block'>
        <FiSettings size={25} />
      </div>
      </Link>
    </div>
    </div>
    <main className='ml-20 w-full'>
    {children}
    </main>
    </div>
  )
}

export default SideBar