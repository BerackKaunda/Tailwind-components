//External imports
import React from 'react'


const Footer =() => {
    return(

        //Footer starts
        <footer className='p-16 bg-gray-800'>
            <div className=' grid grid-cols-6 gap-16'>
                <div className=' col-span-2 '>
                <h1 className='flex text-white font-medium text-xl py-3'>
                        Tailstrap
                </h1>
                <p className='text-gray-400 font-normal text-md'>
                FlowBite is a design kit that can be used by web designers and developers to develop UI interfaces with Figma and Tailwind CSS.
                </p>
                </div>
                <div className=' col'>
                    <h3 className=' py-3 font-medium text-gray-400 text-lg  '>
                        Resources
                    </h3>
                    <ul className=' text-white font-thin '>
                        <li className=' hover:underline mb-3 '><a  href="/">Figma</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">Github</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">React</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">Wordpress</a></li>
                    </ul>
                </div>
                <div className=' col'>
                    <h3 className=' py-3 font-medium text-gray-400 text-lg  '>
                        Follow Us
                    </h3>
                    <ul className=' text-white font-thin '>
                        <li className=' hover:underline mb-3 '><a  href="/">Github</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">Twitter</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">Facebook</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">LinkedIn</a></li>
                    </ul>
                </div>
                <div className=' col'>
                    <h3 className=' py-3 font-medium text-gray-400 text-lg  '>
                        Help & Support
                    </h3>
                    <ul className=' text-white font-thin '>
                        <li className=' hover:underline mb-3 '><a  href="/">Contact Us</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">Knowledge Center</a></li>
                    </ul>
                </div>
                <div className=' col'>
                    <h3 className=' py-3 font-medium text-gray-400 text-lg  '>
                        Legal
                    </h3>
                    <ul className=' text-white font-thin '>
                        <li className=' hover:underline mb-3 '><a  href="/">Privacy Policy</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">Terms & Conditions</a></li>
                        <li className=' hover:underline mb-3 '><a  href="/">EULA</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer