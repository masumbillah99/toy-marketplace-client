import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import Select from "react-select";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            defaultValue="Super Speed Car"
          />
          <input
            className="input input-bordered input-primary w-full"
            {...register("picture")}
            placeholder="Photo URL"
            type="url"
            defaultValue=""
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
        </div>
        <textarea
          className="textarea textarea-md input-primary w-full"
          {...register("description")}
          placeholder="description"
        />
        {/* <input
          className="input input-bordered input-primary "
          {...register("salary", { required: true })}
          placeholder="salary"
          defaultValue="30k"
        /> */}
        {/* <input
          className="input input-bordered input-primary "
          {...register("deadline")}
          placeholder="deadline"
          type="date"
        /> */}
        <input className="btn btn-primary w-full mt-5" value="Post Job" type="submit" />
      </form>
    </div>
  );
};

export default AddToys;
