//External Imports
import React from 'react'

//Local Imports
import  AlertSvg  from '../../../assets/download.svg'
import ShareIcon from '../../../assets/iconmonstr-share-8.svg'



const Snippets = ()  => {
    return(
        <main className=' p-20'>
            
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4'>
                
                {/* Single snippet card */}
                <a href="/components/alerts">
                <div className=' col border border-gray-700 bg-transparent rounded-t-lg hover:shadow-2xl '>
                    <div className=' flex justify-between items-center p-2 border-b border-gray-700 rounded-t-lg bg-gray-700 '>
                        <span className=' font-medium text-xl text-gray-400 '>
                            Alerts
                        </span>
                        <img className=' ' src={ ShareIcon } alt="" ></img>
                    </div>
                    <div className=' flex justify-center h-52 p-5 '>
                        <img className=' ' src={ AlertSvg } alt="" ></img>
                    </div>
                </div>
                </a>


            </div>
        </main>
    )
}

export default Snippets;
