import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Card = () => {
   return (
      <div className="m-5 xs:flex max-w-xl rounded-xl shadow-md bg-gray-200 p-3 xs:px-3">
         <div className="self-center h-36 md:h-40 w-full xs:w-48 flex-shrink-0 rounded-xl overflow-hidden bg-gray-400">
            <Carousel emulateTouch={true} showArrows={false} showThumbs={false} transitionTime={750} centerMode={true} centerSlidePercentage={100}>
               <div className="h-36 md:h-40 w-full xs:w-48 bg-blue-300"></div>
               <div className="h-36 md:h-40 w-full xs:w-48 bg-red-300"></div>
               <div className="h-36 md:h-40 w-full xs:w-48 bg-green-300"></div>
               <div className="h-36 md:h-40 w-full xs:w-48 bg-yellow-300"></div>
            </Carousel>
         </div>
         <div className="self-center flex flex-col mx-auto mt-2 xs:mt-0 xs:ml-3 px-3 xs:px-0 justify-between w-full h-36 md:h-40 rounded-xl font-rubik">
            <div className="flex justify-between h-10 w-full">
               <div>
                  <h1 className="mt-0.5 text-2xl">Product</h1>
                  <div className="text-sm text-gray-400 h-10 mt-1 w-full overflow-hidden">
                     <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur</span>
                  </div>
               </div>

               <div className="mx-1.5">
                  <button>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-red-500 hover:fill-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                     </svg>
                  </button>
               </div>
            </div>
            <button className="flex justify-between h-10 w-full bg-yellow-500 rounded-md overflow-hidden">
               <div className=" text-center w-4/5">
                  <h1 className="my-1.5 text-xl">99.99$</h1>
               </div>
               <div className="bg-yellow-400 w-1/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto my-1.5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
               </div>
            </button>
         </div>
      </div>
   );
};

export default Card;
