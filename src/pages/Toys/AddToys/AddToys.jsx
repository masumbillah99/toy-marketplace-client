import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";
import useTitle from "../../../hooks/useTitle";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  useTitle("addToys");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    data.sub_category = selectedOption;
    console.log(data);
    fetch("http://localhost:5000/postToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          toast.success("Successfully add a new toy");
          e.target.reset();
        }
      });
  };

  const options = [
    { value: "Truck", label: "Truck" },
    { value: "Regular car", label: "Regular car" },
    { value: "Remote Car", label: "Remote Car" },
    { value: "Sports Cars", label: "Sports Cars" },
    { value: "Mini Police Car", label: "Mini Police Car" },
  ];

  //   console.log(selectedOption);

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] p-12 rounded-lg mx-2 md:mx-5 lg:mx-0"
      >
        {errors.exampleRequired && <span>This field is required</span>}
        <div className="flex flex-col md:flex-row gap-3">
          <input
            className="input input-bordered input-primary w-full"
            {...register("toy_name")}
            placeholder="Toy name"
            defaultValue="Music Car"
          />
          <input
            className="input input-bordered input-primary w-full"
            {...register("picture", { required: true })}
            placeholder="Photo URL"
            type="url"
            defaultValue="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 my-5">
          <input
            className="input input-bordered input-primary w-full"
            {...register("seller_name")}
            placeholder="Seller Name"
            value={user?.displayName}
          />
          <input
            className="input input-bordered input-primary w-full"
            value={user?.email}
            {...register("seller_email")}
            placeholder="your email"
            type="email"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="w-full"
          />
          <input
            className="input input-bordered input-primary w-full md:ml-5"
            {...register("quantity", { required: true })}
            placeholder="Available Quantity"
            type="number"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 my-5">
          <input
            className="input input-bordered input-primary w-full"
            {...register("price", { required: true })}
            placeholder="Toy Price"
            type="number"
          />
          <input
            className="input input-bordered input-primary w-full"
            {...register("rating")}
            placeholder="Toy Rating"
            type="number"
            defaultValue="4.3"
          />
        </div>
        <textarea
          className="textarea textarea-md input-primary w-full h-28"
          {...register("description")}
          placeholder="description"
          defaultValue="This is a awesome car. I like this car"
        />
        <input
          className="btn btn-primary w-full mt-5"
          value="Add New Toy"
          type="submit"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddToys;
