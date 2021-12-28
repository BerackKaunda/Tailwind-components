//External imports
import React from 'react'

//
import { FaGithub } from "react-icons/fa";
import { FaColumns } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaMoon  } from "react-icons/fa";



const Navbar =() => {
    return(
        <nav className='bg-myBg sticky top-0 z-10 w-full h-auto shadow-md '>
            <div className=' flex justify-between py-5 px-10'>
                <div className=''>
                    <h1 className=' text-white font-medium text-2xl'>
                        Tailstrap
                    </h1>
                </div>

                <div className='flex space-x-6'>
                    <button href='' className='navBtn rounded-tl-md'>
                    <a href="">Components</a>
                    <FaCogs />
                    </button>
                    <button href='' className='navBtn rounded-tr-md '>
                    <a href="">Templates</a> 
                   <FaColumns />
                    </button>
                    <button href='' className='navBtn rounded-bl-md'>
                    <a href="">Github</a>
                    <FaGithub />
                    </button>
                    <button href='' className='navBtn rounded-br-md'>
                    <a href="">Dark theme</a> 
                    <FaMoon />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar