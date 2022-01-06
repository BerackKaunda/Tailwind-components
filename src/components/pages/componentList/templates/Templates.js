//External Imports
import { SiTailwindcss } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiReact } from "react-icons/si"

//Local Imports
import Tailwind from '../../../../assets/Tailwind.png'

export const Templates = () => {
    return (
        <main>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-full px-20 py-40">
                <div className="grid grid-cols-2 gap-10">
                <div className="col">
                    <h1 className="text-white font-bold tracking-wider text-3xl leading-tight font-mono ">
                    Fully Coded UI Tools to create web and mobile apps
                    </h1>
                    <p className="py-8 text-white font-sans tracking-wider leading-tight ">
                    UI Kits, Templates and Dashboards built on top of Bootstrap, Vue.js, React, Angular, Node.js and Laravel. Join over 1,767,685 creatives to access all our products!
                    </p>

                    <div>
                        <input className="py-2 pr-32 pl-5 rounded-3xl text-gray-800 text-lg font-semibold bg-transparent border focus:outline-none focus:ring-1 focus:ring-purple-700 focus:border-purple-700 focus:bg-white" type="search" name="searchBtn" id="" placeholder="eg. tailwindcss " />
                    </div>

                </div>
                <div className="col relative w-full h-full">
                    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto border border-gray-400 w-28 h-28 rounded-full "> 
                        <div className='absolute flex bottom-0 left-0 -mb-3'>
                            <span className='border bg-white py-3 px-3 rounded-full text-indigo-800 text-2xl'><SiHtml5 /></span>
                        </div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto border border-gray-400 w-64 h-64 rounded-full ">
                        <div className='absolute flex top-0 right-0 m-3'>
                            <span className='border bg-white py-3 px-3 rounded-full text-indigo-800 text-2xl'><SiHtml5 /></span>
                        </div>
                        
                        
                    </div> 
                    <div className="absolute  top-0 bottom-0 left-0 right-0 m-auto border border-gray-400 w-96 h-96 rounded-full ">
                        <div className='absolute flex top-0 left-0 m-8'>
                            <span className='border bg-white py-3 px-3 rounded-full text-indigo-800 text-2xl'><SiHtml5 /></span>
                        </div>
                        <div className='absolute flex bottom-0 right-0 m-8'>
                            <span className='border bg-white py-3 px-3 rounded-full text-indigo-800 text-2xl'><SiHtml5 /></span>
                        </div>
                        <div className='absolute flex bottom-0 left-0 m-8'>
                            <span className='border bg-white py-3 px-3 rounded-full text-indigo-800 text-2xl'><SiHtml5 /></span>
                        </div>
                    </div>
                </div>
                </div>

            </div>

            <div className="mx-20 -mt-10 bg-purple-800 rounded-lg">
                    <ul className="flex flex-row flex-wrap justify-between  py-4 px-12 text-white font-medium text-lg ">
                            <li className="px-3 py-2 rounded-md hover:bg-purple-600 ">All Templates</li>
                            <li className="px-3 py-2 rounded-md hover:bg-purple-600 ">React JS</li>
                            <li className="px-3 py-2 rounded-md hover:bg-purple-600 ">Next JS</li>
                            <li className="px-3 py-2 rounded-md hover:bg-purple-600 ">Tailwind CSS</li>
                            <li className="px-3 py-2 rounded-md hover:bg-purple-600 ">Free Templates</li>
                            <li className="px-3 py-2 rounded-md hover:bg-purple-600 ">Premium Templates</li>
                        

                    </ul>
                </div>


            <div className=' m-10 p-8'>
                <h1 className='flex justify-start text-gray-400 text-2xl font-medium tracking-wide leading-tight p-4 '>
                    Some Popular Bundles
                </h1>
            <div className='grid grid-cols-3 gap-8'>
                <div className='grid col px-4'>
                    <div className='bg-gradient-to-b from-purple-700 to-blue-500 rounded-lg py-20 px-4 '>
                        <div className='flex justify-start items-center space-x-2 pt-10'>
                            <span className='border py-3 px-3 rounded-full text-white text-2xl '><SiHtml5 /></span>
                            <span className='border py-3 px-3 rounded-full text-white text-2xl '><SiTailwindcss /></span>
                            <span className='border py-3 px-3 rounded-full text-white text-2xl '><SiReact /></span>
                        </div>
                        <div className='pt-10'>
                        <h1 className='text-white text-2xl font-bold font-mono leading-tight'>
                        Browse this month’s best selling themes
                        </h1>
                        <p className='py-4 text-white text-sm tracking-wider '>
                        The best web themes and templates have arrived.
                        </p>
                        </div>
                        <div className='flex justify-start py-4'>
                        <button className='border text-white font-bold py-2 px-4 rounded-3xl '>
                                Explore
                        </button>
                        </div>
                        
                    </div>
                </div>

                <div className='grid col-span-2'>
                    <div className='grid grid-cols-2 gap-8 '>
                        <div className='relative border border-gray-400 rounded-md overflow-hidden'>
                            <div className=''>
                            <div className='absolute bg-purple-800 rounded-md w-full h-full bg-opacity-0 opacity-0 hover:bg-opacity-75 hover:opacity-75 '>
                                <div className='absolute w-full flex flex-row justify-center top-1/3 space-x-2 hover:bg-transparent'>
                                    <span className='border bg-white p-3 rounded-full text-blue-800 text-2xl'><SiHtml5 /></span>
                                    <span className='border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiTailwindcss /></span>
                                    <span className='border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiReact /></span>
                                </div>
                            </div>
                            <img className='object-cover overflow-hidden rounded-t-md' src={ Tailwind } alt="" />
                            <div className='block p-2 '>
                                <div className='flex justify-between'>
                                    <span className='text-gray-400 text-md font-bold'>
                                        React Dashboard Pro 2
                                    </span>
                                    <span className='text-blue-500 font-bold font-mono text-md'>
                                        $69
                                    </span>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm '>
                                        Premium React Admin Tempalate
                                    </p> 
                                </div> 
                                <div className='flex flex-row gap-4 pt-1'>
                                    <span className='bg-blue-500 px-2 rounded-2xl text-white text-sm font-medium flex items-center'>
                                        React
                                    </span>
                                    <span className='bg-blue-500 px-2 rounded-2xl text-white text-sm font-medium flex items-center'>
                                        TailwindCss
                                    </span>
                                </div>                                
                            </div>
                            </div>
                            
                        </div>
                        <div className='relative border border-gray-400 rounded-md overflow-hidden'>
                            <div className=''>
                            <div className='absolute bg-purple-800 rounded-md w-full h-full bg-opacity-0 opacity-0 hover:bg-opacity-75 hover:opacity-75 '>
                                <div className='absolute w-full flex flex-row justify-center top-1/3 space-x-2 hover:bg-transparent'>
                                    <span className='border bg-white p-3 rounded-full text-blue-800 text-2xl'><SiHtml5 /></span>
                                    <span className='border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiTailwindcss /></span>
                                    <span className='border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiReact /></span>
                                </div>
                            </div>
                            <img className='object-cover overflow-hidden rounded-t-md' src={ Tailwind } alt="" />
                            <div className='block p-2 '>
                                <div className='flex justify-between'>
                                    <span className='text-gray-400 text-md font-bold'>
                                        React Dashboard Pro 2
                                    </span>
                                    <span className='text-blue-500 font-bold font-mono text-md'>
                                        $69
                                    </span>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm '>
                                        Premium React Admin Tempalate
                                    </p> 
                                </div> 
                                <div className='flex flex-row gap-4 pt-1'>
                                    <span className='bg-blue-500 px-2 rounded-2xl text-white text-sm font-medium flex items-center'>
                                        React
                                    </span>
                                    <span className='bg-blue-500 px-2 rounded-2xl text-white text-sm font-medium flex items-center'>
                                        TailwindCss
                                    </span>
                                </div>                                
                            </div>
                            </div>
                            
                        </div>
                        <div className='relative border border-gray-400 rounded-md overflow-hidden'>
                            <div className=''>
                            <div className='absolute bg-purple-800 rounded-md w-full h-full bg-opacity-0 opacity-0 hover:bg-opacity-75 hover:opacity-75 '>
                                <div className='absolute w-full flex flex-row justify-center top-1/3 space-x-2 hover:bg-transparent'>
                                    <span className='border bg-white p-3 rounded-full text-blue-800 text-2xl'><SiHtml5 /></span>
                                    <span className='border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiTailwindcss /></span>
                                    <span className='border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiReact /></span>
                                </div>
                            </div>
                            <img className='object-cover overflow-hidden rounded-t-md' src={ Tailwind } alt="" />
                            <div className='block p-2 '>
                                <div className='flex justify-between'>
                                    <span className='text-gray-400 text-md font-bold'>
                                        React Dashboard Pro 2
                                    </span>
                                    <span className='text-blue-500 font-bold font-mono text-md'>
                                        $69
                                    </span>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm '>
                                        Premium React Admin Tempalate
                                    </p> 
                                </div> 
                                <div className='flex flex-row gap-4 pt-1'>
                                    <span className='bg-blue-500 px-2 rounded-2xl text-white text-sm font-medium flex items-center'>
                                        React
                                    </span>
                                    <span className='bg-blue-500 px-2 rounded-2xl text-white text-sm font-medium flex items-center'>
                                        TailwindCss
                                    </span>
                                </div>                                
                            </div>
                            </div>
                            
                        </div>
                        <div className='relative border border-gray-400 rounded-md overflow-hidden'>
                            <div className=''>
                            <div className='absolute bg-purple-800 rounded-md w-full h-full bg-opacity-0 opacity-0 hover:bg-opacity-75 hover:opacity-75 '>
                                <div className='absolute w-full flex flex-row justify-center top-1/3 space-x-2 hover:bg-transparent'>
                                    <span className='border bg-white p-3 rounded-full text-blue-800 text-2xl'><SiHtml5 /></span>
                                    <span className='border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiTailwindcss /></span>
                                    <span className='border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiReact /></span>
                                </div>
                            </div>
                            <img className='object-cover overflow-hidden rounded-t-md' src={ Tailwind } alt="" />
                            <div className='block p-2 '>
                                <div className='flex justify-between'>
                                    <span className='text-gray-400 text-md font-bold'>
                                        React Dashboard Pro 2
                                    </span>
                                    <span className='text-blue-500 font-bold font-mono text-md'>
                                        $69
                                    </span>
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm '>
                                        Premium React Admin Tempalate
                                    </p> 
                                </div> 
                                <div className='flex flex-row gap-4 pt-1'>
                                    <span className='bg-blue-500 px-2 rounded-2xl text-white text-sm font-medium flex items-center'>
                                        React
                                    </span>
                                    <span className='bg-blue-500 px-2 rounded-2xl text-white text-sm font-medium flex items-center'>
                                        TailwindCss
                                    </span>
                                </div>                                
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-8 mt-10'>
                <button className='bg-gradient-to-r from-purple-500 to-purple-700 px-6 py-2 text-white font-medium tracking-wider hover:transform hover:scale-110 hover:duration-300 hover:ease-in-out rounded-3xl'>
                    <a href="/templates"> View All Products</a>
                </button>
            </div>
            </div>

            <div className="mx-20 my-10 grid grid-cols-3 bg-gradient-to-br from-blue-400 to-blue-800 rounded-2xl ">
                <div className=" col-span-2 px-10 py-10">
                    <button className="rounded-3xl py-3 px-12 bg-white text-gray-700 text-md font-bold tracking-wider  ">
                        Save <span className="text-red-600 font-serif">Upto 80% 🔥 </span> Of Work Now
                    </button>
                    <p className="py-10 text-white text-3xl tracking-widder leading-tight font-mono font-medium">
                    Take advantage of 96 <span className="text-red-600"> Front-end & Back-end </span> Premium Products and save up to <span className="text-red-600 "> 80% OFF </span>

                    </p>

                </div>

            </div>
        </main>
    )
}