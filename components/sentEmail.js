const SentEmail = () => {
   return (
      <div className="mx-auto w-64 bg-yellow-500 rounded-lg p-3">
         <div>
            <div className="text-center">
               <input type="email" placeHolder="type your email..." name="email" className="w-56 h-8 px-2 rounded-lg bg-yellow-100" />
            </div>
            <div className="mt-4 text-center">
               <textarea name="mssg" placeHolder="type your message..." rows="5" className="resize-none w-56 p-2 bg-yellow-100 rounded-lg"></textarea>
            </div>
         </div>
         <div className="flex justify-end mt-3 mx-1">
            <div className=" rounded-full h-10 w-10 bg-yellow-100">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-2 my-1.5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
               </svg>
            </div>
         </div>
      </div>
   );
};

export default SentEmail;
