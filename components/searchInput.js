import Image from "next/image";
const Searchinput = () => {
   return (
      <div className=" min-w-80 md:min-w-full max-w-3xl mx-auto px-10 text-gray-800 relative overflow-hidden ">
         <div className="relative my-10">
            <input type="text" className="w-full my-10 pl-3 pr-10 py-2 border-2 border-gray-400 rounded-md hover:border-gray-500 focus:outline-none focus:border-yellow-400 transition-colors" placeholder="Search..." />
            <button className="block mt-10 w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-500 focus:outline-none hover:text-gray-900 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </button>
         </div>
         <div className="absolute top-0 left-0 w-full h-2">
            <div className="h-2 bg-yellow-400"></div>
         </div>
      </div>
   );
};

export default Searchinput;
