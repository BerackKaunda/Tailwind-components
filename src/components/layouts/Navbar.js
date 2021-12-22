//External imports
import React from 'react'



const Navbar =() => {
    return(
        <nav className='bg-myBg sticky top-0 z-10 w-full h-auto shadow-md '>
            <div className=' flex justify-between py-5 px-10'>
                <div className=''>
                    <h1 className=' text-white font-medium text-xl'>
                        Tailstrap
                    </h1>
                </div>
                <div>
                    <ul className=' flex space-x-32 text-gray-400 font-medium text-lg font-sans ' >
                        <li className='hover:text-blue-600'><a href="/">Components library</a></li>
                        <li className='hover:text-blue-600'><a href="/">Templates library</a></li>
                        <li className='hover:text-blue-600'> <a href="/">License</a> </li>
                    </ul>
                </div>
                <div>
                    <button className=' bg-blue-600 px-5 py-2 rounded font-medium text-white hover:text-gray-400 hover:bg-blue-900'>
                        <a href="/"> Buy </a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar