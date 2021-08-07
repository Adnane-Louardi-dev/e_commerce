import Commerce from "@chec/commerce.js";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
   const [products, setProducts] = useState([]);
   const commerce = new Commerce("pk_test_311488271be695cf3e21135b90bc2ae443ea66b83d5aa");

   useEffect(async () => {
      commerce.cart.contents().then((item) => setProducts(item));
   }, []);

   return (
      <>
         {products.length === 0 && (
            <div className="text-white px-6 py-4 my-16 mx-5 border-0 rounded relative bg-yellow-500">
               <span className="text-xl inline-block mr-5 align-middle">
                  <i className="fas fa-bell" />
               </span>
               <span className="inline-block align-middle mr-8">
                  Empty cart!
                  <Link href="/">
                     <b className="capitalize cursor-pointer"> go shopping!!</b>
                  </Link>
               </span>
               <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                  <span>×</span>
               </button>
            </div>
         )}
         <div className="flex flex-col my-14 mx-10 font-rubik noScrollbar">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                     <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-800 rounded-lg">
                           <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                 Product name
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                 Description
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                 Status
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                 Id
                              </th>
                           </tr>
                        </thead>
                        {products.map((product) => (
                           <tbody className="bg-white divide-y divide-gray-200" key={product.id}>
                              <tr>
                                 <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                       <div className="relative flex-shrink-0 h-10 w-10 shadow-sm">
                                          <Image layout="fill" objectFit="cover" className="h-10 w-10 rounded-sm" src={product.media.source} alt={product.name} />
                                       </div>
                                       <div className="ml-4">
                                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{product.price.formatted_with_code}</div>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                 </td>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
                                 <td
                                    onClick={() => {
                                       commerce.cart.remove(product.id);
                                       setProducts(
                                          products.filter((item) => {
                                             return item.id !== product.id;
                                          })
                                       );
                                    }}
                                    className="px-6 py-4 whitespace-nowrap text-right text-md font-medium bg-red-400 rounded-lg cursor-pointer"
                                 >
                                    <a className="text-white">Remove</a>
                                 </td>
                              </tr>
                           </tbody>
                        ))}
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Cart;
