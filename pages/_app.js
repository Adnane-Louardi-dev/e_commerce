import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import Head from "next/head";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "nprogress/customColor.css";
import Router from "next/router";

//hide loading nprogress spinner
NProgress.configure({ showSpinner: false });
//mli ybda chnaging dyal route
Router.events.on("routeChangeStart", () => NProgress.start());
//mli yssali hihihihi
Router.events.on("routeChangeComplete", () => NProgress.done());

function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <Head>
            <title>Edona</title>
         </Head>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
