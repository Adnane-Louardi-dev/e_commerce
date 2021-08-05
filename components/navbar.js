import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
   const [statue, setStatue] = useState("hidden");
   const toggle = () => {
      if (statue === "hidden") {
         setStatue("block");
      } else {
         setStatue("hidden");
      }
   };

   return (
      <>
         <nav className="bg-gray-800 font-nunito">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
               <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                     <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500" onClick={toggle}>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                     </button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                     <div className="flex-shrink-0 flex items-center">
                        <h1 className="block lg:hidden h-8 w-auto text-xl text-white">Edona</h1>
                     </div>
                     <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                           <Link href="/">
                              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                                 Home
                              </a>
                           </Link>

                           <Link href="/categories">
                              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categories</a>
                           </Link>
                           <Link href="/contact">
                              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us</a>
                           </Link>

                           <Link href="/about">
                              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About us</a>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                     <button className="bg-gray-800 p-1 rounded-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current hover:text-red-500 hover:fill-current" fill="none" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                     </button>
                     <button className="bg-gray-800 p-1 ml-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"
                           />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>

            <div className={`${statue}`}>
               <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link href="/">
                     <a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                        Home
                     </a>
                  </Link>

                  <Link href="/categories">
                     <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Categories</a>
                  </Link>
                  <Link href="/contact">
                     <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
                  </Link>

                  <Link href="/about">
                     <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About us</a>
                  </Link>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
