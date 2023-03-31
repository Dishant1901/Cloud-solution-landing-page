import React from 'react'

const Hero = () => {
  return (
    <div className=' text-white'>
        <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'> GROWING WITH DATA ANALYTICS</p>
            <h1 className=' md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold'>Grow with data</h1>
            <div>
            <p className='md:text-5xl sm:text-4xl text-xl py-4 '>Fast,Flexible Solution for </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-600'>Monitor your clusters with various cloud technologies.</p>
            <button className=' bg-[#00df9a] w-40 mx-auto font-medium text-black rounded-lg py-2 my-6'>Get Started</button>
        </div>
    </div>
  )
};

export default Hero;