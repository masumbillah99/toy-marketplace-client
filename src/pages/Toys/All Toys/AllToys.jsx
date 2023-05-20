import { useLoaderData } from "react-router-dom";
// import banner from "../../../assets/gallery/banner.jpeg";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const postToys = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="h-[400px] mb-10 bg-[url('https://images.pexels.com/photos/2527931/pexels-photo-2527931.jpeg?auto=compress&cs=tinysrgb&w=1600')] ">
        <div className="py-32 px-10">
          <h1 className="text-4xl font-bold mb-3 text-orange-400">
            All Added Toy Car
          </h1>
          <p className="leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Dolorem adipisci consequatur architecto aperiam nobis dicta. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quo, accusamus.
          </p>
        </div>
      </div>
      <div>
        {postToys?.map((toys) => (
          <ToyTable key={toys._id} toys={toys} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
