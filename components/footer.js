import Link from "next/link";
export default function Footer() {
   return (
      <footer className="footer bg-gray-800 font-nunito relative mt-5 pt-1 border-b-2 text-yellow-500">
         <div className="container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
               <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                  <div className="flex flex-col">
                     <span className="font-bold text-gray-100 uppercase mb-2">Categories</span>
                     <span className="my-2">
                        <Link href="/categories/drills">
                           <a className="text-yellow-500  text-md hover:text-yellow-400">Drills</a>
                        </Link>
                     </span>
                     <span className="my-2">
                        <Link href="/categories/saws">
                           <a className="text-yellow-500 text-md hover:text-yellow-400">Saws</a>
                        </Link>
                     </span>
                     <span className="my-2">
                        <Link href="/categories/ladders">
                           <a className="text-yellow-500 text-md hover:text-yellow-400">Ladders</a>
                        </Link>
                     </span>
                  </div>
                  <div className="flex flex-col">
                     <span className="font-bold text-gray-100 uppercase mt-4 md:mt-0 mb-2">Other categories</span>
                     <span className="my-2">
                        <Link href="/categories/electrics">
                           <a className="text-yellow-500 text-md hover:text-yellow-400">Electrics</a>
                        </Link>
                     </span>
                     <span className="my-2">
                        <Link href="/categories/Hammers">
                           <a className="text-yellow-500  text-md hover:text-yellow-400">Hammers</a>
                        </Link>
                     </span>
                     <span className="my-2">
                        <Link href="/categories/other">
                           <a className="text-yellow-500 text-md hover:text-yellow-400">Other</a>
                        </Link>
                     </span>
                  </div>
                  <div className="flex flex-col">
                     <span className="font-bold text-gray-100 uppercase mt-4 md:mt-0 mb-2">Company</span>
                     <span className="my-2">
                        <Link href="/contact">
                           <a className="text-yellow-500  text-md hover:text-yellow-400">Contact us</a>
                        </Link>
                     </span>
                     <span className="my-2">
                        <Link href="/About">
                           <a className="text-yellow-500  text-md hover:text-yellow-400">About us</a>
                        </Link>
                     </span>
                     <span className="my-2">
                        <Link href="/donation">
                           <a className="text-yellow-500  text-md hover:text-yellow-400">Donation</a>
                        </Link>
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mx-auto px-6">
            <div className="mt-16 border-t-1 border-gray-200 flex flex-col items-center">
               <div className="sm:w-2/3 text-center py-6">
                  <p className="text-sm text-white font-bold mb-2">
                     <Link href="https://adnane-louardi.vercel.com">
                        <a>
                           © 2021 by <span className="text-yellow-500  text-md hover:text-yellow-400">Adnane LOUARDI</span>
                        </a>
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
}
