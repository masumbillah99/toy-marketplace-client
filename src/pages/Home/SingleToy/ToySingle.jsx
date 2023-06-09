import { Rating } from "@smastrom/react-rating";
import { FaLocationArrow, FaUserCircle } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ToySingle = () => {
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

  console.log("object");

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="flex flex-col justify-center shadow-xl p-5">
        <figure>
          <img className="w-full lg:w-1/2 mx-auto" src={picture} alt="car" />
        </figure>
        <div className="my-5">
          <h2 className="text-4xl font-bold my-3">{toy_name}</h2>
          <p className="mt-3">{description}</p>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <p className="bg-orange-400 rounded-lg p-5">
              Category:{" "}
              <span className="font-bold text-xl">{sub_category.value}</span>
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

export default ToySingle;
