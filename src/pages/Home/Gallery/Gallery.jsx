import one from "../../../assets/gallery/1.jpg";
import two from "../../../assets/gallery/2.jpg";
import three from "../../../assets/gallery/3.jpg";
import four from "../../../assets/gallery/4.jpg";
import five from "../../../assets/gallery/5.jpg";
import six from "../../../assets/gallery/6.jpg";
import seven from "../../../assets/gallery/7.jpg";
import eight from "../../../assets/gallery/8.jpg";
import nine from "../../../assets/gallery/9.jpg";
import ten from "../../../assets/gallery/10.jpg";
import eleven from "../../../assets/gallery/11.jpg";
import twelve from "../../../assets/gallery/12.jpg";
import thirteen from "../../../assets/gallery/13.jpg";
import fourteen from "../../../assets/gallery/14.jpg";
import fifteen from "../../../assets/gallery/15.jpg";
import sixteen from "../../../assets/gallery/16.jpg";
import LazyLoad from "react-lazy-load";

const Gallery = () => {
  return (
    <div className="my-20 max-w-screen-xl mx-auto px-2 md:px-5 lg:px-0">
      <h3 className="text-3xl font-bold">Car Toys Gallery</h3>
      <hr className="bg-indigo-700 w-1/2 lg:w-1/3 h-1 mt-2 mb-5" />
      <LazyLoad offset={300}>
        <div className="grid grid-cols-4 gap-3">
          <img src={seven} alt="" />
          <img src={two} alt="" />
          <img src={fourteen} alt="" />
          <img src={twelve} alt="" />
          <img src={nine} alt="" />
          <img src={five} alt="" />
          <img src={one} alt="" />
          <img src={sixteen} alt="" />
          <img src={four} alt="" />
          <img src={six} alt="" />
          <img src={ten} alt="" />
          <img src={three} alt="" />
          <img src={eight} alt="" />
          <img src={thirteen} alt="" />
          <img src={eleven} alt="" />
          <img src={fifteen} alt="" />
        </div>
      </LazyLoad>
    </div>
  );
};

export default Gallery;
