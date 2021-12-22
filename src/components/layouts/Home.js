//External imports
import React from 'react'

//Local imports
import Snippets from '../pages/componentList/Snippets'



const Home =() => {
    return(
        //This is the landing page
        <main>
            {/* The Navbar starts here */}
            
            <div className=' py-10'>
                <h2 className='font-bold lg:font-extrabold text-2xl lg:text-4xl lg:leading-snug  text-white lg:text-center 2xl:px-48 mb-4'>
                Tailwind CSS Components

                </h2>
                <p className=' text-gray-400 font-normal lg:text-center text-lg lg:text-xl xl:px-64 mb-10 lg:mb-16 '>
                Explore the whole collection of open-source web components and interactive elements built with the utility classes from Tailwind CSS
                </p>
            </div>
            {/* Snippets components contain card snippets */}
            <Snippets />
            {/* Here is your footer */}
            
        </main>
    )
}

export default Home