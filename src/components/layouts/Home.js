//External imports
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SiTailwindcss } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiReact } from "react-icons/si"
import { FaCogs } from "react-icons/fa";


//Local imports
import Video from '../../assets/inspect-demo.mp4'
import Berack from '../../assets/favicon.jpg'
import Tailwind from '../../assets/Tailwind.png'




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
                <div className='grid grid-cols-3 gap-6'>
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

                    <div className='block col mt-10'>
                        <button className=' rounded-md p-3 bg-purple-700 '>
                            <span className='text-white text-xl'>
                            <FaCogs />
                            </span>
                        </button>
                        <div>
                            <h2 className='font-medium text-white '>
                            .02 Full Documentation
                            </h2>
                            <p className='text-gray-500 text-sm'>Built by developers for developers. Check the foundation and you will find everything inside our documentation.
                            </p>
                        </div>
                    </div>

                    <div className='block col mt-20'>
                        <button className=' rounded-md p-3 bg-purple-700 '>
                            <span className='text-white text-xl'>
                            <FaCogs />
                            </span>
                        </button>
                        <div>
                            <h2 className='font-medium text-white '>
                            .03 Save Time & Money
                            </h2>
                            <p className='text-gray-500 text-sm'>Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System
                            </p>
                        </div>
                    </div>

                    <div className='block col '>
                        <button className=' rounded-md p-3 bg-purple-700 '>
                            <span className='text-white text-xl'>
                            <FaCogs />
                            </span>
                        </button>
                        <div>
                            <h2 className='font-medium text-white '>
                            .04 Tailwind Ready
                            </h2>
                            <p className='text-gray-500 text-sm '>The world’s most popular front-end open source toolkit, featuring Sass variables and mixins.
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
                            <h2 className='font-medium text-white leading-tight'>
                            .05 <span className='text-purple-500'> Fully </span> 
                            Responsive
                            </h2>
                            <p className='text-gray-500 text-sm'>Regardless of the screen size, the website content will naturally fit the given resolution.
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
                            .06 Fully Responsive
                            </h2>
                            <p className='text-gray-500 text-sm'>Regardless of the screen size, the website content will naturally fit the given resolution.
                            </p>
                        </div>
                    </div>                    
                </div>
                </div>
                <div className='col px-4'>
                <div className='bg-gradient-to-b from-purple-700 to-blue-500 rounded-lg py-10 px-4 '>
                    <div className='flex justify-center items-center space-x-2 pt-10'>
                        <span className='border py-3 px-3 rounded-full text-white text-2xl '><SiHtml5 /></span>
                        <span className='border py-3 px-3 rounded-full text-white text-2xl '><SiTailwindcss /></span>
                        <span className='border py-3 px-3 rounded-full text-white text-2xl '><SiReact /></span>
                    </div>
                    <div className='pt-10'>
                    <h1 className='text-white text-center text-2xl font-bold font-mono leading-tight'>
                    Discover More
                    </h1>
                    <p className='py-4 text-white text-sm tracking-wider  text-center '>
                    You will save a lot of time going from prototyping to full-functional code because all elements are implemented.
                    </p>
                    </div>
                    <div className='flex justify-center py-4'>
                    <button className='border text-white font-bold py-2 px-3 rounded-md animate-bounce'>
                            Explore Components
                    </button>
                    </div>
                    
                </div>
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
                        <div>
                            <img src={ Tailwind } alt="" />
                        </div>
                        <div>
                            <img src={ Tailwind } alt="" />
                        </div>
                        <div>
                            <img src={ Tailwind } alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-8 mt-10'>
                <button className='bg-gradient-to-r from-purple-500 to-purple-700 px-6 py-2 text-white font-medium tracking-wider hover:transform hover:scale-110 hover:duration-300 hover:ease-in-out rounded-3xl'>
                    View All Products
                </button>
            </div>
            </div>

            <div className='grid grid-cols-3 gap-4 m-10 p-8'>  
            <div className='col-span-2 bg-gray-800 shadow-2xl p-4 rounded-md'>
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
                {/* Comment Section */}
            <div className='mx-20'>
                    <div className='grid grid-cols-2 gap-5'>
                <div>
                <div className='text-white rounded-md bg-purple-900 p-2'>
                    <div className='flex items-center space-x-2'>
                        <img className="h-5 rounded-full " src={ Berack } alt="" />
                        <span className='font-bold text-md'>Berack Kaunda</span>
                    </div>
                    <div className='p-2'>
                        <p className='text-sm font-extralight tracking-wider'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores ea accusantium temporibus quas inventore quia incidunt perferendis similique perspiciatis? Ipsum ipsam aliquam harum odit vero magni corporis ut debitis.
                        </p>
                    </div>
                </div>
                </div>

                <div>
                <div className=' text-white rounded-md bg-purple-900 p-2'>
                    <div className='flex items-center space-x-2'>
                        <img className="h-5 rounded-full " src={ Berack } alt="" />
                        <span className='font-bold text-md'>Berack Kaunda</span>
                    </div>
                    <div className='p-2'>
                        <p className='text-sm font-extralight tracking-wider'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores ea accusantium temporibus quas inventore quia incidunt perferendis similique perspiciatis? Ipsum ipsam aliquam harum odit vero magni corporis ut debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores ea accusantium temporibus quas inventore quia incidunt perferendis similique perspiciatis? Ipsum ipsam aliquam harum odit vero magni corporis ut debitis.
                        </p>
                    </div>
                </div>
                </div>
                
                <div>
                <div className=' text-white rounded-md bg-purple-900 p-2'>
                    <div className='flex items-center space-x-2'>
                        <img className="h-5 rounded-full " src={ Berack } alt="" />
                        <span className='font-bold text-md'>Berack Kaunda</span>
                    </div>
                    <div className='p-2'>
                        <p className='text-sm font-extralight tracking-wider'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores ea accusantium temporibus quas inventore quia incidunt perferendis similique perspiciatis? Ipsum ipsam aliquam harum odit vero magni corporis ut debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores ea accusantium temporibus quas inventore quia incidunt perferendis similique perspiciatis? Ipsum ipsam aliquam harum odit vero magni corporis ut debitis.
                        </p>
                    </div>
                </div>
                </div>

                <div>
                <div className='text-white rounded-md bg-purple-900 p-2'>
                    <div className='flex items-center space-x-2'>
                        <img className="h-5 rounded-full " src={ Berack } alt="" />
                        <span className='font-bold text-md'>Berack Kaunda</span>
                    </div>
                    <div className='p-2'>
                        <p className='text-sm font-extralight tracking-wider'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores ea accusantium temporibus quas inventore quia incidunt perferendis similique perspiciatis? Ipsum ipsam aliquam harum odit vero magni corporis ut debitis.
                        </p>
                    </div>
                </div>
                </div>

                    </div>
            </div>

                {/* banner */}
            <div>
                <div className='grid grid-cols-2 gap-8 bg-gray-800 rounded-lg my-20 mx-10 p-10 shadow-2xl'>
                    <div className='text-white'>
                        <h1 className='font-bold font-mono text-4xl tracking-wider'>
                            Join the Community
                        </h1>
                        <p className='tracking-wide leading-wide'>
                        Mantine has a very friendly community, we are always open to new ideas and feedback. Join us on Discord or Github Discussions to get any kind of help or on Twitter to get notified about releases.

                        </p>
                    <div className='flex items-center space-x-4 py-4'>
                        <button className='rounded-md px-6 py-3 bg-purple-700 font-medium tracking-wide '>
                            <a href="/">Github Discussion</a>
                        </button>
                        <button className='shadow-2xl rounded-md px-6 py-3 bg-blue-800 font-medium tracking-wide '>
                            <a href="/">Discord Discussion</a>
                        </button>
                    </div>
                    </div>

                    <div>
                    <div className='text-white border-l-4 px-2'>
                        <h1 className='font-bold text-4xl tracking-wider leading-tight font'>
                            Sign up for our newsletter
                        </h1>
                        <p className='tracking-wide leading-wide'>
                        Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.

                        </p>
                    <div className='flex items-center space-x-4 py-4'>
                        <input className='text-gray-800 px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 ' type="email" placeholder='Enter Your Email' />
                        <button className=' rounded-md px-6 py-3 bg-blue-800 font-medium tracking-wide '>
                            <a href="/">Subcribe</a>
                        </button>
                    </div>
                    <div>
                        <p className='text-xs font-bold tracking-wider '>
                        Product updates, announcements, and discounts. No spam.
                        </p>
                    </div>
                    </div>
                    </div>

            </div>
            </div>            
        </main>
    )
}

export default Home