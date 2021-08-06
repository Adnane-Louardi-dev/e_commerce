import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
   render() {
      return (
         <Html lang="en">
            <Head>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
               <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
               <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
               <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />{" "}
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
