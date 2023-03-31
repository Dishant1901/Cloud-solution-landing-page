import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] bg-white'>
        <div className='max-[1240px] mx-auto mr-8 grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl  flex flex-col ml-8 py-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <h2 className='text-2xl font-bold py-2 text-center'>Multi user</h2>
                <p className='text-center text-4xl font-bold'>$349</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>1 TB Storage</p>
                    <p className='py-2 border-b mx-8 '>Up to 5 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send upto 5 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto    text-black  py-3 px-6  '>Start Trial</button>
            </div>

            <div className='w-full shadow-xl bg-gray-100 flex flex-col ml-8 py-4  md:my-[-20px] my-8 rounded-lg hover:scale-105 duration-300 '>
                <h2 className='text-2xl font-bold py-2 text-center'>Single user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send upto 2 GB</p>
                </div>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto    bg-black  py-3 px-6  '>Start Trial</button>
            </div>

            <div className='w-full shadow-xl  flex flex-col ml-8 py-4 my-4  mr-8 rounded-lg hover:scale-105 duration-300 '>
                <h2 className='text-2xl font-bold py-2 text-center'>Organization</h2>
                <p className='text-center text-4xl font-bold'>$999</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '> Unlimited Storage</p>
                    <p className='py-2 border-b mx-8 '> Unlimited User</p>
                    <p className='py-2 border-b mx-8 '>Send upto 50 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto    text-black  py-3 px-6  '>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards