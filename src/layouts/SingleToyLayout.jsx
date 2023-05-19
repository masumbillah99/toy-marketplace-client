import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const SingleToyLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SingleToyLayout;
