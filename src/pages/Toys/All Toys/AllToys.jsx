import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const [postToys, setPostToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle("allToys");

  useEffect(() => {
    fetch("https://toy-ass11-server-side.vercel.app/allPostToys")
      .then((res) => res.json())
      .then((data) => setPostToys(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `https://toy-ass11-server-side.vercel.app/toySearchByName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPostToys(data);
      });
  };

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
        <div className="form-control flex-row items-center my-5 justify-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="search toy name or category"
            className="input input-bordered w-1/2 mr-5"
          />
          <input
            onClick={handleSearch}
            className="btn btn-primary w-1/5"
            type="submit"
            value="Search"
          />
        </div>
        {postToys?.map((toys) => (
          <ToyTable key={toys._id} toys={toys} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
