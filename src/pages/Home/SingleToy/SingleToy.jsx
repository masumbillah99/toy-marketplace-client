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

  // console.log(toyDetails);

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="flex flex-col justify-center shadow-xl p-5">
        <figure>
          <img className="w-full lg:w-3/4 mx-auto" src={picture} alt="car" />
        </figure>
        <div className="my-7 lg:mx-28">
          <h2 className="text-4xl font-bold">{toy_name}</h2>
          <p className="text-xl my-5 text-red-600">
            Price: ${price}
            <span className="bg-gray-300 p-2 ms-3 rounded-md">SAVE 20%</span>
          </p>
          <p className="text-xl">Category: {sub_category}</p>
          <div className="flex flex-col md:flex-row gap-5 justify-between mt-5">
            <p className="">
              Available Quantity:
              <span className="font-bold text-xl"> {quantity}</span>
            </p>
            <div className="flex items-center gap-5">
              Customer Review:
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating || 0)}
                readOnly
              />
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
            <p className="bg-gray-300 p-5 mt-7 rounded-lg">
              {description} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tempore, dolorum esse minima voluptates perspiciatis
              eligendi animi, repellendus corrupti ducimus delectus magni
              reprehenderit a dicta eum quo, laboriosam illum laudantium
              blanditiis!
            </p>
            <button className="btn btn-warning w-full mt-5">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
