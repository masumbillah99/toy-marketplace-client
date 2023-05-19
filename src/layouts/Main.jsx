import { Outlet } from "react-router-dom";
import Banner from "../pages/Home/Banner/Banner";
import Gallery from "../pages/Home/Gallery/Gallery";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Gallery />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
