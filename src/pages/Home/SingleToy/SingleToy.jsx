import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { FaUserCircle, FaLocationArrow, FaStar } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdNumbers } from "react-icons/md";

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

  // console.log(toyDetails);

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="flex flex-col justify-center shadow-xl p-5">
        <figure>
          <img className="w-full lg:w-3/4 mx-auto" src={picture} alt="car" />
        </figure>
        <div className="my-7 lg:mx-28">
          <h2 className="text-4xl font-bold">{toy_name}</h2>
          <p className="my-3">
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempore, dolorum esse minima voluptates perspiciatis eligendi
            animi, repellendus corrupti ducimus delectus magni reprehenderit a
            dicta eum quo, laboriosam illum laudantium blanditiis!
          </p>
          <p className="text-xl badge badge-outline py-5">
            Category: {sub_category}
          </p>
          <div className="flex flex-col md:flex-row gap-3 text-center my-7">
            <div className="bg-gray-300 w-full text-center p-5 rounded-lg">
              <p className="text-xl">Customer Review</p>
              <p className="flex items-center justify-center gap-2 text-xl font-semibold my-3">
                <FaStar className="text-orange-500" />
                {rating}
              </p>
              <Rating
                style={{ maxWidth: 100 }}
                className="badge mx-auto"
                value={Math.round(rating || 0)}
                readOnly
              />
            </div>
            <div className="bg-gray-300 w-full p-5 rounded-lg">
              <p className="text-xl">Quantity</p>
              <p className="flex items-center justify-center gap-2 text-xl font-semibold my-3">
                <MdNumbers /> {quantity}
              </p>
              <p className="badge">available in stock</p>
            </div>
            <div className="bg-gray-300 w-full p-5 rounded-lg">
              <p className="text-xl">Toy Price</p>
              <p className="flex items-center justify-center gap-2 text-xl font-semibold my-3">
                <HiCurrencyDollar /> {price}
              </p>
              <p className="badge">Save 20%</p>
            </div>
          </div>
          <div className="my-5">
            <h4 className="text-xl underline">Seller Information:</h4>
            <div className="ml-10 mt-2">
              <p className="flex items-center gap-3 text-2xl">
                <FaUserCircle />
                {seller_name}
              </p>
              <p className="flex items-center gap-3 text-2xl mt-3">
                <FaLocationArrow />
                {seller_email}
              </p>
            </div>
            <button className="btn btn-warning w-full mt-5">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
