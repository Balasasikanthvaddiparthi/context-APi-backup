
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function SideBar() {

    const {role}=useContext(MyContext)
    return (
        <div>
            <div className=" sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex items-center py-4">

                    <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar-dark" aria-controls="application-sidebar-dark" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle Navigation</span>
                        <svg className="size-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>

                    <ol className="ms-3 flex items-center whitespace-nowrap">
                        <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                            Application Layout
                            <svg className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </li>
                        <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                            Dashboard
                        </li>
                    </ol>

                </div>
            </div>

            <div id="application-sidebar-dark" className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7  pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="px-6">
                    <a className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#" aria-label="Brand">Brand</a>
                </div>

                <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul className="space-y-1.5">
                        <li>
                            <Link to="/" className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600">

                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600">

                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                Profile
                            </Link>
                        </li>
                        
                        {   role==="Superadmin" &&(
                            <li>
                            <Link to="/weather" className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600">

                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                Weather
                            </Link>
                        </li>
                        )}
                    </ul>
                </nav>

            </div></div>
    )
}


