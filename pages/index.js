import commerce from "../lib/commerce";
import Card from "../components/card";
import Categories from "../components/categories";
import Link from "next/link";
const Home = ({ products }) => {
   return (
      <>
         <Categories />
         <div className="grid grid-cols-1 lg:grid-cols-2">
            {products.map((product) => (
               <Card {...product} key={product.id} />
            ))}
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
