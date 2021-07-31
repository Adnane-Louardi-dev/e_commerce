import Navbar from "./navbar";
import DiscountOffer from "../components/discountOffer";
import SearchInput from "../components/searchInput";
import Categories from "./categories";
import SentEmail from "../components/sentEmail";
const Layout = ({ children }) => {
   return (
      <>
         {/* <Navbar />
         <SearchInput />
         <Categories />
         <DiscountOffer /> */}

         {children}
         {/* <SentEmail /> */}
      </>
   );
};

export default Layout;
