import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle, FaLocationArrow } from "react-icons/fa";

const ToyModal = ({ toyDetails }) => {
  // console.log(toyDetails);
  const {
    _id,
    picture,
    toy_name,
    seller_name,
    price,
    rating,
    quantity,
    description,
    sub_category,
    seller_email,
  } = toyDetails;
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-5" className="btn btn-primary">
        View Details
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <figure className="border-b">
            <img src={picture} alt="" />
          </figure>
          <div className="mt-3">
            {/* <hr className="my-3 bg-indigo-500 w-3/4 mx-auto" /> */}
            <h3 className="text-3xl font-bold my-3">{toy_name}</h3>
            <p className="leading-8">{description}</p>
            <p className="my-3 text-lg">Category: {sub_category}</p>
            <p className="text-lg">Available Quantity: {quantity}</p>
            <div className="flex justify-between my-3">
              <p className="text-red-500">
                Price: <span className="font-bold text-xl">${price}</span>
              </p>
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating || 0)}
                readOnly
              />
            </div>
            <hr />
            <h5 className="text-2xl ml-5 font-semibold text-indigo-500 my-3 uppercase">
              Seller Information
            </h5>
            <div className="bg-gray-300 text-blue-500 p-4 w-1/3 ml-5 rounded-md">
              <p className="text-xl font-semibold flex items-center gap-3 mb-3">
                <FaUserCircle />
                {seller_name}
              </p>
              <p className="flex items-center gap-3">
                <FaLocationArrow />
                {seller_email}
              </p>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn px-5">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyModal;
