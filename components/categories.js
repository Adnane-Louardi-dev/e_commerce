import Image from "next/image";
import Link from "next/link";
const Categories = () => {
   return (
      <div className="my-3 px-3 overflow-hidden font-rubik">
         <h1 className="text-2xl">Categories</h1>

         <div className={`noScrollbar my-5 flex overflow-x-scroll`}>
            <Link href="/" passHref={true}>
               <button type="submit" className="rounded-lg flex-none h-28 w-28 px-6 shadow-md bg-yellow-400 m-3 hover:bg-transparent hover:ring-2 hover:ring-yellow-400 focus:bg-blue-50 focus:ring-2 focus:ring-yellow-400">
                  <Image src={"/icons/layers.svg"} height={38} width={38} alt="layers" />
                  <h4>All</h4>
               </button>
            </Link>
            <Link href="/categories/drills" passHref={true}>
               <button type="submit" className="rounded-lg flex-none h-28 w-28 px-6 shadow-md bg-yellow-400 m-3 hover:bg-transparent hover:ring-2 hover:ring-yellow-400 focus:bg-blue-50 focus:ring-2 focus:ring-yellow-400">
                  <Image src={"/icons/drill.svg"} height={38} width={38} alt="layers" />
                  <h4>Drills</h4>
               </button>
            </Link>
            <Link href="/categories/ladders" passHref={true}>
               <button type="submit" className="rounded-lg flex-none h-28 w-28 px-6 shadow-md bg-yellow-400 m-3 hover:bg-transparent hover:ring-2 hover:ring-yellow-400 focus:bg-blue-50 focus:ring-2 focus:ring-yellow-400">
                  <Image src={"/icons/ladder.svg"} height={38} width={38} alt="layers" />
                  <h4>Ladders</h4>
               </button>
            </Link>

            <Link href="/categories/saws" passHref={true}>
               <button type="submit" className="rounded-lg flex-none h-28 w-28 px-6 shadow-md bg-yellow-400 m-3 hover:bg-transparent hover:ring-2 hover:ring-yellow-400 focus:bg-blue-50 focus:ring-2 focus:ring-yellow-400">
                  <Image src={"/icons/saw.svg"} height={38} width={38} alt="layers" />
                  <h4>Saws</h4>
               </button>
            </Link>

            <Link href="/categories/hammers" passHref={true}>
               <button type="submit" className="rounded-lg flex-none h-28 w-28 px-6 shadow-md bg-yellow-400 m-3 hover:bg-transparent hover:ring-2 hover:ring-yellow-400 focus:bg-blue-50 focus:ring-2 focus:ring-yellow-400">
                  <Image src={"/icons/hammer.svg"} height={38} width={38} alt="layers" />
                  <h4>Hammers</h4>
               </button>
            </Link>

            <Link href="/categories/electrics" passHref={true}>
               <button type="submit" className="rounded-lg flex-none h-28 w-28 px-6 shadow-md bg-yellow-400 m-3 hover:bg-transparent hover:ring-2 hover:ring-yellow-400 focus:bg-blue-50 focus:ring-2 focus:ring-yellow-400">
                  <Image src={"/icons/circular-saw.svg"} height={38} width={38} alt="layers" />
                  <h4>Electrics</h4>
               </button>
            </Link>
            <Link href="/categories/other" passHref={true}>
               <button type="submit" className="rounded-lg flex-none h-28 w-28 px-6 shadow-md bg-yellow-400 m-3 hover:bg-transparent hover:ring-2 hover:ring-yellow-400 focus:bg-blue-50 focus:ring-2 focus:ring-yellow-400">
                  <Image src={"/icons/ellipsis.svg"} height={38} width={38} alt="layers" />
                  <h4>Other</h4>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default Categories;
