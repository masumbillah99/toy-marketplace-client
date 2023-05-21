import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { useLoaderData } from "react-router-dom";

const Update = (props) => {
  const { user } = useContext(AuthContext);
  const toys = useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(toys);

  return (
    <>
      <h1 className="text-xl font-bold text-center">Update information</h1>
      {/* <form
        onSubmit={handleSubmit(handleToyUpdate)}
        className="bg-[#F3F3F3] p-10 rounded-lg"
      >
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="flex flex-col md:flex-row gap-3 mb-5">
          <div className="w-full">
            <label>Available Quantity</label> <br />
            <input
              className="input input-bordered input-primary w-full mt-2"
              {...register("quantity")}
              placeholder="Available Quantity"
              type="number"
              defaultValue={quantity}
            />
          </div>
          <div className="w-full">
            <label>Toy Price</label> <br />
            <input
              className="input input-bordered input-primary w-full mt-2"
              {...register("price")}
              placeholder="Toy Price"
              type="number"
              defaultValue={price}
            />
          </div>
        </div>
        <textarea
          className="textarea textarea-md input-primary w-full h-32"
          {...register("description")}
          placeholder="description"
          defaultValue={description}
        />
        <br />
        <input
          className="btn btn-primary w-full mt-5"
          value="Update Details"
          type="submit"
        />
        <input
          className="input w-full hidden"
          {...register("toy_name")}
          placeholder="Toy name"
          defaultValue={toy_name}
        />
        <input
          className="input w-full hidden"
          {...register("sub_category")}
          placeholder="category"
          defaultValue={sub_category?.value}
        />
        <input
          className="input w-full hidden"
          {...register("picture")}
          placeholder="picture"
          defaultValue={picture}
        />
        <input
          className="input input-bordered input-primary w-full hidden"
          {...register("seller_name")}
          placeholder="Seller Name"
          value={seller_name}
        />
        <input
          className="input input-bordered input-primary w-full hidden"
          {...register("seller_email")}
          value={seller_email}
          placeholder="your email"
          type="email"
        />
        <input className="input hidden" {...register("_id")} value={_id} />
        <input
          className="input hidden"
          {...register("rating")}
          value={rating}
        />
      </form> */}
      <ToastContainer />
    </>
  );
};

export default Update;
