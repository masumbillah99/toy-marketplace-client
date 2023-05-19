import { Outlet } from "react-router-dom";
import Banner from "../pages/Home/Banner/Banner";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
