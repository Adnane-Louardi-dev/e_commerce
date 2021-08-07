import Image from "next/image";
import Link from "next/link";
export default function Product({ name, price, media, description, inventory }) {
   return (
      <>
         <div className="h-screen relative">
            {/*---- top navbar ----*/}
            <div className="flex justify-between m-5 px-5 py-4 h-16 rounded-2xl bg-gray-200 shadow-lg">
               <Link href="/">
                  <a>
                     <div className="ml-1 mr-1.5 px-0.5 pt-0.5  h-9 w-9 rounded-md hover:ring-2 hover:ring-yellow-500 focus:ring-2 focus:ring-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1 mt-1 text-center" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                     </div>
                  </a>
               </Link>

               <div className="ml-1 mr-1.5">
                  <a>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-red-500 hover:fill-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                     </svg>
                  </a>
               </div>
            </div>
            {/*---- ----*/}
            {/*---- product section ----*/}
            <div className=" m-5  md:flex justify-between">
               <div className="relative rounded-lg shadow-lg overflow-hidden bg-blue-300 w-full md:w-1/2 lg:w-2/5 h-80 my-10">
                  <Image src={media.source} layout="fill" objectFit="cover" alt={name} />
               </div>
               <div className="px-2 md:w-1/2 lg:w-3/5 lg:ml-14">
                  <div className="flex justify-between my-10 md:mt-14 ">
                     <div className="font-nunito">
                        <h1 className="text-3xl ">{name}</h1>
                     </div>
                     <div className="flex rounded-md shadow-md bg-blue-200 px-2 h-10">
                        <div className="mt-1 text-lg mr-1 whitespace-nowrap">{`${inventory.available} available`}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" version="1.1" width="16" height="16" className="mt-2.5" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve">
                           <g>
                              <path xmlns="http://www.w3.org/2000/svg" d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="#a7f3d0" />
                              <path xmlns="http://www.w3.org/2000/svg" d="m384 256c0 70.691406-57.308594 128-128 128s-128-57.308594-128-128 57.308594-128 128-128 128 57.308594 128 128zm0 0" fill="#34d399" />
                           </g>
                        </svg>
                     </div>
                  </div>

                  <div className="text-gray-500 font-openSans">
                     <p className="leading-7">{description.replace(/(<([^>]+)>)/gi, "")}</p>
                  </div>
               </div>
            </div>
            {/*----  ----*/}
            {/*---- subbar ----*/}
            <div className="fixed bottom-0 left-0 right-0 m-5 px-5 py-4 h-16 rounded-2xl bg-gray-200 shadow-lg font-nunito">
               <div className="flex justify-between">
                  <button type="submit" className="inline-flex h-10 w-24 text-white bg-gray-500 hover:bg-gray-400 px-3 py-2 rounded-md">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-0.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span>Share</span>
                  </button>
                  <div className="inline-flex">
                     <div className="px-3 py-1 text-blue-700">
                        <h1 className="text-md sm:text-xl mt-0.5 whitespace-nowrap">{price.formatted_with_code}</h1>
                     </div>
                     <button type="submit" className="inline-flex text-white h-10 w-32 bg-yellow-500 hover:bg-yellow-400 hover:text-gray-100 px-3 py-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-0.5 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-md sm:text-xl whitespace-nowrap">Add to cart</span>
                     </button>
                  </div>
               </div>
            </div>
            {/*---- ----*/}
         </div>
      </>
   );
}
