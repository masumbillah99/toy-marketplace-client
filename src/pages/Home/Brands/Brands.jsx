import Marquee from "react-fast-marquee";
import i from "../../../assets/brands/1.png";
import ii from "../../../assets/brands/2.png";
import iii from "../../../assets/brands/3.jpg";
import iv from "../../../assets/brands/4.jpg";
import v from "../../../assets/brands/5.jpg";
import vi from "../../../assets/brands/6.jpg";
import vii from "../../../assets/brands/7.png";
import viii from "../../../assets/brands/9.jpg";

const Brands = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-3xl font-bold">Shop By Brands</h3>
      <hr className="bg-indigo-700 w-3/4 lg:w-1/3 h-1 mt-2 mb-7" />

      <Marquee speed={100} direction="right" pauseOnHover={true}>
        <div className="mx-4">
          <img className="w-full h-24 border" src={i} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20 border mx-3" src={ii} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20" src={iii} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20 border" src={iv} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20" src={v} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20 border" src={vi} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20" src={vii} alt="" />
        </div>
        <div className="mx-4">
          <img className="w-full h-20 border" src={viii} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
