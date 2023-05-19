import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
      >
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slider img"
            className="md:h-[1000px] bg-blend-overlay"
          />
          <div className="absolute top-1/2 right-5 bg-gray-700 text-white p-20">
            <h1 className="text-5xl font-bold">Remote Car</h1>
            <p className="my-3 text-red-500">Get up to 30% off only</p>
            <button className="bg-yellow-600 p-3 uppercase">shop now</button>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1559816933-5e69046d0cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="slider img"
            className="md:h-[1000px]"
          />
          <div className="absolute top-1/2 left-5 bg-gray-700 text-white p-20">
            <h1 className="text-5xl font-bold">Battery Car</h1>
            <p className="my-3 text-red-500">Get up to 30% off only</p>
            <button className="bg-yellow-600 p-3 uppercase">shop now</button>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="slider img"
            className="md:h-[1000px]"
          />
          <div className="absolute top-10 right-32 bg-gray-700 text-white p-20">
            <h1 className="text-5xl leading-tight font-bold">
              Awesome <br /> Remote Car
            </h1>
            <p className="my-3 text-red-500">Get up to 20% off only</p>
            <button className="bg-yellow-600 p-3 uppercase">shop now</button>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
