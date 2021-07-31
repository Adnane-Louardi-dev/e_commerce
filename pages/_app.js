import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />{" "}
         </Head>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
