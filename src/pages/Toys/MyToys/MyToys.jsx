import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <h3 className="text-2xl font-bold">My Add Toys</h3>
      <hr className="bg-indigo-500 w-1/4 h-1 mt-2 mb-5" />
      <div className="px-10">
        {myToys?.map((toys) => (
          <div className="overflow-x-auto w-full" key={toys?._id}>
            <table className="table w-full">
              <tbody className="">
                <tr className="border">
                  <td className="my-3">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <figure className="mask w-20 h-20 rounded-lg">
                          <img src={toys?.picture} alt="car picture" />
                        </figure>
                      </div>
                      <div>
                        <h3 className="font-bold">{toys?.toy_name}</h3>
                        <p className="text-smt my-2">
                          Category: {toys?.sub_category?.value}
                        </p>
                        <p className="text-smt text-opacity-50">
                          Seller: {toys?.seller_name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span>Price: ${toys?.price}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Quantity: {toys?.quantity}
                    </span>
                  </td>
                  <th>
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-warning ml-10">Delete</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
