

//Local imports
import Sidebar from "../layouts/Sidebar"
import { Alerts } from "./componentList/singleSnippets/Alerts/Alerts"

export const Components = () => {

    return(
        <main>
            <div class="px-4 mx-auto w-full max-w-8xl">
                <div class="lg:flex">
                    <aside className="fixed inset-0 flex-none h-full w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden">
                        <Sidebar />
                    </aside>
                        <Alerts />

                </div>
            </div> 
        </main>
    )
}