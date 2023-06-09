import { Outlet } from "react-router-dom";
import Banner from "../pages/Home/Banner/Banner";
import Brands from "../pages/Home/Brands/Brands";
import Gallery from "../pages/Home/Gallery/Gallery";
import TabCategory from "../pages/Home/TabCategory/TabCategory";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Gallery />
      <TabCategory />
      <Outlet />
      <Brands />
      <Footer />
    </>
  );
};

export default Main;
