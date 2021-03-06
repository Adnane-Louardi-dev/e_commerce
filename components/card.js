// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Commerce from "@chec/commerce.js";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Card = ({ name, price, media, id, permalink }) => {
   const [added, setAdded] = useState(false);
   const addToCart = () => {
      const commerce = new Commerce("pk_test_311488271be695cf3e21135b90bc2ae443ea66b83d5aa");
      commerce.cart.add(id, 1).then(() => {
         let beggin = setInterval(() => {
            setAdded(true);
            setTimeout(() => {
               setAdded(false);
               clearInterval(beggin);
            }, 5000);
         }, 0);
      });
   };
   return (
      <>
         {added && (
            <div className="fixed z-10  ml-3 mb-3 rounded-lg bottom-0 left-0 bg-yellow-400 p-4 font-rubik" role="alert">
               <p>Added to your cart!!</p>
               <p>
                  Check
                  <Link href="/cart">
                     <b className="capitalize cursor-pointer"> the cart </b>
                  </Link>
                  to complete your order.
               </p>
            </div>
         )}
         <div className="mx-auto my-5 xs:flex max-w-xl rounded-xl shadow-md bg-blue-50 p-3 xs:px-3">
            <Link href={`/products/${permalink}`} className="cursor-pointer">
               <a>
                  <div className="self-center relative h-36 md:h-40 w-full xs:w-48 flex-shrink-0 rounded-xl overflow-hidden bg-gray-400">
                     {/* <Carousel emulateTouch={true} showArrows={false} showThumbs={false} transitionTime={750} centerMode={true} centerSlidePercentage={100}> */}
                     <Image src={media.source} layout="fill" objectFit="cover" alt={name} />
                     {/* </Carousel> */}
                  </div>
               </a>
            </Link>

            <div className="self-center flex flex-col mx-auto mt-2 xs:mt-0 xs:ml-3 px-3 xs:px-0 justify-between w-full h-36 md:h-40 rounded-xl font-rubik">
               <div className="flex justify-between h-10 w-full">
                  <Link href={`/products/${permalink}`} className="cursor-pointer">
                     <a>
                        <div className="flex-col">
                           <h1 className="mt-0.5 w-48 text-2xl whitespace-nowrap truncate">{name}</h1>
                           <div className="text-blue-700">
                              <h1 className="my-1.5 text-xl">{price.formatted_with_code}</h1>
                           </div>
                           {/* <div className="text-sm text-gray-400 h-10 mt-1 w-full overflow-hidden">{description}</div> */}
                        </div>
                     </a>
                  </Link>

                  <div className="mx-1.5">
                     <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-red-500 hover:fill-current" fill="none" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                     </button>
                  </div>
               </div>
               <div className="flex justify-end w-full relative">
                  <button onClick={addToCart} className="absolute -mt-10 mx-0.5 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 focus:ring-2 focus:ring-red-500 w-10 h-10 rounded-md">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
