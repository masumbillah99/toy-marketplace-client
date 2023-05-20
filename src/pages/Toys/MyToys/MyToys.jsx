import { useState, useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import UpdateModal from "./UpdateModal";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, control]);

  const handleToyUpdate = (data) => {
    fetch(`http://localhost:5000/updateToy/${data?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("updated successfully");
          setControl(!control);
        }
      });
  };

  const handleToyDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I'm sure",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/postToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success("Toy deleted successfully");
              const remaining = myToys?.filter((booking) => booking._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-20 md:px-10 lg:px-0">
      <h3 className="text-2xl font-bold">My Add Toys</h3>
      <hr className="bg-indigo-500 w-1/4 h-1 mt-2 mb-5" />
      <div className="md:px-10">
        {myToys?.map((toys) => (
          <div className="overflow-x-auto w-full" key={toys?._id}>
            <table className="table w-full">
              <tbody>
                <tr className="border">
                  <td className="my-3">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <figure className="mask w-20 h-20 rounded-lg">
                          <img src={toys?.picture} alt="car picture" />
                        </figure>
                      </div>
                      <div className="text-left">
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
                  <td className="text-center">
                    <span>Price: ${toys?.price}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Quantity: {toys?.quantity}
                    </span>
                  </td>
                  <td className="text-right">
                    <UpdateModal
                      toys={toys}
                      handleToyUpdate={handleToyUpdate}
                    />
                  </td>
                  <td className="text-right">
                    <button
                      onClick={() => handleToyDelete(toys?._id)}
                      className="btn btn-warning ml-10"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyToys;
