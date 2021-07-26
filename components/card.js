const Card = () => {
   return (
      <div className="p-4 my-40 w-64 mx-auto rounded-xl shadow-xl bg-gray-200">
         <div className="mx-auto h-32 rounded-xl bg-gray-400"></div>
         <div className="mx-auto mt-4 rounded-xl  font-mono">
            <div className="flex justify-between">
               <div className="mx-1.5">
                  <h1 className="mt-0.5 text-xl">Product</h1>
               </div>

               <div className="ml-1 mr-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-red-500" fill="none" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
               </div>
            </div>
            <div className="mt-12 flex justify-between h-10 bg-yellow-500 rounded-xl overflow-hidden">
               <div className=" text-center w-4/5">
                  <h1 className="my-1.5 text-xl">99.99$</h1>
               </div>
               <div className="bg-yellow-400 w-1/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto my-1.5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
