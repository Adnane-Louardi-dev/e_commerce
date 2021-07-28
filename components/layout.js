import Navbar from "./navbar";
import DiscountOffer from "../components/discountOffer";
import SearchInput from "../components/searchInput";
const Layout = ({ children }) => {
   return (
      <>
         <Navbar />
         <SearchInput />
         <DiscountOffer />

         {children}
      </>
   );
};

export default Layout;
