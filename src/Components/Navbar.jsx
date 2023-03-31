import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav] = useState(true);
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className='text-white flex  items-center justify-between h-20 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        {/* nav links */}
        <nav className=' hidden md:flex '>

            <div className='p-5'>Home</div>
            <div className='p-5'>Company</div>
            <div className='p-5'>Resources</div>
            <div className='p-5'>About</div>
            <div className='p-5'>Contact</div>
        </nav>
        <div onClick={handleNav} className='block md:hidden'>
            {/* ifnav false then show close icon else menu */}
            { !nav ? <AiOutlineClose size={25}/>: <AiOutlineMenu size={25}/>}
        </div>
        <nav className={!nav? 'fixed left-0 top-0 bg-[#000300] w-[60%] h-full border-r  border-r-gray-900 ease-in-out duration-500  ':' fixed left-[-100%]' }>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          
            <div className='pt-4 uppercase'>

                <div className='p-5 border-b border-gray-600'>Home</div>
                <div className='p-5 border-b border-gray-600'>Company</div>
                <div className='p-5 border-b border-gray-600'>Resources</div>
                <div className='p-5 border-b border-gray-600'>About</div>
                <div className='p-5'>Contact</div>
            </div>
        </nav>


    </div>
  )
}

export default Navbar