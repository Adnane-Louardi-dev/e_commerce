import Head from "next/head";
import Products from "../../components/products";
import commerce from "../../lib/commerce";

//fetch the product that have the clicked permalink
export async function getStaticProps({ params }) {
   const { permalink } = params;

   const product = await commerce.products.retrieve(permalink, {
      type: "permalink",
   });

   return {
      props: {
         product,
      },
   };
}

//create all possible paths for products section
export async function getStaticPaths() {
   const { data: products } = await commerce.products.list();
   return {
      paths: products.map((product) => ({
         params: {
            permalink: product.permalink,
         },
      })),
      fallback: false,
   };
}

//create component that handle a data passed from getStaticProps
export default function ProductPage({ product }) {
   return (
      <>
         <Head>
            <title>{`Edona | ${product.name}`}</title>
         </Head>
         <Products {...product} />
      </>
   );
}
