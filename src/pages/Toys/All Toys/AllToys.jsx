import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const postToys = useLoaderData();
  console.log(postToys);

  return (
    <div>
      <h3>All New TOys</h3>
    </div>
  );
};

export default AllToys;
