import commerce from "../lib/commerce";
import Card from "../components/card";
import Categories from "../components/categories";
import Link from "next/link";
const Home = ({ products, categories }) => {
   return (
      <>
         <Categories />
         <div className="grid grid-cols-1 lg:grid-cols-2">
            {products.map((product) => (
               // <Link href={`/products/${product.permalink}`} key={product.permalink} passHref={true}>
               <a key={product.permalink}>
                  <Card {...product} />
               </a>
               // </Link>
            ))}
            {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
         </div>
      </>
   );
};

export default Home;

export async function getStaticProps() {
   const { data: products } = await commerce.products.list();
   const { data: categories } = await commerce.categories.list();

   return {
      props: {
         products,
         categories,
      },
   };
}
