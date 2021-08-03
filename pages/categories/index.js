const Categorieslist = () => {
   return (
      <>
         {/* {products.map((product) => (
            <>
               <div className="mx-auto my-7" key={product.id}>
                  <Link href={`/products/${product.permalink}`} passHref={true}>
                     <a>
                        <Card {...product} />
                     </a>
                  </Link>
               </div>
            </>
         ))} */}
         <h1 className="text-center">Categories Page</h1>
      </>
   );
};
export default Categorieslist;

// import commerce from "../../lib/commerce";
// export async function getStaticProps() {
//    const { data: products } = await commerce.products.list({
//       category_slug: ["saw"],
//    });
//    return {
//       props: {
//          products,
//       },
//    };
// }
