import Navbar from "./navbar";
import SearchInput from "../components/searchInput";
// import DiscountOffer from "../components/discountOffer";
// import SentEmail from "../components/sentEmail";
const Layout = ({ children }) => {
   return (
      <>
         <Navbar />
         {/* <SearchInput /> */}
         {/* <DiscountOffer /> */}
         {children}
         {/* <SentEmail /> */}
      </>
   );
};

export default Layout;
