//External Imports
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfAlt } from 'react-icons/fa'
import { SiTailwindcss } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { FaShoppingCart } from "react-icons/fa"
import { FaScroll } from "react-icons/fa"
import { FaTags } from "react-icons/fa"
import { FcExpand } from "react-icons/fc"
import { FcCollapse } from "react-icons/fc"
import { FcAdvance } from "react-icons/fc"
import { FaHourglassEnd } from "react-icons/fa"
import { FaHistory } from "react-icons/fa"
import { FaSyncAlt } from "react-icons/fa"
import { FaTools } from "react-icons/fa"

//Local Imports
import Tailwind from '../../../../assets/Tailwind.png'



export const SingleTemplate = () => {

    const [toggle, setToggle] = useState(false);
    const handleAccordion = () => {
        setToggle(!toggle)
    }
    return(
        <main>
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-20 px-10 grid grid-cols-2 gap-10">
                <div className='grid ol px-16'>
                    <img className=' object-cover rounded-md ' src={ Tailwind } alt="" />
                    <div className='flex justify-between p-10'>
                        <button className='text-white font-medium tracking-wider border py-3 px-10 hover:bg-indigo-700 hover:border-indigo-700 '>
                            Live Preview
                        </button>
                        <button className='text-white font-medium tracking-wider border py-3 px-10 hover:bg-indigo-700 hover:border-indigo-700'>
                            Demo
                        </button>
                    </div>
                </div>

                <div className='grid col'>
                    <div className='text-center'>
                        <h1 className='text-white text-4xl font-mono tracking-widest'>
                            React Dashboard Pro 2
                        </h1>
                        <p className='text-white tracking-widest text-lg p-4'>
                        Free premium tailwind and react dashboard
                        </p>
                        <div className='flex justify-center gap-2 flex-wrap  py-4 font-bold'>
                            <span className='text-yellow-500'><FaStar /></span>
                            <span className='text-yellow-500'><FaStar /></span>
                            <span className='text-yellow-500'><FaStar /></span>
                            <span className='text-yellow-500'><FaStar /></span>
                            <span className='text-yellow-500'><FaStarHalfAlt /></span>
                            <span className='text-white text-xs'>4.50/5 (1177 Reviews)</span>
                        </div>

                        <div className='flex justify-center gap-10 p-10'>
                            <button className='flex items-center space-x-1 text-md tracking-wider text-white font-medium px-8 py-3 rounded-tl-md rounded-bl-md rounded-br-md bg-purple-700 hover:rounded-md hover:transform hover:ease-linear hover:duration-300 hover:skew-x-6'>
                                Upgrade to Pro
                            </button>
                            <button className='flex items-center space-x-1 text-md tracking-wider text-white font-medium px-8 py-3 bg-blue-500 rounded-tl-md rounded-bl-md rounded-br-md hover:rounded-md hover:transform hover:ease-linear hover:duration-300 hover:-skew-x-6'>
                                Free Download
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* product description */}
            <div className='top-0 -mt-10 rounded-lg bg-gray-800 mx-10 mb-16'>
                <div className='grid grid-cols-3 gap-10 py-16 px-10'>
                    <div className='col-span-2 '>
                        <p className='text-gray-300 tracking-widest text-lg'>
                        Free premium tailwind and react dashboard
                        </p>
                        <h1 className='text-white text-2xl tracking-widest leading-tight '>
                            Product Description
                        </h1>
                        <div className='py-10'>
                            <p className='text-gray-300 text-lg tracking-wider font-mono '>
                            The most complex and innovative Dashboard Made by Creative Tim. Check our latest Freebie Bootstrap 5 Dashboard with a fresh, new design inspired by Google's Material Design 2.

Designed for those who like bold elements and beautiful websites, Material Dashboard 2 is ready to help you create stunning websites and web apps.

We created many examples for pages like Sign In, Notifications, Profile, and so on. Just choose between a Basic Design, an illustration, or a cover and you are good to go!

Fully Coded Elements

Material Dashboard 2 is built with over 60 frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. All components can take variations in color, which you can easily modify using SASS files and classes.

You will save a lot of time going from prototyping to full-functional code because all elements are implemented.
This Freebie Bootstrap 5 Dashboard is coming with prebuilt design blocks, so the development process is seamless,
switching from our pages to the real website is very easy to be done.

View all components here.

Documentation built by Developers

Each element is well presented in very complex documentation.

You can read more about the documentation here.

Example Pages

If you want to get inspiration or just show something directly to your clients, you can jump-start your development with our pre-built example pages. You will be able to quickly set up the basic structure for your web project.

View example pages here.

HELPFUL LINKS

View Github Repository
Check Knowledge Center
Other versions

Bootstrap 4 - Material Kit BS4

Special thanks

During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:

Bootstrap 5 - Open source front end framework

Popper.js - Kickass library used to manage poppers
                            </p>
                        </div>

                    </div>
                    <div className='col-span-1'>
                        <div className='bg-gray-700 rounded-lg p-4 '>
                            <h1 className='text-white text-xl '>
                                Crafted By:
                            </h1>
                            <div className='flex py-4 justify-start gap-5'>
                                <div className='relative tooltipCont'>
                                    <span className='flex border bg-white p-3 rounded-full text-blue-800 text-2xl'><SiHtml5 /></span>
                                
                                <div className='tooltip absolute my-1 z-10'>
                                    <span className='flex justify-center items-center py-2 px-4 bg-indigo-700 rounded-md text-white'>
                                        HTML
                                    </span>
                                </div>
                                </div>
                                <div>
                                <div className='relative tooltipCont'>
                                    <span className='flex border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiTailwindcss /></span>
                                
                                <div className='tooltip absolute my-1 z-10'>
                                    <span className='flex justify-center items-center py-2 px-4 bg-indigo-700 rounded-md text-white'>
                                        TailwindCSS
                                    </span>
                                </div>
                                </div>
                                </div>                                
                                <div>
                                
                                <div className='relative tooltipCont'>
                                <span className='flex border p-3 rounded-full bg-white text-blue-800 text-2xl '><SiReact /></span>                                
                                <div className='tooltip absolute my-1 z-10'>
                                    <span className='flex justify-center items-center py-2 px-4 bg-indigo-700 rounded-md text-white'>
                                        React
                                    </span>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-700 rounded-lg py-4 px-10 my-10'>
                            <div className='flex flex-wrap justify-between gap-8 py-4'>
                                <button className='w-full flex justify-center items-center gap-3 text-white text-md tracking-wider py-2 px-6 bg-indigo-700 border-indigo-700 rounded-md hover:bg-transparent border hover:border-white'>
                                    Buy Now <span><FaShoppingCart/></span>
                                </button>
                                <button className='w-full flex justify-center items-center gap-3 text-white text-md tracking-wider py-2 px-6 border rounded-md hover:bg-indigo-700 hover:border-indigo-700'>
                                    Docs v1.0.0 <span><FaScroll /></span>
                                </button>
                            </div>
                        </div>
                        <div className='bg-gray-700 rounded-lg py-4 px-10 my-10'>
                            <div className='py-4'>
                                <h1 className='flex justify-center items-center gap-3 text-white text-lg font-semibold tracking-wider'>                                    
                                <span><FaShoppingCart/></span> 170 Purchases
                                </h1>
                                <span className='w-full flex justify-start items-center gap-3 text-blue-300 text-md tracking-wider py-6 border-b'> <span> <FaTags /></span>
                                    Price: $69                                    
                                </span>
                                <span className='w-full flex justify-start items-center gap-3 text-blue-300 text-md tracking-wider py-6 border-b'> <span> <FaHourglassEnd /></span>
                                    Released: 1 year ago                                    
                                </span>
                                <span className='w-full flex justify-start items-center gap-3 text-blue-300 text-md tracking-wider py-6 border-b'> <span> <FaSyncAlt /></span>
                                    Updated: 7 months ago                                    
                                </span>
                                <span className='w-full flex justify-start items-center gap-3 text-blue-300 text-md tracking-wider py-6 border-b'> <span> <FaHistory /></span>
                                    Version: v1.0.0                                   
                                </span>
                                <span className='w-full flex justify-start items-center gap-3 text-blue-300 text-md tracking-wider py-6 border-b'> <span> <FaTools /></span>
                                    Category: Admin Dashboards                                    
                                </span>
                                <span className='w-full flex justify-start items-center gap-3 text-blue-300 text-md tracking-wider py-6 border-b'> <span> <FaScroll /></span>
                                    Well Documented                                    
                                </span>
                                
                            </div>
                        </div>
                        <div className='bg-gray-700 rounded-lg py-4 px-10  inline-block text-white text-sm space-y-2'>
                            <div onClick={handleAccordion} className='border-b border-blue-500 cursor-pointer select-none'>
                                <span className='flex gap-1 justify-between items-center py-2'>  6 months premium support included<span className={`${toggle ? 'hidden' : ''}`}> <FcExpand /></span> <span className={`${toggle ? '' : 'hidden'}`}><FcCollapse /></span></span>
                                <div className={`${toggle ? '' : 'hidden'} py-2`}>
                                    <p className='text-xs text-blue-300'>
                                        There is an included 6 months of premium support included in our premium version, 24/7 support from our customer service
                                    </p>
                                </div>
                            </div>
                                <span  className='flex gap-1 justify-between items-center py-2 border-b border-blue-500'>   100% W3C valid HTML5 files<span> <FcExpand /></span></span>
                                <span  className='flex gap-1 justify-between items-center py-2 border-b border-blue-500'>   Future updates<span> <FcExpand /></span></span>
                                <span  className='flex gap-1 justify-between items-center py-2 border-b border-blue-500'>   Fully responsive pages<span> <FcExpand /></span></span>
                                <span className='flex gap-1 justify-between items-center py-2 border-b border-blue-500'>  30 day refund policy<span> <FcExpand /></span></span>
                                <span className='flex gap-1 justify-between items-center py-2'>  Built by Themesberg<span> <FcExpand /></span></span>
                        </div>
                </div>
                </div>
                
            </div>
            {/* Related themes */}
            <div className='bg-gray-800 w-full p-10 my-10'>
                <h1 className='text-white text-2xl tracking-wider'>
                    Related Templates
                </h1>
                <div className='grid grid-cols-4 gap-10 p-8'>

                <div className='relative border border-gray-400 rounded-md overflow-hidden '>
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

                <div className='flex justify-center items-center p-10'>
                    <button className='flex justify-center items-center gap-5 py-3 px-10 rounded-3xl text-blue-500 border border-blue-500  text-xl font-mono tracking-wider '>
                        View All Products <span className='hover:animate-bounce'><FcAdvance /></span>
                    </button>
                </div>

            </div>
        </main>
    )
}