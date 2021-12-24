
//Local imports
import { Alerts } from "../pages/componentList/singleSnippets/Alerts/Alerts";



const Sidebar = ()  => {
    return(
            <div className="max-w-2xs h-full overflow-y-auto scrolling-touch lg:h-screen lg:block lg:sticky overflow-hidden top:24 lg:top-12 bg-myBg dark:bg-gray-900 mr-24 lg:mr-0 ">
                <nav className="px-1 pt-16 pl-3 lg:pl-0 lg:pt-2 overflow-y-auto font-medium text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)" aria-label="Docs navigation"><ul className="list-unstyled mb-0">
                        <li className="mt-8">
                        <h5 className="mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-white">Getting started</h5>
                        <ul className="list-unstyled fw-normal py-1 small">
                            <li>
                                <a href="/docs/getting-started/introduction/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Introduction </a>
                            </li>
                            <li>
                                <a href="/docs/getting-started/quickstart/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Quickstart </a>
                            </li>
                            <li>
                                <a href="/docs/getting-started/license/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">License </a>
                            </li>
                            <li>
                                <a href="/docs/getting-started/changelog/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Changelog </a>
                            </li>
                        </ul>
                        </li>
                        <li className="mt-8">
                        <h5 className="mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-white">Customize</h5>
                        <ul className="list-unstyled fw-normal py-1 small">
                            <li>
                                <a href="/docs/customize/configuration/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Configuration </a>
                            </li>
                            <li>
                                <a href="/docs/customize/dark-mode/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Dark mode <span className="bg-blue-100 text-blue-800 text-2xs font-semibold ml-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">NEW</span></a>
                            </li>
                            <li>
                                <a href="/docs/customize/theming/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Theming </a>
                            </li>
                            <li>
                                <a href="/docs/customize/color/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Color </a>
                            </li>
                            <li>
                                <a href="/docs/customize/icons/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Icons </a>
                            </li>
                            <li>
                                <a href="/docs/customize/optimization/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Optimization </a>
                            </li>
                        </ul>
                        </li>
                        <li className="mt-8">
                        <h5 className="mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-white">Components</h5>
                        <ul className="list-unstyled fw-normal py-1 small">
                            <li>
                                <a  href="/components/alerts" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Alerts </a>
                            </li>
                            <li>
                                <a href="/docs/components/badge/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Badge </a>
                            </li>
                            <li>
                                <a href="/docs/components/breadcrumb/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Breadcrumb </a>
                            </li>
                            <li>
                                <a href="/docs/components/buttons/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Buttons </a>
                            </li>
                            <li>
                                <a href="/docs/components/button-group/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Button group </a>
                            </li>
                            <li>
                                <a href="/docs/components/card/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Card </a>
                            </li>
                            <li>
                                <a href="/docs/components/dropdowns/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Dropdowns </a>
                            </li>
                            <li>
                                <a href="/docs/components/forms/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Forms </a>
                            </li>
                            <li>
                                <a href="/docs/components/list-group/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">List Group </a>
                            </li>
                            <li>
                                <a href="/docs/components/typography/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Typography </a>
                            </li>
                            <li>
                                <a href="/docs/components/modal/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Modal </a>
                            </li>
                            <li>
                                <a href="/docs/components/tabs/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Tabs <span className="bg-blue-100 text-blue-800 text-2xs font-semibold ml-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">NEW</span></a>
                            </li>
                            <li>
                                <a href="/docs/components/navbar/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Navbar </a>
                            </li>
                            <li>
                                <a href="/docs/components/pagination/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Pagination </a>
                            </li>
                            <li>
                                <a href="/docs/components/progress/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Progress </a>
                            </li>
                            <li>
                                <a href="/docs/components/tables/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Tables </a>
                            </li>
                            <li>
                                <a href="/docs/components/tooltips/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Tooltips </a>
                            </li>
                        </ul>
                        </li>
                        <li className="mt-8">
                        <h5 className="mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-white">Plugins</h5>
                        <ul className="list-unstyled fw-normal py-1 small">
                            <li>
                                <a href="/docs/plugins/datepicker/" className="py-2 transition-colors duration-200 relative block hover:text-blue-600 text-gray-500 dark:text-gray-400 dark:hover:text-white ">Datepicker </a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </nav>
                </div>
    )
}

export default Sidebar;