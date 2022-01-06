import Tailwind from '../../../../assets/Tailwind.png'


export const SingleTemplate = () => {
    return(
        <main>
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-20 px-10 grid grid-cols-2 gap-10">
                <div className='col px-16'>
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

                <div className='col'>
                    <div>
                        <h1 className='text-white text-4xl font-mono tracking-wider text-center'>
                            React Dashboard Pro 2
                        </h1>
                    </div>

                </div>
            </div>
        </main>
    )
}