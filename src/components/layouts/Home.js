//External imports
import React from 'react'

//Local imports
import Snippets from '../pages/componentList/Snippets'
import { FaCogs } from "react-icons/fa";




const Home =() => {
    return(
        //This is the landing page
        <main>
            <div className='m-2 mb-8'>
                <h1 className='font-extrabold text-white text-6xl text-center leading-tight pt-28 mb-8 '>
                    <span className='bg-purple-700'>Build websites even faster with components on top of Tailwind CSS</span>           

                </h1>
                <p className='text-gray-400 text-center px-36 text-2xl font-medium'>
                Start developing with an open-source library of over 400+ web components and interactive elements built with the utility classes from Tailwind CSS


                </p>
            </div> 

            <div className=' grid grid-cols-3 gap-3 m-20'>
                <div className='col col-span-2'>
                <div className=' grid grid-cols-3 gap-2'>
                    <div className='block col '>
                        <button className=' rounded-md p-3 bg-purple-700 '>
                            <span className='text-white text-xl'>
                            <FaCogs />
                            </span>
                        </button>
                        <div>
                            <h2 className='font-medium text-white '>
                            .01 Free and open source
                            </h2>
                            <p className='text-gray-500 text-sm'>All packages have MIT license, you can use Mantine in any project
                            </p>
                        </div>
                    </div>

                    <div className='block col mt-12'>
                        <button className=' rounded-md p-3 bg-purple-700 '>
                            <span className='text-white text-xl'>
                            <FaCogs />
                            </span>
                        </button>
                        <div>
                            <h2 className='font-medium text-white '>
                            .02 Free and open source
                            </h2>
                            <p className='text-gray-500 text-sm'>All packages have MIT license, you can use Mantine in any project
                            </p>
                        </div>
                    </div>

                    <div className='block col mt-24'>
                        <button className=' rounded-md p-3 bg-purple-700 '>
                            <span className='text-white text-xl'>
                            <FaCogs />
                            </span>
                        </button>
                        <div>
                            <h2 className='font-medium text-white '>
                            .03 Free and open source
                            </h2>
                            <p className='text-gray-500 text-sm'>All packages have MIT license, you can use Mantine in any project
                            </p>
                        </div>
                    </div>

                    
                </div>
                </div>
                <div className='col '>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem cupiditate porro temporibus, molestias maiores illo, dolor praesentium nesciunt deleniti non voluptas perspiciatis dolorum consequuntur velit vero neque delectus iure reprehenderit!
                    </p>

                </div>
            </div>

            
            {/* Snippets components contain card snippets */}
            <Snippets />
            
        </main>
    )
}

export default Home