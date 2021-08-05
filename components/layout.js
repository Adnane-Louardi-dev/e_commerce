import Navbar from "./navbar";
import Footer from "./footer";
import SearchInput from "../components/searchInput";
// import DiscountOffer from "../components/discountOffer";
// import SentEmail from "../components/sentEmail";
const Layout = ({ children }) => {
   return (
      <>
         <Navbar />
         {/* //hado 7tal mn b3d w nzidhom fo9 categories */}
         {/* <SearchInput /> */}
         {/* <DiscountOffer /> */}
         {children}
         {/* //sent a email katkon fl footer 7ta nzid COD w ndirha */}
         {/* <SentEmail /> */}
         <Footer />
      </>
   );
};

export default Layout;
