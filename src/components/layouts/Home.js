//External imports
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

//Local imports
import Snippets from '../pages/componentList/Snippets'
import { FaCogs } from "react-icons/fa";
import Video from '../../assets/inspect-demo.mp4'




const Home =() => {

    const buttonCodes = `
<button class='border border-white rounded-md text-md text-white font-medium py-2 px-4'>
    Default
</button>
<button class=' border border-blue-500 rounded-md text-md text-blue-500 font-medium py-2 px-4'>
    Primary
</button>
<button class=' border border-yellow-500 rounded-md text-md text-yellow-500 font-medium py-2 px-4'>
    Secondary
</button>
<button class=' border border-red-500 rounded-md text-md text-red-500 font-medium py-2 px-4'>
    Warning   
</button>
<button class=' border border-red-800 rounded-md text-md text-red-800 font-medium py-2 px-4'>
    Danger
</button>`;
    return(
        //This is the landing page
        <main>
            <div className='m-2 mb-8'>
                <h1 className='font-extrabold text-white text-6xl text-center leading-tight pt-28 mb-8 '>
                    <span className='bg-purple-700'>Build websites even faster with components on top of Tailwind CSS</span>           

                </h1>
                <p className='text-gray-400 text-center px-36 text-2xl font-medium tracking-tight'>
                Start developing with an open-source library of over 400+ web components and interactive elements built with the utility classes from Tailwind CSS


                </p>
            </div> 

            <div className=' grid grid-cols-3 gap-3 m-24 py-12'>
                <div className='col col-span-2'>
                <div className='flex flex-row gap-6'>
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
                            <p className='text-gray-500 text-sm '>All packages have MIT license, you can use Mantine in any project
                            </p>
                        </div>
                    </div>

                    <div className='block col mt-6'>
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

                    <div className='block col mt-12'>
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

            <div className='grid grid-cols-2 gap-10 m-10 p-8'>
                <div className='col'>
                    <video class="rounded-md shadow-lg" playsinline="" autoplay="" muted="" src={Video} type="video/mp4"></video>
                </div>
                <div className='col 8'>
                    <div className='flex items-center space-x-4 '>
                    <button className=' rounded-md p-4 bg-purple-700 '>
                        <span className='text-white text-2xl'>
                                <FaCogs />
                        </span>
                    </button>
                    <h2 className='font-bold text-2xl text-white leading-snug'>
                    Take your web design and development flow to the next level
                    </h2>
                    </div>
                    <div>
                    <p className='text-gray-500 text-xl leading-snug '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus veniam, eos beatae voluptate laborum corrupti animi id magni eius possimus quibusdam, eum architecto, qui nihil dignissimos nam modi eaque exercitationem.
                    </p>
                    </div>
                    <div className='flex flex-row items-center space-x-10 py-10'>
                        <button className='flex items-center space-x-1 text-sm text-white font-medium px-3 py-2 rounded-tl-md rounded-bl-md rounded-br-md bg-purple-700 hover:rounded-md hover:transform hover:ease-linear hover:duration-300 hover:skew-x-6'>
                            Explore Components
                        </button>
                        <button className='flex items-center space-x-1 text-sm text-white font-medium px-3 bg-blue-500 py-2 rounded-tl-md rounded-bl-md rounded-br-md hover:rounded-md hover:transform hover:ease-linear hover:duration-300 hover:-skew-x-6'>
                            Star Us On Github
                        </button>
                    </div>
                </div>
            </div>

            
            <div className='grid grid-cols-3 gap-4 m-10 p-8'>
                <div className='col px-8'>
                    <div className='flex items-center space-x-4 '>
                    <button className=' rounded-md p-4 bg-purple-700 '>
                        <span className='text-white text-2xl'>
                                <FaCogs />
                        </span>
                    </button>
                    <h2 className='font-bold text-2xl text-white '>
                            .01 Free and open source
                    </h2>
                    </div>
                    <div>
                    <p className='text-gray-500 text-lg'>All packages have MIT license, you can use Mantine in any project
                    </p>
                    </div>
                </div>

                <div className='col-span-2'>
                    <video class="rounded-md shadow-lg" playsinline="" autoplay="" muted="" src={Video} type="video/mp4"></video>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 m-10 p-8'>  
            <div className='col-span-2 bg-black p-4 rounded-md'>
                    <div className='flex flex-wrap gap-8'>
                        <button className='border border-white rounded-md text-md text-white font-medium py-2 px-4'>
                            Default
                        </button>
                        <button className=' border border-blue-500 rounded-md text-md text-blue-500 font-medium py-2 px-4'>
                            Primary
                        </button>
                        <button className=' border border-yellow-500 rounded-md text-md text-yellow-500 font-medium py-2 px-4'>
                            Secondary
                        </button>
                        <button className=' border border-red-500 rounded-md text-md text-red-500 font-medium py-2 px-4'>
                            Warning   
                        </button>
                        <button className=' border border-red-800 rounded-md text-md text-red-800 font-medium py-2 px-4'>
                            Danger
                        </button>                        
                    </div>
            <SyntaxHighlighter
                className='text-sm h-auto mt-8'
                language="jsx"
                customStyle={{
                    borderRadius: "12px 12px",
                    backgroundColor: ""
                }}  
                style={atomDark}>
                
            {buttonCodes}

            </SyntaxHighlighter>
            </div>
                <div className='col px-8'>
                    <div className='flex items-center space-x-4 '>
                    <button className=' rounded-md p-4 bg-purple-700 '>
                        <span className='text-white text-2xl'>
                                <FaCogs />
                        </span>
                    </button>
                    <h2 className='font-bold text-2xl text-white '>
                            .01 Free and open source
                    </h2>
                    </div>
                    <div>
                    <p className='text-gray-500 text-lg'>All packages have MIT license, you can use Mantine in any project
                    </p>
                    </div>
                </div>

            </div>

            

            
            {/* Snippets components contain card snippets */}
            <Snippets />
            
        </main>
    )
}

export default Home