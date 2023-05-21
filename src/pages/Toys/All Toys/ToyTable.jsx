import { Link } from "react-router-dom";

const ToyTable = ({ toys }) => {
  const { _id, seller_name, toy_name, sub_category, picture, price, quantity } =
    toys || {};

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody className="">
            <tr className="border">
              <td className="my-3">
                <div className="flex items-center space-x-3">
                  <div className="avatar mr-10">
                    <figure className="mask w-32 h-20 rounded-lg">
                      <img src={picture} alt="car picture" />
                    </figure>
                  </div>
                  <div>
                    <h3 className="font-bold">{toy_name}</h3>
                    <p className="text-smt">Category: {sub_category.value}</p>
                    <p className="text-smt text-opacity-50">
                      Seller: {seller_name}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <span>Price: ${price}</span>
                <br />
                <span className="badge badge-ghost badge-sm">
                  Quantity: {quantity}
                </span>
              </td>
              <th>
                <Link to={`/allToys/${_id}`} className="btn btn-primary">
                  details
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ToyTable;
