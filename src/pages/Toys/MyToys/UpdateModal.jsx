import { useForm } from "react-hook-form";

const UpdateModal = ({ toys, handleToyUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  } = toys || {};
  // console.log(toys);

  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my-modal-5" className="btn btn-primary">
        Edit
      </label>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" /> */}
      {/* <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl"> */}
      <h1 className="text-xl font-bold text-center">Update information</h1>
      <form
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
      </form>
    </>
  );
};

export default UpdateModal;
