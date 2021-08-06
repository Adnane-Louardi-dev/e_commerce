import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import Head from "next/head";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
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
