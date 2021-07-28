import Image from "next/image";
const DiscountOffer = () => {
   return (
      <div className=" relative mt-10 overflow-hidden m-5 md:mx-auto md:w-1/2 shadow-xl rounded-lg ">
         <div className=" absolute h-full w-full ">
            <Image src="/img/tools.jpg" layout="fill" alt={"construction tools"} className=" blur-sm " />
         </div>

         <div className="relative mx-10 md:my-6 lg:my-16 font-nunito ">
            <div className="text-3xl font-semibold tracking-widest leading-loose  text-white z-10">Order Your machine and get Discount up to 25%</div>
            <button type="submit" className="px-4 py-3 text-white  hover:ring-3 hover:ring-yellow-500 hover:bg-transparent my-3 rounded-lg bg-yellow-500">
               Get it Now
            </button>
         </div>
      </div>
   );
};
export default DiscountOffer;
