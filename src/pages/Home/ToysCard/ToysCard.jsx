import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ToyModal from "./ToyModal";

const CarToys = () => {
  const allCarToys = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto my-20 px-2 md:px-10 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-3">
        {allCarToys?.map((toys) => (
          <div
            className="card card-compact w-96 bg-base-100 shadow-xl p-3"
            key={toys._id}
          >
            <figure>
              <img className="h-72 w-full" src={toys?.picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                {toys?.toy_name}
              </h2>
              <div className="flex justify-between">
                <p className="text-red-500">
                  Price:{" "}
                  <span className="font-bold text-lg">${toys?.price}</span>
                </p>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={Math.round(toys?.rating || 0)}
                  readOnly
                />
              </div>
              <div className="card-actions mt-3">
                <Link to={`/toys/${toys._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarToys;
