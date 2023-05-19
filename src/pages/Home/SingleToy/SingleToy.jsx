import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toys = useLoaderData();
  console.log(toys);

  return (
    <div>
      <h3>single toys</h3>
    </div>
  );
};

export default SingleToy;
