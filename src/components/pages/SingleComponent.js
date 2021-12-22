

//Local imports
import Sidebar from "../layouts/Sidebar"
import { Alerts } from "./componentList/singleSnippets/Alerts/Alerts"

export const SingleComponent = () => {

    return(
        <main>
            <div class="px-4 mx-auto w-full max-w-8xl">
                <div class="lg:flex">

                    <Sidebar />                
                    <Alerts />

                </div>
            </div>
            
        </main>
    )
}