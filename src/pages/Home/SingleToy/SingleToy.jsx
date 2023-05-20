import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { FaUserCircle, FaLocationArrow } from "react-icons/fa";

const SingleToy = () => {
  const toyDetails = useLoaderData();
  const {
    picture,
    toy_name,
    seller_name,
    price,
    rating,
    quantity,
    description,
    sub_category,
    seller_email,
  } = toyDetails || {};

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="card lg:card-side gap-3 shadow-xl p-5 mx-2 lg:mx-0">
        <figure>
          <img className="lg:w-full" src={picture} alt="car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{toy_name}</h2>
          <p className="mt-3">{description}</p>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <p className="bg-orange-400 rounded-lg p-5">
              Category:{" "}
              <span className="font-bold text-xl">{sub_category}</span>
            </p>
            <p className="bg-orange-400 rounded-lg p-5">
              Quantity: <span className="font-bold text-xl">{quantity}</span>
            </p>
            <p className="bg-orange-400 rounded-lg p-5">
              Price: <span className="font-bold text-xl">${price}</span>
            </p>
            <div className="bg-blue-200 p-5 rounded-lg">
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating || 0)}
                readOnly
              />
            </div>
          </div>
          <div className="my-5">
            <h4 className="text-xl font-bold">Seller Information</h4>
            <div className="bg-orange-400 p-5 text-white mt-3 rounded-lg">
              <p className="flex items-center gap-3 text-2xl">
                <FaUserCircle />
                {seller_name}
              </p>
              <p className="flex items-center gap-3 text-2xl mt-3">
                <FaLocationArrow />
                {seller_email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
