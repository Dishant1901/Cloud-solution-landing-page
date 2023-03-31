import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full text-white py-16 px-4' >
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='  lg:col-span-2 '>
                <h1 className='md:text-4xl font-bold py-2 sm:text-3xl text-2xl'>Want tips to optimize your automation workflow?</h1>
                <p className='mt-3'>Sign up to our Newsletter and stay updated.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
                    <input className='w-full p-3 rounded-md text-black' type="email" placeholder='Enter Your Email' />
                    <button className='bg-[#00df9a] w-40 mx-auto  font-medium text-black rounded-lg py-2 my-6 ml-4'>Notify Me</button>
                </div>
                <p>we care about your protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span> </p>

            </div>

        </div>
        

    </div>
  )
}

export default NewsLetter