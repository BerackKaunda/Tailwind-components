//External imports
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';



//Local Imports

import GithubIcon from '../../../../../assets/GithubIcon.svg'
import copyIcon from '../../../../../assets/copyIcon.svg'

export const DefaultAlerts = () => {

    const alertCodes = `
    //Info alert code
<div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
    <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.</div>

    //Success alert code
<div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.</div>

    //Wanning alert code
<div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
    <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.</div>

    //Dark alert code
<div class="p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
    <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.</div>
    
    //Danger alert code
<div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
    <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.</div>`;
        
    
    
    
    return(
        <main className=' border-b border-t mt-8 mb-8'>

            <div className=' mt-8 '>
                <h2 className=' font-bold text-white text-lg ' id="default-alerts">Default alerts</h2>
                <p className=' text-gray-500 text-base '>Use the following examples of alert components to show messages as feedback to your users.</p>
            </div>

            <div class="mt-8 code-example">
            <div class="w-full mb-3 dark:bg-gray-900">
            <div class="flex items-center justify-between">

                <a href="https://github.com/themesberg/flowbite/blob/main/content/components/alerts.md" target="_blank" rel="noopener nofollow noreferrer" class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

        
                <img className=' h-4 px-1' src={ GithubIcon } alt="" />
                Edit on GitHub
                </a>

                <button type="button" data-copy-state="copy" class="flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg copy-to-clipboard-button hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

                <img className='h-4 px-1' src={ copyIcon } alt="" />


                <span class="copy-text">Copy</span>
                </button>
            </div>
            </div>

            {/* code preview  */}
            <div class="code-preview rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 ">
                <div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
                </div>
                <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
                </div>
                <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
                </div>
                <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
                </div>
                <div class="p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
                <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
                </div>
            </div>
            {/* code preview  */}


            {/* code highlighting  */}

            <SyntaxHighlighter
                className='text-sm h-auto mt-8'
                language="jsx"
                customStyle={{
                    borderRadius: "12px 12px"
                }}  
                style={atomDark}>
                
            {alertCodes}

            </SyntaxHighlighter>

            
            {/* code highlighting  */}
            </div>
        </main>
    )
}