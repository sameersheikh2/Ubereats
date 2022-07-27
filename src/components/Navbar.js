import React from 'react'
import { AiOutlineMenu , AiOutlineSearch , AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'


const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-start p-4'>
            {/* left side */}
            <div className='flex items-center'> 
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl'> 
                    BEST<span className='font-bold'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/* search input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>  
                <AiOutlineSearch size={25}/>
                <input type="text" placeholder='search food' className='bg-transparent p-2 focus:outline-none w-full' />
            </div>
            {/* cart icon */}
            <button className='bg-black text-white hidden rounded-full md:flex items-center py-2'>
                <BsFillCartFill size={20} className="mr-2"/>Cart
            </button>
            {/* Mobile menu */}
            <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
            {/* sidebar menu */}
            <div className='fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'>
                <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className='text-2xl p-4'>Best <span className='font-bold '>Eats</
                span></h2>
                <nav>
                    <ul>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar