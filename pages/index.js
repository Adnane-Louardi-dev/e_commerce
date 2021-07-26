import SentEmail from "../components/sentEmail";
import Card from "../components/card";
import Head from "next/head";
export default function Home() {
   return (
      <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
         </Head>
         {/*---- top navbar ----*/}
         <div className="flex justify-between m-5 px-5 py-4 h-16 rounded-2xl bg-gray-200 shadow-lg">
            <div className="ml-1 mr-1.5 my-1.5 ">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
               </svg>
            </div>

            <div className="ml-1 mr-1.5">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-current text-red-500" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
               </svg>
            </div>
         </div>
         {/*---- ----*/}
         {/*---- product section ----*/}
         <div className=" m-5  md:flex justify-between">
            <div className="rounded-lg bg-blue-300 w-full md:w-1/2 lg:w-2/5 h-80 my-10"></div>
            <div className="px-2 md:w-1/2 lg:w-3/5 lg:ml-14">
               <div className="flex justify-between my-10 md:mt-14 ">
                  <div className="font-nunito">
                     <h1 className="text-3xl ">Product</h1>
                  </div>
                  <div className="inline-flex rounded-md bg-yellow-300">
                     <div className="mt-1 text-lg ml-2">1.5/5</div>

                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-1.5 " viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                  </div>
               </div>

               <div className="text-gray-500 font-openSans">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non autem sapiente voluptatibus, repellendus repudiandae officiis? Temporibus quis qui accusamus id.</p>
               </div>
            </div>
         </div>
         {/*----  ----*/}
         {/*---- subbar ----*/}
         <div className="absolute left-0 right-0 buttom-0 m-5 px-5 py-4 h-16 rounded-2xl bg-gray-200 shadow-lg font-nunito">
            <div className="flex justify-between">
               <button type="submit" className="inline-flex h-10 w-24 bg-gray-500 hover:bg-gray-400 px-3 py-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-0.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Share</span>
               </button>
               <div className="inline-flex">
                  <div className="px-3 py-1">
                     <h1 className="text-xl mt-0.5">4.69$</h1>
                  </div>
                  <button type="submit" className="inline-flex h-10 w-32 bg-yellow-500 hover:bg-yellow-400 px-3 py-2 rounded-md">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-0.5 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                     </svg>
                     <span>Add to cart</span>
                  </button>
               </div>
            </div>
         </div>
         {/*---- ----*/}
      </>
   );
}
